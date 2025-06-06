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
        avatar: "https://i.pinimg.com/736x/6e/9c/75/6e9c75298aa0bb41b9a7f8a23d694c70.jpg",
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

    caetanoveloso: {
        name: "Caetano Veloso",
        genres: "MPB • Tropicália • Rock • Pop • Samba",
        avatar: "https://i.pinimg.com/736x/5d/84/e7/5d84e7dd8fee98f0d2fc375b2f62acac.jpg",
        stats: {
            songs: 500,
            albums: 50,
            listeners: "15M"
        },
        popularTracks: [
            { name: "Sozinho", album: "Prenda Minha", year: "1998", duration: "3:47" },
            { name: "Sampa", album: "Muito - Dentro da Estrela Azulada", year: "1978", duration: "3:40" },
        ],
        discography: [
            {
                title: "Domingo",
                year: "1967",
                cover: "https://upload.wikimedia.org/wikipedia/pt/7/7c/Domingo_-_Caetano_e_Gal.jpg",
                type: "Álbum de Estúdio"
            },
            {
                title: "Caetano Veloso",
                year: "1968",
                cover: "https://upload.wikimedia.org/wikipedia/pt/7/7c/Caetano_Veloso_1968.jpg",
                type: "Álbum de Estúdio"
            },
            {
                title: "Tropicália: ou Panis et Circensis",
                year: "1968",
                cover: "https://upload.wikimedia.org/wikipedia/pt/4/4a/Tropic%C3%A1lia_-_ou_Panis_et_Circencis.jpg",
                type: "Álbum Coletivo"
            },
            {
                title: "Transa",
                year: "1972",
                cover: "https://upload.wikimedia.org/wikipedia/pt/8/8d/Transa_-_Caetano_Veloso.jpg",
                type: "Álbum de Estúdio"
            },
            {
                title: "Bicho",
                year: "1977",
                cover: "https://upload.wikimedia.org/wikipedia/pt/7/7e/Bicho_-_Caetano_Veloso.jpg",
                type: "Álbum de Estúdio"
            },
            {
                title: "Cores, Nomes",
                year: "1982",
                cover: "https://upload.wikimedia.org/wikipedia/pt/3/3d/Cores%2C_Nomes.jpg",
                type: "Álbum de Estúdio"
            },
            {
                title: "Velô",
                year: "1984",
                cover: "https://upload.wikimedia.org/wikipedia/pt/8/8b/Vel%C3%B4_-_Caetano_Veloso.jpg",
                type: "Álbum de Estúdio"
            },
            {
                title: "Estrangeiro",
                year: "1989",
                cover: "https://upload.wikimedia.org/wikipedia/pt/3/3e/Estrangeiro_-_Caetano_Veloso.jpg",
                type: "Álbum de Estúdio"
            },
            {
                title: "Circuladô",
                year: "1991",
                cover: "https://upload.wikimedia.org/wikipedia/pt/5/5c/Circulad%C3%B4_-_Caetano_Veloso.jpg",
                type: "Álbum de Estúdio"
            },
            {
                title: "Fina Estampa",
                year: "1994",
                cover: "https://upload.wikimedia.org/wikipedia/pt/1/1e/Fina_Estampa_-_Caetano_Veloso.jpg",
                type: "Álbum de Estúdio"
            },
            {
                title: "Livro",
                year: "1997",
                cover: "https://upload.wikimedia.org/wikipedia/pt/3/3a/Livro_-_Caetano_Veloso.jpg",
                type: "Álbum de Estúdio"
            },
            {
                title: "Noites do Norte",
                year: "2000",
                cover: "https://upload.wikimedia.org/wikipedia/pt/2/2b/Noites_do_Norte_-_Caetano_Veloso.jpg",
                type: "Álbum de Estúdio"
            },
            {
                title: "Cê",
                year: "2006",
                cover: "https://upload.wikimedia.org/wikipedia/pt/9/9d/C%C3%AA_-_Caetano_Veloso.jpg",
                type: "Álbum de Estúdio"
            },
            {
                title: "Abraçaço",
                year: "2012",
                cover: "https://upload.wikimedia.org/wikipedia/pt/3/3e/Abra%C3%A7a%C3%A7o_-_Caetano_Veloso.jpg",
                type: "Álbum de Estúdio"
            }
        ],
        biography: "Caetano Emanuel Viana Teles Veloso, conhecido como Caetano Veloso, é um músico, produtor, arranjador e escritor brasileiro. Nascido em 7 de agosto de 1942 em Santo Amaro da Purificação, Bahia, é considerado um dos artistas mais influentes da música brasileira desde os anos 1960. Foi um dos criadores do movimento tropicalista, que revolucionou a MPB nos anos 1960. Sua obra caracteriza-se pela diversidade de gêneros e pela constante reinvenção. Ao longo de sua carreira, lançou mais de 50 álbuns e vendeu milhões de cópias. Ganhou nove Grammy Latino e dois Grammy Awards. Além da música, é conhecido por seu ativismo político e por suas posições sobre questões sociais. Continua ativo na música, lançando novos trabalhos e realizando turnês pelo mundo."
    },

    nirvana: {
        name: "Nirvana",
        genres: "Grunge • Alternative Rock • Punk Rock",
        avatar: "https://i.pinimg.com/736x/73/0e/fd/730efdea3b8c4823fbcf8f7fdb1e4988.jpg",
        stats: {
            songs: 100,
            albums: 4,
            listeners: "50M+"
        },
        popularTracks: [
            { name: "Smells Like Teen Spirit", album: "Nevermind", year: "1991", duration: "5:01" },
            { name: "Come As You Are", album: "Nevermind", year: "1991", duration: "3:39" },
            { name: "Heart-Shaped Box", album: "In Utero", year: "1993", duration: "4:41" },
            { name: "Lithium", album: "Nevermind", year: "1991", duration: "4:17" },
            { name: "About a Girl", album: "Bleach", year: "1989", duration: "2:48" }
        ],
        discography: [
            {
                title: "Bleach",
                year: "1989",
                cover: "https://upload.wikimedia.org/wikipedia/en/7/70/Nirvana-Bleach.jpg",
                type: "Álbum de Estúdio"
            },
            {
                title: "Nevermind",
                year: "1991",
                cover: "https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg",
                type: "Álbum de Estúdio"
            },
            {
                title: "In Utero",
                year: "1993",
                cover: "https://upload.wikimedia.org/wikipedia/en/e/e5/In_Utero_-_Nirvana.jpg",
                type: "Álbum de Estúdio"
            },
            {
                title: "MTV Unplugged in New York",
                year: "1994",
                cover: "https://upload.wikimedia.org/wikipedia/en/8/8f/Nirvana-Unplugged.jpg",
                type: "Álbum Ao Vivo"
            },
            {
                title: "From the Muddy Banks of the Wishkah",
                year: "1996",
                cover: "https://upload.wikimedia.org/wikipedia/en/4/4c/Nirvana_-_From_the_Muddy_Banks_of_the_Wishkah.jpg",
                type: "Álbum Ao Vivo"
            },
            {
                title: "Nirvana",
                year: "2002",
                cover: "https://upload.wikimedia.org/wikipedia/en/6/64/Nirvanaalbum.jpg",
                type: "Compilação"
            }
        ],
        biography: "Nirvana foi uma banda de rock americana formada em Aberdeen, Washington, em 1987. Fundada pelo vocalista e guitarrista Kurt Cobain e pelo baixista Krist Novoselic, a banda passou por uma sucessão de bateristas, sendo Dave Grohl o mais notável, que se juntou em 1990. O Nirvana é amplamente considerado como a banda seminal da década de 1990 e o principal expoente do movimento grunge. Seu álbum 'Nevermind' (1991) marcou o início de uma mudança musical do mainstream rock para o rock alternativo, graças ao sucesso do single 'Smells Like Teen Spirit'. A banda vendeu mais de 75 milhões de discos em todo o mundo. O Nirvana foi induzido no Rock and Roll Hall of Fame em 2014, no primeiro ano de sua elegibilidade. A banda se dissolveu após a morte de Cobain em 1994, mas sua música continua influente e popular."
    }
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
            const artistId = getQueryParam('artist'); // pega o artista da URL
            localStorage.setItem('selectedSong', songName);
            localStorage.setItem('selectedArtist', artistId); // <-- ESSA LINHA É FUNDAMENTAL
            window.location.href = '../pages/musica.html';
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