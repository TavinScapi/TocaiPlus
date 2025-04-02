// Configuração do Spotify
const clientId = "1ca02f4c12f247de9ef1552f920e191e";
let redirectUri;

if (window.location.hostname === "127.0.0.1") {
    redirectUri = "http://127.0.0.1:5500/player/player.html"; // Para testes locais
} else {
    redirectUri = "https://tavinscapi.github.io/Tocai/player/player.html"; // Para produção no GitHub Pages
}

const scopes = "user-read-private user-read-email streaming user-modify-playback-state";

// Variáveis globais
let searchResults = [];
let currentTrackIndex = 0;
let currentTrackId = null;
let accessToken = null;

// Verificar autenticação ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
});

// Verificar status de autenticação
function checkAuth() {
    const token = localStorage.getItem("spotifyToken");
    const tokenExpiry = localStorage.getItem("spotifyTokenExpiry");
    
    // Se o token existe e não expirou
    if (token && tokenExpiry && new Date().getTime() < tokenExpiry) {
        accessToken = token;
        initializePlayer();
    } else {
        // Limpar tokens inválidos/expiraram
        localStorage.removeItem("spotifyToken");
        localStorage.removeItem("spotifyTokenExpiry");
        authenticate();
    }
}

// Autenticar com Spotify
function authenticate() {
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}`;
    window.location.href = authUrl;
}

// Extrair token da URL após redirecionamento
function extractTokenFromUrl() {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const token = params.get("access_token");
    const expiresIn = params.get("expires_in");

    if (token && expiresIn) {
        // Calcular tempo de expiração (subtrair 5 minutos para margem de segurança)
        const expiryTime = new Date().getTime() + (parseInt(expiresIn) - 300) * 1000;
        
        localStorage.setItem("spotifyToken", token);
        localStorage.setItem("spotifyTokenExpiry", expiryTime);
        accessToken = token;
        
        // Limpar a URL
        window.history.replaceState({}, document.title, window.location.pathname);
        
        initializePlayer();
        return true;
    }
    return false;
}

// Inicializar o player após autenticação
function initializePlayer() {
    console.log("Player inicializado com sucesso");
    // Aqui você pode adicionar qualquer inicialização necessária
}

// Buscar músicas
async function searchTracks(query) {
    if (!accessToken) {
        alert("Por favor, faça login primeiro");
        authenticate();
        return [];
    }

    try {
        const response = await fetch(
            `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=5`,
            {
                headers: { Authorization: `Bearer ${accessToken}` },
            }
        );

        if (response.status === 401) {
            // Token expirado
            localStorage.removeItem("spotifyToken");
            localStorage.removeItem("spotifyTokenExpiry");
            alert("Sessão expirada. Por favor, faça login novamente.");
            authenticate();
            return [];
        }

        const data = await response.json();
        return data.tracks ? data.tracks.items : [];
    } catch (error) {
        console.error("Erro ao buscar músicas:", error);
        return [];
    }
}

// Reproduzir música
async function playTrack(index) {
    currentTrackIndex = index;
    const track = searchResults[index];
    currentTrackId = track.id;

    try {
        // Primeiro tentamos usar o Web Playback SDK
        const player = document.getElementById("player");
        player.innerHTML = `
            <iframe src="https://open.spotify.com/embed/track/${track.id}" 
                    width="100%" 
                    height="380" 
                    frameborder="0" 
                    allowtransparency="true" 
                    allow="encrypted-media">
            </iframe>
        `;
        
        // Tentar obter letras
        await fetchLyrics(track.name, track.artists[0].name);
    } catch (error) {
        console.error("Erro ao reproduzir música:", error);
        alert("Não foi possível reproduzir a música. Por favor, tente novamente.");
    }
}

// Buscar letras (exemplo básico)
async function fetchLyrics(trackName, artistName) {
    const lyricsContainer = document.getElementById("lyrics");
    lyricsContainer.innerHTML = "Buscando letras...";

    try {
        // Esta é uma API de exemplo - você pode substituir por uma API real de letras
        const response = await fetch(`https://api.lyrics.ovh/v1/${encodeURIComponent(artistName)}/${encodeURIComponent(trackName)}`);
        
        if (!response.ok) throw new Error("Letras não encontradas");
        
        const data = await response.json();
        lyricsContainer.innerHTML = data.lyrics || "Letras não disponíveis";
    } catch (error) {
        console.error("Erro ao buscar letras:", error);
        lyricsContainer.innerHTML = "Não foi possível carregar as letras";
    }
}

// Verificar autenticação ao carregar
if (!extractTokenFromUrl()) {
    checkAuth();
}

// Event Listeners
document.getElementById("searchButton").addEventListener("click", async () => {
    const query = document.getElementById("searchInput").value.trim();
    if (query) {
        searchResults = await searchTracks(query);
        displaySearchResults(searchResults);
        if (searchResults.length > 0) {
            playTrack(0);
        }
    }
});

document.getElementById("searchInput").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        document.getElementById("searchButton").click();
    }
});

document.getElementById("prevButton").addEventListener("click", () => {
    if (currentTrackIndex > 0) {
        playTrack(currentTrackIndex - 1);
    }
});

document.getElementById("nextButton").addEventListener("click", () => {
    if (currentTrackIndex < searchResults.length - 1) {
        playTrack(currentTrackIndex + 1);
    }
});

// Exibir resultados
function displaySearchResults(tracks) {
    const container = document.getElementById("searchResults");
    container.innerHTML = tracks.map((track, index) => `
        <div class="track-item" onclick="playTrack(${index})">
            <img src="${track.album.images[0]?.url || 'placeholder.png'}" alt="${track.name}">
            <div>
                <strong>${track.name}</strong>
                <span>${track.artists.map(a => a.name).join(", ")}</span>
            </div>
        </div>
    `).join("");
}