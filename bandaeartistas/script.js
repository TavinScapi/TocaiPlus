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

const slider = document.querySelector('.slider');

function activate(e) {
    const items = document.querySelectorAll('.item');
    e.target.matches('.next') && slider.append(items[0])
    e.target.matches('.prev') && slider.prepend(items[items.length - 1]);
}

document.addEventListener('click', activate, false);


function toggleDropdown() {
    let dropdown = document.getElementById("dropdown");
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
}

function filterGenres() {
    let input = document.getElementById("searchGenre").value.toLowerCase();
    let items = document.getElementsByClassName("dropdown-item");

    for (let item of items) {
        let text = item.innerText.toLowerCase();
        item.style.display = text.includes(input) ? "block" : "none";
    }
}

function selectGenre(value) {
    document.querySelector(".dropdown-button").innerText = value.charAt(0).toUpperCase() + value.slice(1);
    document.getElementById("dropdown").style.display = "none";
    filterByGenre(value);
}

function filterByGenre(selectedGenre) {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const genres = card.getAttribute('data-genre').split(' '); // Divide os gêneros por espaço
        if (selectedGenre === 'todos' || genres.includes(selectedGenre)) { 
            card.style.display = 'block'; // Exibe o cartão
        } else {
            card.style.display = 'none'; // Oculta o cartão
        }
    });
}


document.addEventListener("click", function (event) {
    if (!event.target.closest(".filtro-generos")) {
        document.getElementById("dropdown").style.display = "none";
    }
});

// Salvar o artista escolhido no localStorage e redirecionar
function selectArtist(artist) {
    localStorage.setItem("selectedArtist", artist);
    window.location.href = "../artista/artista.html";
}

// Carregar os dados do artista na página
if (window.location.pathname.includes("artista.html")) {
    const artistKey = localStorage.getItem("selectedArtist");

    if (artistKey && artistsData[artistKey]) {
        const artist = artistsData[artistKey];

        // Definir o nome, imagem e visualizações
        document.getElementById("artist-name").innerText = artist.name;
        document.getElementById("artist-image").src = artist.image;
        document.getElementById("artist-views").innerText = artist.views;
        document.getElementById("artist-history").innerText = artist.history;

        // Músicas
        const songsList = document.getElementById("artist-songs");
        songsList.innerHTML = ""; // Limpar lista antes de adicionar novos itens
        artist.songs.forEach(song => {
            const li = document.createElement("li");
            li.innerHTML = `${song.name} <span class="music-icons">${song.icons}</span>`;

            // Adicionar evento de clique para redirecionar para a página da música
            li.addEventListener("click", () => {
                localStorage.setItem("selectedSong", song.name);
                window.location.href = "../musica/musica.html"; // Redireciona para a página de aprendizado
            });

            songsList.appendChild(li);
        });


        // Integrantes
        const membersList = document.getElementById("artist-members");
        membersList.innerHTML = ""; // Limpar lista antes de adicionar novos itens
        artist.members.forEach(member => {
            const li = document.createElement("li");
            li.innerText = member;
            membersList.appendChild(li);
        });

        // Galeria
        const galleryContainer = document.getElementById("artist-gallery");
        galleryContainer.innerHTML = ""; // Limpar a galeria antes de adicionar novas imagens
        artist.gallery.forEach(image => {
            const imgElement = document.createElement("img");
            imgElement.src = image;
            imgElement.alt = `${artist.name} Imagem`;
            imgElement.classList.add("gallery-item");
            galleryContainer.appendChild(imgElement);
        });

        // Prêmios
        const awardsList = document.getElementById("artist-awards");
        awardsList.innerHTML = ""; // Limpar lista de prêmios antes de adicionar novos
        artist.awards.forEach(award => {
            const li = document.createElement("li");
            li.innerText = award;
            awardsList.appendChild(li);
        });
    }
}




