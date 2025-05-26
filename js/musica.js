let songData = {};

fetch('../musica.json')
    .then(response => response.json())
    .then(data => {
        songData = data.Artistas; // Acessa o objeto "Artistas"
        loadSelectedSong();
    })
    .catch(error => console.error('Erro ao carregar JSON:', error));

function loadSelectedSong() {
    const selectedSong = localStorage.getItem("selectedSong");
    let artistFound = null;
    let songDetails = null;

    // Procurar a música em todos os artistas
    for (const [artist, artistData] of Object.entries(songData)) {
        if (artistData.músicas && artistData.músicas[selectedSong]) {
            artistFound = artist;
            songDetails = artistData.músicas[selectedSong];
            break;
        }
    }

    if (artistFound && songDetails) {
        document.getElementById("song-title").innerText = selectedSong;

        // Usa displayName se existir, senão usa a chave do artista
        const artistDisplayName = songData[artistFound].displayName || artistFound;
        document.getElementById("artist-name").innerText = artistDisplayName;

        const artistImageElement = document.getElementById("artist-image");
        if (artistImageElement) {
            artistImageElement.src = songData[artistFound].artistImage;
            artistImageElement.alt = `Foto de ${artistDisplayName}`;
        }

        document.getElementById("song-tabs-content").innerHTML = songDetails.tabs;
        document.getElementById("song-video").src = songDetails.videoUrl + "?autoplay=0";
        document.getElementById("song-video1").src = songDetails.videoUrl + "?autoplay=0";

        // Carrega outras músicas do mesmo artista
        loadOtherSongs(artistFound, selectedSong);
    } else {
        // Tratar música não encontrada
        document.getElementById("song-title").innerText = "Música não encontrada";
        document.getElementById("artist-name").innerText = "";
        document.getElementById("song-tabs-content").innerHTML = "";
        document.getElementById("song-video").style.display = "none";

        const artistImageElement = document.getElementById("artist-image");
        if (artistImageElement) {
            artistImageElement.src = "";
            artistImageElement.alt = "";
        }
    }
}

function loadOtherSongs(artist, currentSong) {
    const otherSongsList = document.querySelector('.sidebar ul');
    otherSongsList.innerHTML = ''; // Limpa a lista atual

    // Verifica se o artista tem músicas
    if (songData[artist] && songData[artist].músicas) {
        const songs = Object.keys(songData[artist].músicas);

        // Filtra a música atual e cria itens para as outras
        songs.filter(song => song !== currentSong).forEach(song => {
            const listItem = document.createElement('li');
            listItem.textContent = song;
            listItem.innerHTML += ' <span class="music-icons">🎵</span>';

            // Adiciona evento de clique para carregar a música selecionada
            listItem.addEventListener('click', () => {
                localStorage.setItem("selectedSong", song);
                loadSelectedSong();
            });

            otherSongsList.appendChild(listItem);
        });
    }

    // Se não houver outras músicas ou se for o único
    if (otherSongsList.children.length === 0) {
        const listItem = document.createElement('li');
        listItem.textContent = "Nenhuma outra música disponível";
        otherSongsList.appendChild(listItem);
    }
}

// Variável global para armazenar todos os dados das músicas
let allSongsData = {};

// Carregar os dados do JSON quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    fetch('../musica.json')
        .then(response => response.json())
        .then(data => {
            allSongsData = data.Artistas;
            setupSearch();
        })
        .catch(error => console.error('Erro ao carregar JSON:', error));
});

function setupSearch() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();

        // Limpar resultados anteriores
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
                    // Armazenar a música selecionada e redirecionar
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

    // Fechar resultados quando clicar fora
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
            for (const [songName, songData] of Object.entries(artistData.músicas)) {
                // Verificar se a consulta corresponde ao nome da música ou ao artista
                if (songName.toLowerCase().includes(query) ||
                    artistName.toLowerCase().includes(query)) {
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