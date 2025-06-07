// Este script agora carrega os dados de cada artista de um arquivo JSON separado em data/artistas/

let songData = {};
let currentArtistKey = null;

// Função para carregar os dados do artista selecionado
function loadSelectedSong() {
    const selectedSong = localStorage.getItem("selectedSong");
    const selectedArtist = localStorage.getItem("selectedArtist");

    if (!selectedArtist) {
        document.getElementById("song-title").innerText = "Música não encontrada";
        document.getElementById("artist-name").innerText = "";
        document.getElementById("song-tabs-content").innerHTML = "";
        document.getElementById("song-video").style.display = "none";
        const artistImageElement = document.getElementById("artist-image");
        if (artistImageElement) {
            artistImageElement.src = "";
            artistImageElement.alt = "";
        }
        return;
    }

    fetch(`../data/artistas/${selectedArtist}.json`)
        .then(response => response.json())
        .then(artistData => {
            songData = artistData;
            currentArtistKey = selectedArtist;

            if (artistData.músicas && artistData.músicas[selectedSong]) {
                const songDetails = artistData.músicas[selectedSong];

                document.getElementById("song-title").innerText = selectedSong;
                document.getElementById("artist-name").innerText = artistData.displayName || selectedArtist;

                const artistImageElement = document.getElementById("artist-image");
                if (artistImageElement) {
                    artistImageElement.src = artistData.artistImage;
                    artistImageElement.alt = `Foto de ${artistData.displayName || selectedArtist}`;
                }

                document.getElementById("song-tabs-content").innerHTML = songDetails.tabs;
                document.getElementById("song-video").src = songDetails.videoUrl + "?autoplay=0";
                document.getElementById("song-video1").src = songDetails.videoUrl + "?autoplay=0";
                document.getElementById("song-video").style.display = "";

                loadOtherSongs(selectedArtist, selectedSong);
            } else {
                document.getElementById("song-title").innerText = "Música não encontrada";
                document.getElementById("artist-name").innerText = "";
                document.getElementById("song-tabs-content").innerHTML = "";
                document.getElementById("song-video").style.display = "none";
                const artistImageElement = document.getElementById("artist-image");
                if (artistImageElement) {
                    artistImageElement.src = "";
                    artistImageElement.alt = "";
                }
                loadOtherSongs(selectedArtist, null);
            }
        })
        .catch(error => {
            console.error('Erro ao carregar JSON do artista:', error);
            document.getElementById("song-title").innerText = "Música não encontrada";
            document.getElementById("artist-name").innerText = "";
            document.getElementById("song-tabs-content").innerHTML = "";
            document.getElementById("song-video").style.display = "none";
            const artistImageElement = document.getElementById("artist-image");
            if (artistImageElement) {
                artistImageElement.src = "";
                artistImageElement.alt = "";
            }
        });
}

// Carrega outras músicas do mesmo artista
function loadOtherSongs(artistKey, currentSong) {
    const otherSongsList = document.querySelector('.sidebar-musica ul');
    if (!otherSongsList) return;
    otherSongsList.innerHTML = '';

    fetch(`../data/artistas/${artistKey}.json`)
        .then(response => response.json())
        .then(artistData => {
            if (artistData.músicas) {
                const songs = Object.keys(artistData.músicas);
                songs.filter(song => song !== currentSong).forEach(song => {
                    const listItem = document.createElement('li');
                    listItem.textContent = song;
                    listItem.innerHTML += ' <span class="music-icons">🎵</span>';
                    listItem.addEventListener('click', () => {
                        localStorage.setItem("selectedSong", song);
                        localStorage.setItem("selectedArtist", artistKey);
                        loadSelectedSong();
                    });
                    otherSongsList.appendChild(listItem);
                });
            }
            if (otherSongsList.children.length === 0) {
                const listItem = document.createElement('li');
                listItem.textContent = "Nenhuma outra música disponível";
                otherSongsList.appendChild(listItem);
            }
        })
        .catch(() => {
            const listItem = document.createElement('li');
            listItem.textContent = "Nenhuma outra música disponível";
            otherSongsList.appendChild(listItem);
        });
}

// Busca global: carrega todos os arquivos de artistas e permite busca por música/artista
let allSongsData = {};
let allArtistsLoaded = false;

document.addEventListener('DOMContentLoaded', () => {
    loadSelectedSong();
    loadAllArtistsForSearch();
    setupSearch();
});

function loadAllArtistsForSearch() {
    // Lista de artistas (adicione manualmente ou gere dinamicamente)
    const artistKeys = [
        "charliebrownjr",
        "michaeljackson",
        "jorgemateus",
        "johncoltrane",
        // Adicione aqui os outros artistas, ex: "michaeljackson", "jorgemateus", "johncoltrane"
    ];
    let loaded = 0;
    artistKeys.forEach(key => {
        fetch(`../data/artistas/${key}.json`)
            .then(response => response.json())
            .then(data => {
                allSongsData[key] = data;
                loaded++;
                if (loaded === artistKeys.length) {
                    allArtistsLoaded = true;
                }
            })
            .catch(() => {
                loaded++;
                if (loaded === artistKeys.length) {
                    allArtistsLoaded = true;
                }
            });
    });
}

function setupSearch() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    if (!searchInput || !searchResults) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        searchResults.innerHTML = '';

        if (query.length < 2) {
            searchResults.classList.remove('show');
            return;
        }

        const results = searchSongs(query);

        if (results.length > 0) {
            results.forEach(result => {
                const resultItem = document.createElement('div');
                resultItem.innerHTML = `
                    <strong>${result.song}</strong><br>
                    <small>${result.artist}</small>
                `;
                resultItem.addEventListener('click', () => {
                    localStorage.setItem("selectedSong", result.song);
                    localStorage.setItem("selectedArtist", result.artistKey);
                    window.location.href = "../pages/musica.html";
                });
                searchResults.appendChild(resultItem);
            });
            searchResults.classList.add('show');
        } else {
            const noResults = document.createElement('div');
            noResults.textContent = 'Nenhuma música encontrada';
            searchResults.appendChild(noResults);
            searchResults.classList.add('show');
        }
    });

    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.classList.remove('show');
        }
    });
}

function searchSongs(query) {
    const results = [];
    for (const [artistKey, artistData] of Object.entries(allSongsData)) {
        const artistName = artistData.displayName || artistKey;
        if (artistData.músicas) {
            for (const [songName] of Object.entries(artistData.músicas)) {
                if (
                    songName.toLowerCase().includes(query) ||
                    artistName.toLowerCase().includes(query)
                ) {
                    results.push({
                        song: songName,
                        artist: artistName,
                        artistKey: artistKey
                    });
                }
            }
        }
    }
    return results;
}