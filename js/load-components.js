import { artistsData } from './artista.js';

document.addEventListener('DOMContentLoaded', function () {
    // =============== CARREGAMENTO DE COMPONENTES ===============
    // Carrega a sidebar
    fetch('../components/sidebar.html')
        .then(response => {
            if (!response.ok) throw new Error('Sidebar não encontrada');
            return response.text();
        })
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
            setupSidebar();
        })
        .catch(error => console.error('Erro ao carregar sidebar:', error));

    // Carrega o footer dentro do home-section
    const homeSection = document.querySelector('.home-section');
    if (homeSection) {
        fetch('../components/footer.html')
            .then(response => {
                if (!response.ok) throw new Error('Footer não encontrado');
                return response.text();
            })
            .then(data => {
                homeSection.insertAdjacentHTML('beforeend', data);
            })
            .catch(error => console.error('Erro ao carregar footer:', error));
    }

    // Carrega o menu mobile
    fetch('../components/mobile-menu.html')
        .then(response => {
            if (!response.ok) throw new Error('Menu mobile não encontrado');
            return response.text();
        })
        .then(data => {
            document.body.insertAdjacentHTML('beforeend', data);
            setupMobileMenu();
        })
        .catch(error => console.error('Erro ao carregar menu mobile:', error));

    // =============== CONFIGURAÇÃO DA SIDEBAR ===============
    function setupSidebar() {
        const sidebar = document.querySelector(".sidebar");
        const closeBtn = document.querySelector("#btn");
        const searchBtn = document.querySelector(".bx-search");
        const searchInput = document.querySelector(".nav-list input[type='text']");

        if (sidebar && closeBtn && searchBtn && searchInput) {
            // Evento do botão de menu (abrir/fechar sidebar)
            closeBtn.addEventListener("click", () => {
                sidebar.classList.toggle("open");
                menuBtnChange();
            });

            // Evento do ícone de pesquisa (abre sidebar + foca no input)
            searchBtn.addEventListener("click", (e) => {
                e.preventDefault();
                if (!sidebar.classList.contains("open")) {
                    sidebar.classList.add("open");
                    menuBtnChange();
                }
                searchInput.focus();
            });

            // Altera o ícone do botão de menu
            function menuBtnChange() {
                if (sidebar.classList.contains("open")) {
                    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
                } else {
                    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
                }
            }

            // Configura a funcionalidade de pesquisa
            setupSearch();
        }
    }

    // =============== CONFIGURAÇÃO DO MENU MOBILE ===============
    function setupMobileMenu() {
        // =============== EXPANDED LIST ===============
        const navExpand = document.getElementById('nav-expand');
        const navExpandList = document.getElementById('nav-expand-list');
        const navExpandIcon = document.getElementById('nav-expand-icon');

        if (navExpand && navExpandList && navExpandIcon) {
            navExpand.addEventListener('click', () => {
                // Expand list
                navExpandList.classList.toggle('show-list');

                // Troca o ícone entre livro fechado e livro aberto
                if (navExpandList.classList.contains('show-list')) {
                    navExpandIcon.classList.replace('ri-book-line', 'ri-book-open-line');
                } else {
                    navExpandIcon.classList.replace('ri-book-open-line', 'ri-book-line');
                }
            });
        }

        // =============== SCROLL SECTIONS ACTIVE LINK ===============
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav__list a');

        const scrollActive = () => {
            const scrollDown = window.scrollY;

            sections.forEach(current => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 58;
                const sectionId = current.getAttribute('id');
                const sectionLink = document.querySelector(`.nav__list a[href*="${sectionId}"]`);

                if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                    // Remove active class from all links first
                    navLinks.forEach(link => link.classList.remove('active-link'));
                    // Add to current section link
                    if (sectionLink) sectionLink.classList.add('active-link');
                }
            });
        };

        window.addEventListener('scroll', scrollActive);
        scrollActive();
    }

    // =============== CONFIGURAÇÃO DA PESQUISA ===============
    function setupSearch() {
        const searchInput = document.getElementById('sidebar-search-input');

        if (searchInput) {
            searchInput.addEventListener('input', function () {
                const query = this.value;
                if (query.length > 2) { // Só pesquisa com pelo menos 3 caracteres
                    const results = searchSongs(query);
                    displaySearchResults(results);
                } else {
                    // Remove os resultados se a query for muito curta
                    const existingContainer = document.getElementById('search-results-container');
                    if (existingContainer) {
                        existingContainer.remove();
                    }
                }
            });

            // Fecha os resultados ao clicar fora
            document.addEventListener('click', function (e) {
                if (!e.target.closest('#search-results-container')) {
                    const existingContainer = document.getElementById('search-results-container');
                    if (existingContainer && e.target !== searchInput) {
                        existingContainer.remove();
                    }
                }
            });
        }
    }

    // Função para pesquisar músicas em todos os artistas
    function searchSongs(query) {
        query = query.toLowerCase().trim();
        if (!query) return []; // Retorna vazio se a query estiver vazia

        const results = [];

        // Percorre todos os artistas
        for (const artistKey in artistsData) {
            const artist = artistsData[artistKey];

            // Filtra as músicas que correspondem à pesquisa
            const matchingSongs = artist.songs.filter(song =>
                song.name.toLowerCase().includes(query)
            );

            if (matchingSongs.length > 0) {
                results.push({
                    artist: artist.name,
                    artistKey: artistKey,
                    songs: matchingSongs
                });
            }
        }

        return results;
    }

    // Função para exibir os resultados da pesquisa
    function displaySearchResults(results) {
        const searchResultsContainer = document.createElement('div');
        searchResultsContainer.id = 'search-results-container';
        searchResultsContainer.style.position = 'fixed';
        searchResultsContainer.style.top = '60px';
        searchResultsContainer.style.left = '80px';
        searchResultsContainer.style.backgroundColor = '#fff';
        searchResultsContainer.style.zIndex = '1000';
        searchResultsContainer.style.borderRadius = '5px';
        searchResultsContainer.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
        searchResultsContainer.style.maxHeight = '400px';
        searchResultsContainer.style.overflowY = 'auto';
        searchResultsContainer.style.width = '300px';
        searchResultsContainer.style.padding = '10px';

        if (results.length === 0) {
            searchResultsContainer.innerHTML = '<p>Nenhuma música encontrada</p>';
        } else {
            let html = '';
            results.forEach(result => {
                html += `<div class="artist-result">
                        <h4>${result.artist}</h4>
                        <ul>`;

                result.songs.forEach(song => {
                    html += `<li class="song-result" 
                             data-artist="${result.artistKey}" 
                             data-song="${song.name}">
                             ${song.name}
                          </li>`;
                });

                html += `</ul></div>`;
            });
            searchResultsContainer.innerHTML = html;
        }

        // Remove o container anterior se existir
        const existingContainer = document.getElementById('search-results-container');
        if (existingContainer) {
            existingContainer.remove();
        }

        document.body.appendChild(searchResultsContainer);

        // Adiciona eventos de clique aos resultados
        document.querySelectorAll('.song-result').forEach(item => {
            item.addEventListener('click', function () {
                const artistKey = this.getAttribute('data-artist');
                const songName = this.getAttribute('data-song');

                // Salva o artista e a música selecionada
                localStorage.setItem("selectedArtist", artistKey);
                localStorage.setItem("selectedSong", songName);

                // Redireciona para a página da música
                window.location.href = "../pages/musica.html";
            });
        });
    }
});

