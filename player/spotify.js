// Configuração do Spotify
const clientId = "1ca02f4c12f247de9ef1552f920e191e";
const redirectUri = "http://127.0.0.1:5500/player/player.html"; // URL do seu site
const scopes = "user-read-private user-read-email streaming";

// URL para autenticação do Spotify
const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}`;

// Captura token da URL e armazena no localStorage
function getTokenFromUrl() {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const token = params.get("access_token");

    if (token) {
        localStorage.setItem("spotifyToken", token);
        window.history.pushState("", document.title, redirectUri); // Remove token da URL
    }
}

// Função para obter um token válido
function getToken() {
    let token = localStorage.getItem("spotifyToken");

    if (!token) {
        window.location.href = authUrl; // Redireciona para login no Spotify
    }

    return token;
}

// Buscar músicas no Spotify
async function searchTracks(query) {
    const token = getToken();

    try {
        const response = await fetch(
            `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=5`,
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );

        if (response.status === 401) {
            alert("Sessão expirada! Faça login novamente.");
            localStorage.removeItem("spotifyToken");
            window.location.href = authUrl;
            return [];
        }

        const data = await response.json();
        return data.tracks ? data.tracks.items : [];
    } catch (error) {
        console.error("Erro ao buscar músicas:", error);
        return [];
    }
}

// Executa a captura do token ao carregar a página
getTokenFromUrl();


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

// Elemento onde os resultados serão exibidos
const resultsContainer = document.getElementById("searchResults");

// Buscar músicas no Spotify e exibir na interface
async function searchTracks(query) {
    const token = getToken();

    try {
        const response = await fetch(
            `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=5`,
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );

        if (response.status === 401) {
            alert("Sessão expirada! Faça login novamente.");
            localStorage.removeItem("spotifyToken");
            window.location.href = authUrl;
            return [];
        }

        const data = await response.json();

        if (data.tracks && data.tracks.items.length > 0) {
            displaySearchResults(data.tracks.items);
        } else {
            resultsContainer.innerHTML = "<p>Nenhum resultado encontrado.</p>";
        }

    } catch (error) {
        console.error("Erro ao buscar músicas:", error);
        resultsContainer.innerHTML = "<p>Erro ao carregar músicas.</p>";
    }
}

// Exibir os resultados da busca
function displaySearchResults(tracks) {
    resultsContainer.innerHTML = ""; // Limpar a lista antes de exibir novos resultados

    tracks.forEach((track, index) => {
        const trackElement = document.createElement("div");
        trackElement.classList.add("track-item");
        trackElement.innerHTML = `
            <div onclick="playTrack(${index})">
                <img src="${track.album.images[2]?.url || 'placeholder.jpg'}" alt="${track.name}" width="40" height="40">
                ${track.name} - ${track.artists[0].name}
            </div>
        `;
        resultsContainer.appendChild(trackElement);
    });

    // Salvar a lista de músicas encontradas
    searchResults = tracks;
}

// Reproduzir uma música ao clicar
function playTrack(index) {
    const track = searchResults[index];
    const player = document.getElementById("player");
    player.innerHTML = `<iframe src="https://open.spotify.com/embed/track/${track.id}" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
}

// Ação do botão de busca
document.getElementById("searchButton").addEventListener("click", () => {
    const query = document.getElementById("searchInput").value;
    if (query.trim() !== "") {
        searchTracks(query);
    } else {
        alert("Por favor, insira um termo de busca.");
    }
});

// Permitir buscar ao pressionar Enter
document.getElementById("searchInput").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        searchTracks(event.target.value);
    }
});


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

