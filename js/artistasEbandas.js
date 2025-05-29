document.addEventListener('DOMContentLoaded', function () {
    // Carrega os artistas do JSON
    fetch('../data/artistas.json')
        .then(response => response.json())
        .then(data => {
            const listaArtistas = document.querySelector('.lista-artistas');
            listaArtistas.innerHTML = ''; // Limpa o conteúdo padrão

            data.artistas.forEach(artista => {
                // Cria o card do artista
                const card = document.createElement('div');
                card.className = 'card-vinil';
                card.setAttribute('data-genre', artista.generos.join(' '));
                card.onclick = () => selectArtist(artista.id);

                // Gera o HTML interno do card
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
        })
        .catch(error => console.error('Erro ao carregar artistas:', error));
});

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