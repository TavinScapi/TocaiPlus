// Variáveis globais
let allArtists = [];
let currentPage = 1;
const artistsPerPage = 12; // Ajuste conforme necessário

document.addEventListener('DOMContentLoaded', function () {
    // Carrega os artistas do JSON
    fetch('../data/artistas.json')
        .then(response => response.json())
        .then(data => {
            allArtists = data.artistas;
            displayArtists(allArtists, currentPage);
            setupPagination(allArtists);
        })
        .catch(error => console.error('Erro ao carregar artistas:', error));
});

// Função para exibir artistas com paginação
function displayArtists(artists, page) {
    const listaArtistas = document.querySelector('.lista-artistas');
    listaArtistas.innerHTML = ''; // Limpa o conteúdo

    const startIndex = (page - 1) * artistsPerPage;
    const endIndex = startIndex + artistsPerPage;
    const paginatedArtists = artists.slice(startIndex, endIndex);

    if (paginatedArtists.length === 0) {
        listaArtistas.innerHTML = '<p class="no-results">Nenhum artista encontrado.</p>';
        return;
    }

    paginatedArtists.forEach(artista => {
        // Cria o card do artista (mesmo código que você já tinha)
        const card = document.createElement('div');
        card.className = 'card-vinil';
        card.setAttribute('data-genre', artista.generos.join(' '));
        card.onclick = () => selectArtist(artista.id);

        card.innerHTML = `
            <div class="record_case">
                <div class="genre-label">${artista.generos.join(' / ')}</div>
                <div class="record recorddefault">
                    <div class="front">
                        <img src="${artista.imagem}" alt="${artista.nome}">
                        <div class="cover"></div>
                        <div class="cover-back"></div>
                    </div>
                    <div class="vinyl"></div>
                    <div class="back">
                        <img src="${artista.imagem}" alt="${artista.nome}">
                    </div>
                    <div class="right"></div>
                    <div class="left"></div>
                    <div class="top"></div>
                    <div class="bottom"></div>
                </div>
            </div>
            <h3>${artista.nome}</h3>
            <p>${artista.descricao}</p>
            <button class="button">Ver Mais</button>
        `;

        listaArtistas.appendChild(card);
    });
}

// Função para configurar a paginação
function setupPagination(artists) {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    const pageCount = Math.ceil(artists.length / artistsPerPage);

    if (pageCount <= 1) return;

    // Botão Anterior
    const prevButton = document.createElement('button');
    prevButton.innerHTML = '&laquo;';
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayArtists(artists, currentPage);
            updatePaginationButtons(artists);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
    pagination.appendChild(prevButton);

    // Botões de página
    for (let i = 1; i <= pageCount; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        if (i === currentPage) {
            pageButton.classList.add('active');
        }

        pageButton.addEventListener('click', () => {
            currentPage = i;
            displayArtists(artists, currentPage);
            updatePaginationButtons(artists);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        pagination.appendChild(pageButton);
    }

    // Botão Próximo
    const nextButton = document.createElement('button');
    nextButton.innerHTML = '&raquo;';
    nextButton.addEventListener('click', () => {
        if (currentPage < pageCount) {
            currentPage++;
            displayArtists(artists, currentPage);
            updatePaginationButtons(artists);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
    pagination.appendChild(nextButton);

    updatePaginationButtons(artists);
}

// Atualiza o estado dos botões de paginação
function updatePaginationButtons(artists) {
    const pageCount = Math.ceil(artists.length / artistsPerPage);
    const buttons = document.querySelectorAll('.pagination button');

    buttons.forEach((button, index) => {
        button.classList.remove('active');

        if (index === 0) { // Botão Anterior
            button.disabled = currentPage === 1;
            button.classList.toggle('disabled', currentPage === 1);
        } else if (index === buttons.length - 1) { // Botão Próximo
            button.disabled = currentPage === pageCount;
            button.classList.toggle('disabled', currentPage === pageCount);
        } else if (index === currentPage) { // Botão da página atual
            button.classList.add('active');
        }
    });
}

// Função de pesquisa
function searchArtists() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();

    if (searchTerm === '') {
        displayArtists(allArtists, 1);
        setupPagination(allArtists);
        currentPage = 1;
        return;
    }

    const filteredArtists = allArtists.filter(artist =>
        artist.nome.toLowerCase().includes(searchTerm) ||
        artist.descricao.toLowerCase().includes(searchTerm) ||
        artist.generos.some(genre => genre.toLowerCase().includes(searchTerm))
    );

    displayArtists(filteredArtists, 1);
    setupPagination(filteredArtists);
    currentPage = 1;
}

// Funções de filtro (mantidas do código original)
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
    const cards = document.querySelectorAll('.card-vinil');

    cards.forEach(card => {
        const genres = card.getAttribute('data-genre').split(' ');
        if (selectedGenre === 'todos' || genres.includes(selectedGenre)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

document.addEventListener("click", function (event) {
    if (!event.target.closest(".filtro-generos")) {
        document.getElementById("dropdown").style.display = "none";
    }
});

function selectArtist(artist) {
    localStorage.setItem("selectedArtist", artist);
    window.location.href = "../pages/artista.html";
}