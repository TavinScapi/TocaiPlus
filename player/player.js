let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange();
})

searchBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange();
})

function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
}

menuBtnChange();

// Configuração do Spotify
const clientId = "ff5d900ec00648328f8485773f1ab909";
const clientSecret = "e7b7a61a838d439996ae19db114fd885";
let accessToken = "";
let currentTrackIndex = 0;
let searchResults = [];
let currentLyrics = [];
let currentLyricIndex = 0;
const playedTracks = []; // Lista de músicas reproduzidas

// Variáveis para o player
let currentTrackId;

// Obter token de acesso
async function getAccessToken() {
    try {
        const response = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
            },
            body: "grant_type=client_credentials",
        });

        if (!response.ok) {
            throw new Error("Erro ao obter o token de acesso");
        }

        const data = await response.json();
        return data.access_token;
    } catch (error) {
        console.error("Erro ao obter o token de acesso:", error);
        alert("Erro ao conectar com o Spotify. Por favor, tente novamente mais tarde.");
        return null;
    }
}

// Buscar músicas no Spotify
async function searchTracks(query) {
    try {
        if (!accessToken) {
            accessToken = await getAccessToken();
            if (!accessToken) return [];
        }

        const response = await fetch(
            `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=5`,
            {
                headers: {
                    Authorization: "Bearer " + accessToken,
                },
            },
        );

        if (response.status === 401) {
            // Token expirado, obter um novo
            accessToken = await getAccessToken();
            return searchTracks(query);
        }

        if (!response.ok) {
            throw new Error("Erro na busca de músicas");
        }

        const data = await response.json();
        return data.tracks.items;
    } catch (error) {
        console.error("Erro ao buscar músicas:", error);
        alert("Erro ao buscar músicas. Por favor, tente novamente.");
        return [];
    }
}

// Exibir resultados da busca
function displaySearchResults(tracks) {
    const resultsContainer = document.getElementById("searchResults");

    // Primeiro, adicionar o título
    resultsContainer.innerHTML = '<div class="playlist-title">Lista de reprodução</div>';

    if (tracks.length === 0) {
        resultsContainer.innerHTML += '<div class="no-results">Nenhum resultado encontrado</div>';
        return;
    }

    resultsContainer.innerHTML += tracks
        .map(
            (track, index) => `
        <div onclick="playTrack(${index})" class="${index === currentTrackIndex ? "current-track" : ""}">
            <img src="${track.album.images[2]?.url || "/placeholder.svg?height=40&width=40"}" alt="${track.album.name}" style="width: 40px; height: 40px; vertical-align: middle; margin-right: 10px;">
            ${track.name} - ${track.artists[0].name}
        </div>
    `,
        )
        .join("");
    searchResults = tracks;

    // Rolar até o elemento atual
    if (currentTrackIndex >= 0) {
        const currentElement = resultsContainer.children[currentTrackIndex + 1];
        if (currentElement) {
            currentElement.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
    }
}


// Reproduzir uma música
function playTrack(index) {
    currentTrackIndex = index;
    const track = searchResults[index];
    currentTrackId = track.id;
    const player = document.getElementById("player");
    player.innerHTML = ""; // Limpar o player anterior
    player.innerHTML = `<iframe id="spotify-iframe" src="https://open.spotify.com/embed/track/${currentTrackId}" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;

    // Obter letras do Spotify
    fetchSpotifyLyrics(currentTrackId);

    // Manter a lista de resultados visível
    displaySearchResults(searchResults);

    // Ocultar sugestões
    document.getElementById("suggestions").style.display = "none";

    // Atualizar o título da página
    document.title = `${track.name} - ${track.artists[0].name} | Reprodutor`;
}

// Obter letras do Spotify
async function fetchSpotifyLyrics(trackId) {
    const lyricsContainer = document.getElementById("lyrics");
    lyricsContainer.innerHTML = "Carregando letras...";

    try {
        const response = await fetch(`https://api.spotify.com/v1/tracks/${trackId}`, {
            headers: {
                Authorization: "Bearer " + accessToken,
            },
        });

        if (!response.ok) {
            throw new Error("Não foi possível obter os dados da música");
        }

        const trackData = await response.json();

        if (trackData.lyrics) {
            // Se o Spotify fornecer letras, elas são exibidas
            lyricsContainer.innerHTML = trackData.lyrics.lines
                .map((line, index) => `<div id="lyric-line-${index}">${line.words}</div>`)
                .join("");
        } else {
            // Se não houver letras disponíveis no Spotify, usamos outro método
            await fetchLyricsFromGenius(trackData.name, trackData.artists[0].name);
        }
    } catch (error) {
        console.error("Erro ao obter letras do Spotify:", error);
        // Se houver um erro, tentamos com outro método
        await fetchLyrics(searchResults[currentTrackIndex].name, searchResults[currentTrackIndex].artists[0].name);
    }
}

// Obter letras da música por outro método
async function fetchLyrics(trackName, artistName) {
    const lyricsContainer = document.getElementById("lyrics");
    lyricsContainer.innerHTML = "Carregando letras...";
    try {
        const response = await fetch(
            `https://api.lyrics.ovh/v1/${encodeURIComponent(artistName)}/${encodeURIComponent(trackName)}`,
        );

        if (!response.ok) {
            throw new Error("Não foi possível encontrar as letras");
        }

        const data = await response.json();

        if (!data.lyrics) {
            throw new Error("Nenhuma letra encontrada para esta música");
        }

        // Processar as letras para remover linhas vazias e metadados
        currentLyrics = data.lyrics
            .split("\n")
            .filter((line) => line.trim() !== "" && !line.includes("[") && !line.includes("]"));

        lyricsContainer.innerHTML = currentLyrics
            .map((line, index) => `<div id="lyric-line-${index}">${line}</div>`)
            .join("");
        currentLyricIndex = 0;
    } catch (error) {
        console.error("Erro ao carregar as letras:", error);
        lyricsContainer.innerHTML = "Não foi possível carregar as letras para esta música.";
    }
}

// Mudar para a música anterior
document.getElementById("prevButton").addEventListener("click", () => {
    if (currentTrackIndex > 0) {
        currentTrackIndex--;
        playTrack(currentTrackIndex);
    } else {
        alert("Você já está na primeira música da busca");
    }
});

// Mudar para a próxima música
document.getElementById("nextButton").addEventListener("click", () => {
    if (currentTrackIndex < searchResults.length - 1) {
        currentTrackIndex++;
        playTrack(currentTrackIndex);
    } else {
        alert("Você chegou ao final da lista de reprodução");
    }
});

// Sugestões de busca
document.getElementById("searchInput").addEventListener("input", async (event) => {
    const query = event.target.value;
    const suggestionsContainer = document.getElementById("suggestions");

    if (query.length > 2) {
        const tracks = await searchTracks(query);

        if (tracks.length > 0) {
            suggestionsContainer.innerHTML = tracks
                .map(
                    (track) => `
                <div onclick="selectSuggestion('${track.name.replace(/'/g, "\\'")} - ${track.artists[0].name.replace(/'/g, "\\'")}')">
                    ${track.name} - ${track.artists[0].name}
                </div>
            `,
                )
                .join("");
            suggestionsContainer.style.display = "block";
        } else {
            suggestionsContainer.style.display = "none";
        }
    } else {
        suggestionsContainer.style.display = "none";
    }
});

// Selecionar sugestão
function selectSuggestion(suggestion) {
    document.getElementById("searchInput").value = suggestion;
    document.getElementById("suggestions").style.display = "none";
    performSearch(suggestion);
}

// Realizar busca
async function performSearch(query) {
    const tracks = await searchTracks(query);
    displaySearchResults(tracks);
    if (tracks.length > 0) {
        playTrack(0);
    }
}

// Buscar músicas ao clicar no botão de busca
document.getElementById("searchButton").addEventListener("click", () => {
    const query = document.getElementById("searchInput").value;
    if (query.trim() !== "") {
        performSearch(query);
    } else {
        alert("Por favor, insira um termo de busca");
    }
});

// Buscar músicas ao pressionar Enter no campo de busca
document.getElementById("searchInput").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        const query = event.target.value;
        if (query.trim() !== "") {
            performSearch(query);
        }
    }
});

// Inicializar a aplicação
(async () => {
    try {
        accessToken = await getAccessToken();
        console.log("Aplicação inicializada com sucesso");
    } catch (error) {
        console.error("Erro ao inicializar a aplicação:", error);
    }
})();

