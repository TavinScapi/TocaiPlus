// Banco de dados dos artistas
const artistsData = {
    charliebrownjr: {
        name: "Charlie Brown Jr.",
        genres: "Rock • Rap Rock • Skate Punk",
        avatar: "https://i.pinimg.com/736x/1f/ed/21/1fed219b4f8c0bf745ad179a11b531bd.jpg",
        stats: {
            songs: 150,
            albums: 10,
            listeners: "5.2M"
        },
        popularTracks: [
            { name: "Só Os Loucos Sabem", album: "Camisa 10 Joga Bola Até na Chuva", year: "2009", duration: "4:02" },
            { name: "Céu Azul", album: "La Familia 013", year: "2013", duration: "3:59" },
            { name: "Lugar Ao Sol", album: "Imunidade Musical", year: "2005", duration: "3:58" },
            { name: "Como Tudo Deve Ser", album: "Bocas Ordinárias", year: "2002", duration: "4:05" },
            { name: "Dias de Luta, Dias de Glória", album: "Imunidade Musical", year: "2005", duration: "4:01" }
        ],
        discography: [
            {
                title: "Transpiração Contínua Prolongada",
                year: "1997",
                cover: "https://upload.wikimedia.org/wikipedia/pt/e/eb/Transpira%C3%A7%C3%A3o_cont%C3%ADnua_prolongada.jpg",
                type: "Álbum"
            },
            {
                title: "Preço Curto... Prazo Longo",
                year: "1999",
                cover: "https://upload.wikimedia.org/wikipedia/pt/2/22/PCPL1999.jpg",
                type: "Álbum"
            },
            {
                title: "Nadando com os Tubarões",
                year: "2000",
                cover: "https://upload.wikimedia.org/wikipedia/pt/0/04/Nadando_com_os_Tubar%C3%B5es.jpg",
                type: "Álbum"
            },
            {
                title: "100% Charlie Brown Jr. – Abalando a Sua Fábrica",
                year: "2001",
                cover: "https://upload.wikimedia.org/wikipedia/pt/0/00/100%25_Charlie_Brown_Jr._-_Abalando_a_sua_F%C3%A1brica.jpg",
                type: "Álbum"
            },
            {
                title: "Bocas Ordinárias",
                year: "2002",
                cover: "https://upload.wikimedia.org/wikipedia/pt/5/5d/Bocas_Ordin%C3%A1rias.jpg",
                type: "Álbum"
            },
            {
                title: "Acústico MTV",
                year: "2003",
                cover: "https://upload.wikimedia.org/wikipedia/pt/1/17/Ac%C3%BAstico_MTV_-_Charlie_Brown_Jr..jpg",
                type: "Álbum"
            },
            {
                title: "Tamo Aí na Atividade",
                year: "2004",
                cover: "https://upload.wikimedia.org/wikipedia/pt/b/bf/Tamo_A%C3%AD_na_Atividade.jpg",
                type: "Álbum"
            },
            {
                title: "Imunidade Musical",
                year: "2005",
                cover: "https://upload.wikimedia.org/wikipedia/pt/4/48/Imunidade_Musical.jpg",
                type: "Álbum"
            },
            {
                title: "Camisa 10 Joga Bola Até na Chuva",
                year: "2009",
                cover: "https://upload.wikimedia.org/wikipedia/pt/0/02/Camisa10_-Joga_Bola_At%C3%A9_na_Chuva.jpg",
                type: "Álbum"
            },
            {
                title: "La Familia 013",
                year: "2013",
                cover: "https://upload.wikimedia.org/wikipedia/pt/7/76/La_Fam%C3%ADlia_013.jpg",
                type: "Álbum"
            }
        ],

        biography: "Charlie Brown Jr. foi uma banda brasileira de rock formada em Santos, São Paulo, em 1992. O grupo, liderado pelo vocalista Chorão, é conhecido por sua mistura de estilos como rock, skate punk, hardcore e reggae. Ao longo dos anos, o Charlie Brown Jr. lançou álbuns de sucesso e se tornou uma das bandas mais influentes do rock brasileiro, conquistando fãs de várias gerações. Letras que falam sobre juventude, questionamentos, amor e sociedade são marcas registradas da banda. Após o falecimento de Chorão em 2013, a banda encerrou suas atividades, mas seu legado continua vivo na música nacional."
    },

    michaeljackson: {
        name: "Michael Jackson",
        genres: "Pop • R&B • Soul",
        avatar: "https://i.pinimg.com/736x/90/27/77/9027771fb7d44f4dd7f215d397b46b06.jpg",
        stats: {
            songs: 150,
            albums: 10,
            listeners: "37M"
        },
        popularTracks: [
            { name: "Billie Jean", album: "Thriller", year: "1982", duration: "4:54" },
            { name: "Thriller", album: "Thriller", year: "1982", duration: "5:57" },
            { name: "Beat It", album: "Thriller", year: "1982", duration: "4:18" }
        ],
        discography: [
            {
                title: "Got to Be There",
                year: "1972",
                cover: "https://upload.wikimedia.org/wikipedia/pt/c/cc/Got_to_Be_There.jpeg",
                type: "Álbum"
            },
            {
                title: "Ben",
                year: "1972",
                cover: "https://upload.wikimedia.org/wikipedia/pt/8/82/Ben_Album.jpg",
                type: "Álbum"
            },
            {
                title: "Music & Me",
                year: "1973",
                cover: "https://upload.wikimedia.org/wikipedia/pt/0/0d/Music_%26_Me.jpg",
                type: "Álbum"
            },
            {
                title: "Forever, Michael",
                year: "1975",
                cover: "https://upload.wikimedia.org/wikipedia/pt/thumb/f/f3/Forever%2C_Michael.jpg/250px-Forever%2C_Michael.jpg",
                type: "Álbum"
            },
            {
                title: "Off the Wall",
                year: "1979",
                cover: "https://upload.wikimedia.org/wikipedia/pt/a/a6/Off_the_Wall.jpg",
                type: "Álbum"
            },
            {
                title: "Thriller",
                year: "1982",
                cover: "https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png",
                type: "Álbum"
            },
            {
                title: "Bad",
                year: "1987",
                cover: "https://upload.wikimedia.org/wikipedia/en/5/51/Michael_Jackson_-_Bad.png",
                type: "Álbum"
            },
            {
                title: "Dangerous",
                year: "1991",
                cover: "https://upload.wikimedia.org/wikipedia/pt/a/af/Dangerous_MJ_.jpg",
                type: "Álbum"
            },
            {
                title: "HIStory: Past, Present and Future, Book I",
                year: "1995",
                cover: "https://upload.wikimedia.org/wikipedia/pt/a/ab/HIStory_Past%2C_Present_and_Future_Book_I.jpg",
                type: "Álbum"
            },
            {
                title: "Invincible",
                year: "2001",
                cover: "https://upload.wikimedia.org/wikipedia/pt/b/bf/Invincible.jpg",
                type: "Álbum"
            },
            {
                title: "Michael",
                year: "2010",
                cover: "https://upload.wikimedia.org/wikipedia/pt/2/2e/Michael_%C3%A1lbum.jpg",
                type: "Álbum Póstumo"
            },
            {
                title: "Xscape",
                year: "2014",
                cover: "https://upload.wikimedia.org/wikipedia/pt/6/63/Capa_de_Xscape.png",
                type: "Álbum Póstumo"
            }
        ],

        biography: "Michael Jackson, conhecido como o 'Rei do Pop', foi um dos artistas mais influentes e populares da história da música. Nascido em 1958 em Gary, Indiana, ele começou sua carreira ainda criança no grupo Jackson 5 e lançou sua carreira solo com grande sucesso na década de 1970. Michael se destacou pela sua voz única, talento para dança e videoclipes revolucionários. Álbuns como 'Thriller', 'Bad' e 'Dangerous' marcaram a música pop e venderam milhões de cópias no mundo todo. Sua influência cultural permanece forte até hoje, sendo uma das figuras mais icônicas da música mundial."
    },

    jorgemateus: {
        name: "Jorge & Mateus",
        genres: "Sertanejo • Sertanejo Universitário • Pop",
        avatar: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Jorge_%26_Mateus_-_2019.jpg",
        stats: {
            songs: 150,
            albums: 12,
            listeners: "10M"
        },
        popularTracks: [
            { name: "Os Anjos Cantam", album: "Os Anjos Cantam", year: "2015", duration: "3:52" },
            { name: "Sosseguei", album: "Como. Sempre Feito. Nunca", year: "2016", duration: "3:45" },
            { name: "Seu Astral", album: "Ao Vivo em Goiânia", year: "2007", duration: "4:10" }
        ],
        discography: [
            {
                title: "Ao Vivo em Goiânia",
                year: "2007",
                cover: "https://upload.wikimedia.org/wikipedia/pt/4/4a/Ao_Vivo_em_Goi%C3%A2nia.jpg",
                type: "Álbum Ao Vivo"
            },
            {
                title: "O Mundo É Tão Pequeno",
                year: "2009",
                cover: "https://upload.wikimedia.org/wikipedia/pt/3/3a/O_Mundo_%C3%89_T%C3%A3o_Pequeno.jpg",
                type: "Álbum Ao Vivo"
            },
            {
                title: "Ao Vivo Sem Cortes",
                year: "2010",
                cover: "https://upload.wikimedia.org/wikipedia/pt/5/5f/Ao_Vivo_Sem_Cortes.jpg",
                type: "Álbum Ao Vivo"
            },
            {
                title: "Aí Já Era",
                year: "2010",
                cover: "https://upload.wikimedia.org/wikipedia/pt/2/2d/A%C3%AD_J%C3%A1_Era.jpg",
                type: "Álbum de Estúdio"
            },
            {
                title: "A Hora É Agora",
                year: "2012",
                cover: "https://upload.wikimedia.org/wikipedia/pt/1/1d/A_Hora_%C3%89_Agora.jpg",
                type: "Álbum Ao Vivo"
            },
            {
                title: "Live In London - At The Royal Albert Hall",
                year: "2013",
                cover: "https://upload.wikimedia.org/wikipedia/pt/0/0d/Live_In_London_-_At_The_Royal_Albert_Hall.jpg",
                type: "Álbum Ao Vivo"
            },
            {
                title: "Os Anjos Cantam",
                year: "2015",
                cover: "https://upload.wikimedia.org/wikipedia/pt/5/5f/Os_Anjos_Cantam.jpg",
                type: "Álbum de Estúdio"
            },
            {
                title: "Como. Sempre Feito. Nunca",
                year: "2016",
                cover: "https://upload.wikimedia.org/wikipedia/pt/9/9b/Como_Sempre_Feito_Nunca.jpg",
                type: "Álbum Ao Vivo"
            },
            {
                title: "10 Anos",
                year: "2016",
                cover: "https://upload.wikimedia.org/wikipedia/pt/2/2e/10_Anos.jpg",
                type: "Álbum Ao Vivo"
            },
            {
                title: "Terra Sem CEP",
                year: "2018",
                cover: "https://upload.wikimedia.org/wikipedia/pt/3/3d/Terra_Sem_CEP.jpg",
                type: "Álbum Ao Vivo"
            },
            {
                title: "Tudo Em Paz",
                year: "2021",
                cover: "https://upload.wikimedia.org/wikipedia/pt/8/8e/Tudo_Em_Paz.jpg",
                type: "Álbum de Estúdio"
            },
            {
                title: "É Simples Assim",
                year: "2022",
                cover: "https://upload.wikimedia.org/wikipedia/pt/1/1e/%C3%89_Simples_Assim.jpg",
                type: "Álbum Ao Vivo"
            },
            {
                title: "Check-In",
                year: "2024",
                cover: "https://upload.wikimedia.org/wikipedia/pt/6/6f/Check-In.jpg",
                type: "Álbum Ao Vivo"
            }
        ],
        biography: "Jorge & Mateus é uma dupla brasileira de música sertaneja, formada em Itumbiara, Goiás, em 2005. Composta por Jorge Barcelos (vocal) e Mateus Liduário (vocal e guitarra), a dupla é considerada uma das mais influentes do sertanejo universitário. Desde o lançamento do álbum de estreia 'Ao Vivo em Goiânia' em 2007, conquistaram grande sucesso com hits como 'Duas Metades', 'Logo Eu' e 'Propaganda'. Ao longo da carreira, venderam mais de 10 milhões de cópias e foram indicados ao Grammy Latino de Melhor Álbum de Música Sertaneja em várias ocasiões. Em 2018, venceram o Prêmio Multishow de Música Brasileira na categoria Melhor Dupla. Atualmente, continuam ativos, lançando novos trabalhos e realizando turnês pelo Brasil e exterior."
    },

    johncoltrane: {
        name: "John Coltrane",
        genres: "Jazz • Bebop • Hard Bop • Free Jazz",
        avatar: "https://upload.wikimedia.org/wikipedia/commons/4/4e/John_Coltrane_1963.jpg",
        stats: {
            songs: 150,
            albums: 45,
            listeners: "5M"
        },
        popularTracks: [
            { name: "My Favorite Things", album: "My Favorite Things", year: "1961", duration: "13:41" },
            { name: "Giant Steps", album: "Giant Steps", year: "1960", duration: "4:43" }
        ],
        discography: [
            {
                title: "Blue Train",
                year: "1958",
                cover: "https://upload.wikimedia.org/wikipedia/en/9/9c/John_Coltrane_-_Blue_Train.jpg",
                type: "Álbum"
            },
            {
                title: "Giant Steps",
                year: "1960",
                cover: "https://upload.wikimedia.org/wikipedia/en/6/6c/John_Coltrane_-_Giant_Steps.jpg",
                type: "Álbum"
            },
            {
                title: "My Favorite Things",
                year: "1961",
                cover: "https://upload.wikimedia.org/wikipedia/en/9/9b/My_Favorite_Things_%28John_Coltrane_album%29.jpg",
                type: "Álbum"
            },
            {
                title: "Coltrane",
                year: "1962",
                cover: "https://upload.wikimedia.org/wikipedia/en/2/2b/Coltrane_%281962_album%29.jpg",
                type: "Álbum"
            },
            {
                title: "Ballads",
                year: "1963",
                cover: "https://upload.wikimedia.org/wikipedia/en/6/6e/Ballads_%28John_Coltrane_album%29.jpg",
                type: "Álbum"
            },
            {
                title: "Impressions",
                year: "1963",
                cover: "https://upload.wikimedia.org/wikipedia/en/1/1a/Impressions_%28John_Coltrane_album%29.jpg",
                type: "Álbum"
            },
            {
                title: "A Love Supreme",
                year: "1965",
                cover: "https://upload.wikimedia.org/wikipedia/en/9/9c/A_Love_Supreme.jpg",
                type: "Álbum"
            },
            {
                title: "Ascension",
                year: "1966",
                cover: "https://upload.wikimedia.org/wikipedia/en/2/2b/Ascension_%28John_Coltrane_album%29.jpg",
                type: "Álbum"
            },
            {
                title: "Expression",
                year: "1967",
                cover: "https://upload.wikimedia.org/wikipedia/en/4/4d/Expression_%28John_Coltrane_album%29.jpg",
                type: "Álbum"
            },
            {
                title: "Interstellar Space",
                year: "1974",
                cover: "https://upload.wikimedia.org/wikipedia/en/7/7e/Interstellar_Space.jpg",
                type: "Álbum"
            }
        ],
        biography: "John William Coltrane (1926–1967) foi um saxofonista, compositor e líder de banda norte-americano, amplamente considerado uma das figuras mais influentes na história do jazz. Nascido na Carolina do Norte, Coltrane começou sua carreira tocando bebop e hard bop, mas rapidamente se tornou um pioneiro do jazz modal e do free jazz. Seu álbum 'A Love Supreme' (1965) é amplamente considerado uma obra-prima espiritual e musical. Ao longo de sua carreira, Coltrane colaborou com lendas como Miles Davis e Thelonious Monk, e liderou mais de 50 sessões de gravação. Seu estilo evoluiu para incorporar elementos espirituais e experimentais, deixando um legado duradouro no jazz e na música em geral."
    },


};


// Função para obter parâmetro da URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Função para carregar os dados do artista
function loadArtistData() {
    const artistId = getQueryParam('artist');
    const artist = artistsData[artistId];

    // Em artista.html, altere para:
    if (!artist) {
        window.location.href = '../pages/artistasEbandas.html';
        return;
    }

    // Atualizar header
    document.getElementById('artist-header').innerHTML = `
                <img src="${artist.avatar}" alt="${artist.name}" class="artist-avatar">
                <div class="artist-info">
                    <h1 class="artist-name">${artist.name}</h1>
                    <p class="artist-genre">${artist.genres}</p>
                    <div class="artist-stats">
                        <div class="stat-item">
                            <span>🎵</span>
                            <span>${artist.stats.songs} músicas</span>
                        </div>
                        <div class="stat-item">
                            <span>📀</span>
                            <span>${artist.stats.albums} álbuns</span>
                        </div>
                        <div class="stat-item">
                            <span>👥</span>
                            <span>${artist.stats.listeners} ouvintes</span>
                        </div>
                    </div>
                    <button class="btn">Seguir</button>
                </div>
            `;

    // Atualizar músicas populares
    const popularTracksHTML = artist.popularTracks.map((track, index) => `
    <div class="track-item" data-song="${track.name}">
        <div class="track-number">${index + 1}</div>
        <div class="track-info">
            <div class="track-name">${track.name}</div>
            <div class="track-album">${track.album} (${track.year})</div>
        </div>
        <div class="track-duration">${track.duration}</div>
    </div>
    `).join('');

    document.getElementById('popular-tracks').innerHTML = popularTracksHTML;

    // Adicionar evento de clique para cada música popular
    document.querySelectorAll('.track-item').forEach(item => {
        item.addEventListener('click', () => {
            const songName = item.getAttribute('data-song');
            localStorage.setItem('selectedSong', songName);
            window.location.href = '../pages/musica.html'; // ajuste o caminho se necessário
        });
    });


    // Atualizar discografia
    const discographyHTML = artist.discography.map(album => `
                <div class="album-card">
                    <img src="${album.cover}" alt="${album.title}" class="album-cover">
                    <h3 class="album-title">${album.title}</h3>
                    <p class="album-year">${album.year} • ${album.type}</p>
                </div>
            `).join('');

    document.getElementById('discography').innerHTML = discographyHTML;

    // Atualizar biografia
    document.getElementById('biography').innerHTML = `
                <h2 class="section-title">Biografia</h2>
                <p>${artist.biography}</p>
            `;

    // Atualizar título da página
    document.title = `${artist.name} | Discografia Completa`;
}

// Carregar os dados quando a página for carregada
document.addEventListener('DOMContentLoaded', loadArtistData);