// Salvar o artista escolhido no localStorage e redirecionar
function selectArtist(artist) {
    localStorage.setItem("selectedArtist", artist);
    window.location.href = "../pages/artista.html";
}

// Dados das bandas
const artistsData = {
    charliebrownjr: {
        name: "Charlie Brown Jr.",
        image: "../imagens/cbjr.avif",
        views: "155.059.496 exibições",
        history: "Charlie Brown Jr. foi uma banda brasileira de rock formada em 1992. Misturava skate punk, hardcore e reggae.",
        songs: [
            { name: "Só Os Loucos Sabem", icons: "🎸🎵" },
            { name: "Céu Azul", icons: "🎸🎵" },
            { name: "Lugar Ao Sol", icons: "🎸🎵" },
            { name: "Como Tudo Deve Ser", icons: "🎸🎵" },
            { name: "Dias de Luta, Dias de Glória", icons: "🎸🎵" }
        ],
        members: ["Chorão - Vocal", "Champignon - Baixo", "Thiago Castanho - Guitarra", "Bruno Graveto - Bateria"],
        gallery: [
            "https://i.pinimg.com/736x/f0/d9/3c/f0d93c0e896f57d326a77e963ec2f1ea.jpg",
            "https://i.pinimg.com/736x/0c/be/4e/0cbe4e4dc423a3964f55772179f17074.jpg",
            "https://i.pinimg.com/736x/51/c8/47/51c8471b50be99887561c630e91a93b4.jpg",
            "https://i.pinimg.com/736x/54/52/48/5452481193b12034b3b4e931203c225e.jpg"
        ],
        awards: [
            "Prêmio de Melhor Álbum de Rock - 2000",
            "Melhor Banda Brasileira - MTV Video Music Awards 2004"
        ]
    },
    michaeljackson: {
        name: "Michael Jackson",
        image: "../imagens/michael.avif",
        views: "800.452.123 exibições",
        history: "Michael Jackson foi um cantor, compositor e dançarino, conhecido como o Rei do Pop.",
        songs: [
            { name: "Billie Jean", icons: "🎤🎶" },
            { name: "Thriller", icons: "🎤🎶" },
            { name: "Beat It", icons: "🎤🎶" }
        ],
        members: ["Michael Jackson - Vocal"],
        gallery: [
            "https://i.pinimg.com/736x/f1/63/5e/f1635e44415b7eb86876ab0d181049b8.jpg",
            "https://i.pinimg.com/736x/9d/2a/e8/9d2ae8e81ee4ff886860ef5b3b71d250.jpg",
            "https://i.pinimg.com/736x/6c/36/3f/6c363f672a18bdc5bfce7337e2003efc.jpg",
            "https://i.pinimg.com/736x/6e/d0/4b/6ed04b9f10777fa798074f03fb4362e8.jpg"
        ],
        awards: [
            "Grammy de Melhor Artista Masculino - 1984",
            "Billboard Music Awards - Melhor Artista Pop"
        ]
    },
    jorgemateus: {
        name: "Jorge & Mateus",
        image: "../imagens/JM.avif",
        views: "600.325.789 exibições",
        history: "Jorge & Mateus é uma dupla sertaneja brasileira, muito popular nos anos 2000.",
        songs: [
            { name: "Os Anjos Cantam", icons: "🎤🎶" },
            { name: "Sosseguei", icons: "🎤🎶" },
            { name: "Seu Astral", icons: "🎤🎶" }
        ],
        members: ["Jorge - Vocal", "Mateus - Vocal"],
        gallery: [
            "https://i.pinimg.com/474x/9b/83/e9/9b83e9490e9a8e3a7a93e3139127a079.jpg",
            "https://i.pinimg.com/474x/6b/09/4a/6b094a075e33e87e98cef7f528110eb7.jpg",
            "https://i.pinimg.com/736x/95/f0/7e/95f07e205ac735ac5d6a76925b318007.jpg",
            "https://i.pinimg.com/736x/30/95/d2/3095d221c1424fbd3f5aff29f7d7eecd.jpg",
        ],
        awards: [
            "Melhor Dupla Sertaneja - Prêmio Multishow 2011",
            "Melhor Álbum Sertanejo - Grammy Latino 2013"
        ]
    },
    johncoltrane: {
        name: "John Coltrane",
        image: "../imagens/john.avif",
        views: "250.654.321 exibições",
        history: "John Coltrane foi um dos maiores saxofonistas da história do jazz.",
        songs: [
            { name: "Giant Steps", icons: "🎷🎶" },
            { name: "My Favorite Things", icons: "🎷🎶" }
        ],
        members: ["John Coltrane - Saxofone"],
        gallery: [
            "https://i.pinimg.com/474x/b4/7d/5e/b47d5e12b80aab0a7ae9faed98664ef9.jpg",
            "https://i.pinimg.com/736x/6c/69/eb/6c69ebe805c911516c0d4916350d6e24.jpg",
            "https://i.pinimg.com/736x/17/22/ba/1722ba986644fb45eed97dac6805ad2d.jpg",
            "https://i.pinimg.com/736x/61/ac/73/61ac7394bdc3ca56e2acdb98b0ced038.jpg"
        ],
        awards: [
            "Prêmio de Melhor Álbum de Jazz - 1965",
            "Grammy de Melhor Performance de Jazz - 1962"
        ]
    },
    caetanoveloso: {
        name: "Caetano Veloso",
        image: "../imagens/caetano.avif",
        views: "350.123.654 exibições",
        history: "Caetano Veloso é um cantor e compositor brasileiro, um dos fundadores do movimento Tropicalista.",
        songs: [
            { name: "Sozinho", icons: "🎤🎵" },
            { name: "Sampa", icons: "🎤🎵" }
        ],
        members: ["Caetano Veloso - Vocal"],
        gallery: [
            "https://i.pinimg.com/474x/86/cd/60/86cd60087d2c5782901c17e8f5529e56.jpg",
            "https://i.pinimg.com/736x/10/f5/80/10f58088325607280c4fdf238bc4e73d.jpg",
            "https://i.pinimg.com/736x/e4/96/31/e49631fd462324d7540a0415a0f51106.jpg",
            "https://i.pinimg.com/736x/fa/46/4f/fa464f142b40036f4e14d4ba5d700242.jpg",
        ],
        awards: [
            "Prêmio de Melhor Álbum de Música Brasileira - 2000",
            "Grammy Latino de Melhor Álbum Tropical - 2006"
        ]
    },
    nirvana: {
        name: "Nirvana",
        image: "https://i.pinimg.com/736x/5a/39/4d/5a394d87f7f983975f0fb113be01df37.jpg",
        views: "1.250.987.654 exibições",
        history: "Nirvana foi uma banda icônica de rock dos anos 90, liderada por Kurt Cobain. É considerada uma das mais influentes do movimento grunge.",
        songs: [
            { name: "Smells Like Teen Spirit", icons: "🎤🎵" },
            { name: "Come as You Are", icons: "🎤🎵" },
            { name: "Lithium", icons: "🎤🎵" },
            { name: "In Bloom", icons: "🎤🎵" }
        ],
        members: [
            "Kurt Cobain - Vocal/Guitarra",
            "Krist Novoselic - Baixo",
            "Dave Grohl - Bateria"
        ],
        gallery: [
            "https://i.pinimg.com/736x/b4/b3/e1/b4b3e144d84d68912b03f3697a53c05a.jpg",
            "https://i.pinimg.com/736x/31/67/fb/3167fbecfc1ace532c56d2cd7039468c.jpg",
            "https://i.pinimg.com/736x/18/a2/49/18a24940e54c3055bff57fee789b4748.jpg",
            "https://i.pinimg.com/736x/c7/d8/1a/c7d81a72503b80aa74322c6093a16354.jpg"
        ],
        awards: [
            "MTV Video Music Award - 1992",
            "Grammy de Melhor Álbum de Música Alternativa - 1996",
            "Rock and Roll Hall of Fame - 2014"
        ]
    },
    metallica: {
        name: "Metallica",
        image: "https://i.pinimg.com/736x/f8/f9/67/f8f967dc797b263c5cb08578086517b5.jpg",
        views: "1.500.987.654 exibições",
        history: "Metallica é uma das bandas de metal mais influentes e populares da história, formada em 1981. Conhecida por seu estilo pesado e letras poderosas, a banda é um ícone do thrash metal.",
        songs: [
            { name: "Enter Sandman", icons: "🎤🎸" },
            { name: "Master of Puppets", icons: "🎤🎸" },
            { name: "One", icons: "🎤🎸" },
            { name: "Nothing Else Matters", icons: "🎤🎸" }
        ],
        members: [
            "James Hetfield - Vocal/Guitarra",
            "Lars Ulrich - Bateria",
            "Kirk Hammett - Guitarra",
            "Robert Trujillo - Baixo"
        ],
        gallery: [
            "https://i.pinimg.com/736x/ae/e9/29/aee9294867e292ee64f3700ed9ab7241.jpg",
            "https://i.pinimg.com/736x/b1/d0/9e/b1d09ed86e9c5a345a310ff539c24e0e.jpg",
            "https://i.pinimg.com/736x/02/84/d5/0284d5732d41fa68ec7f4c09aa84bc89.jpg",
            "https://i.pinimg.com/736x/56/aa/7c/56aa7ccff42737af6ed14893550ec4fd.jpg"
        ],
        awards: [
            "Grammy de Melhor Performance de Metal - 2004",
            "MTV Video Music Award - 1992",
            "Rock and Roll Hall of Fame - 2009"
        ]
    },
    acdc: {
        name: "AC/DC",
        image: "https://i.pinimg.com/736x/e3/89/a7/e389a7bae4b847286a791ab6686deab5.jpg",
        views: "900.123.654 exibições",
        history: "AC/DC é uma das bandas de rock mais famosas e influentes da história, formada em 1973 na Austrália. Conhecida pelo seu estilo enérgico e riffs marcantes, é um ícone do hard rock.",
        songs: [
            { name: "Back in Black", icons: "🎤🎸" },
            { name: "Highway to Hell", icons: "🎤🎸" },
            { name: "Thunderstruck", icons: "🎤🎸" },
            { name: "You Shook Me All Night Long", icons: "🎤🎸" }
        ],
        members: [
            "Angus Young - Guitarra",
            "Brian Johnson - Vocal",
            "Malcolm Young - Guitarra",
            "Cliff Williams - Baixo",
            "Phil Rudd - Bateria"
        ],
        gallery: [
            "https://i.pinimg.com/736x/f7/51/d5/f751d5cf3172782952ac81428f0b92bf.jpg",
            "https://i.pinimg.com/736x/c8/50/35/c8503542aa6b1d08671986c23c95eae9.jpg",
            "https://i.pinimg.com/736x/00/fe/db/00fedbcbe8c8b06e71d9b50f49c336d2.jpg",
            "https://i.pinimg.com/736x/2f/15/e6/2f15e66ad212a0230161faca315fe688.jpg"
        ],
        awards: [
            "Grammy de Melhor Performance de Hard Rock - 2004",
            "MTV Video Music Award - 1992",
            "Rock and Roll Hall of Fame - 2003"
        ]
    },
    foofighters: {
        name: "Foo Fighters",
        image: "https://i.pinimg.com/736x/f9/b1/c4/f9b1c458c25f8909ea89bbefdf662053.jpg",
        views: "1.200.456.789 exibições",
        history: "Formada em 1994 por Dave Grohl, ex-baterista do Nirvana, o Foo Fighters rapidamente se tornou uma das bandas de rock mais populares e influentes dos anos 90 e 2000. A banda mistura rock alternativo, grunge e hard rock com letras emocionantes.",
        songs: [
            { name: "Everlong", icons: "🎤🎸" },
            { name: "The Pretender", icons: "🎤🎸" },
            { name: "Learn to Fly", icons: "🎤🎸" },
            { name: "My Hero", icons: "🎤🎸" }
        ],
        members: [
            "Dave Grohl - Vocal/Guitarra",
            "Nate Mendel - Baixo",
            "Chris Shiflett - Guitarra",
            "Pat Smear - Guitarra",
            "Taylor Hawkins - Bateria (falecido em 2022)"
        ],
        gallery: [
            "https://i.pinimg.com/736x/6a/18/69/6a1869124944aa7cacfdf2a1248c5fda.jpg",
            "https://i.pinimg.com/736x/8c/81/16/8c81160a2d578110fedf657b6d95d80c.jpg",
            "https://i.pinimg.com/736x/3c/fe/95/3cfe95bac79f419cd6ffe30b7242fafd.jpg",
            "https://i.pinimg.com/736x/6e/be/b2/6ebeb2998aaee7b484e5d2c6969c46ca.jpg"
        ],
        awards: [
            "Grammy de Melhor Álbum de Rock - 2004",
            "MTV Video Music Award - 1997",
            "American Music Award de Melhor Banda de Rock - 2015"
        ]
    },
    daftpunk: {
        name: "Daft Punk",
        image: "https://i.pinimg.com/736x/e0/96/42/e09642d3e8075ceab0592e5e9658e624.jpg",
        views: "2.000.456.789 exibições",
        history: "Daft Punk é um duo francês formado por Thomas Bangalter e Guy-Manuel de Homem-Christo, conhecido por sua fusão de música eletrônica, house e funk. Com sua identidade secreta e inovações sonoras, são considerados pioneiros da música eletrônica moderna.",
        songs: [
            { name: "One More Time", icons: "🎤🎧" },
            { name: "Get Lucky", icons: "🎤🎧" },
            { name: "Around the World", icons: "🎤🎧" },
            { name: "Harder, Better, Faster, Stronger", icons: "🎤🎧" }
        ],
        members: [
            "Thomas Bangalter - Produção/Guitarra",
            "Guy-Manuel de Homem-Christo - Produção/Sintetizadores"
        ],
        gallery: [
            "https://i.pinimg.com/736x/1c/3d/79/1c3d7932d1c494d643ea9f82ef8b7567.jpg",
            "https://i.pinimg.com/736x/f4/a6/6c/f4a66c810e07c3ec7f6afe831d5e42e4.jpg",
            "https://i.pinimg.com/736x/4d/0a/52/4d0a523bd40e4e58502414b7b7b1c6b0.jpg",
            "https://i.pinimg.com/736x/27/00/39/270039754e55726b8f39dbbb5eafe872.jpg"
        ],
        awards: [
            "Grammy de Melhor Álbum de Dance/Eletro - 2014",
            "Grammy de Melhor Performance de Dance - 2014",
            "MTV Video Music Award - 2001"
        ]
    },
    arcticmonkeys: {
        name: "Arctic Monkeys",
        image: "https://i.pinimg.com/736x/f3/96/2e/f3962e048735aaaf7ebcb4386b4c425a.jpg",
        views: "1.800.654.123 exibições",
        history: "Arctic Monkeys é uma banda britânica formada em 2002 em Sheffield, conhecida pelo seu som inovador que mistura rock alternativo, indie e garage rock. Com letras inteligentes e uma sonoridade marcante, se tornaram uma das bandas mais influentes da cena indie.",
        songs: [
            { name: "Do I Wanna Know?", icons: "🎤🎸" },
            { name: "R U Mine?", icons: "🎤🎸" },
            { name: "I Bet You Look Good on the Dancefloor", icons: "🎤🎸" },
            { name: "Why'd You Only Call Me When You're High?", icons: "🎤🎸" }
        ],
        members: [
            "Alex Turner - Vocal/Guitarra",
            "Jamie Cook - Guitarra",
            "Nick O'Malley - Baixo",
            "Matt Helders - Bateria"
        ],
        gallery: [
            "https://i.pinimg.com/736x/a0/23/70/a0237077277b57c59d233cfc4d225ee2.jpg",
            "https://i.pinimg.com/736x/f0/9f/3a/f09f3a74055e1ed8978025f61b25fcb8.jpg",
            "https://i.pinimg.com/736x/a0/f5/af/a0f5af8d52d47550c13b49b1e57ca512.jpg",
            "https://i.pinimg.com/736x/3f/13/72/3f1372bc7b2937a0a52cf6da7e3ee85b.jpg"
        ],
        awards: [
            "BRIT Award de Melhor Banda Britânica - 2007",
            "Grammy de Melhor Álbum de Rock - 2015",
            "NME Award de Melhor Banda Britânica - 2006"
        ]
    },
    anitta: {
        name: "Anitta",
        image: "https://i.pinimg.com/736x/ed/42/bf/ed42bf2825cb9ffd20fa0e0c32830759.jpg",
        views: "3.500.987.654 exibições",
        history: "Anitta, nascida Larissa de Macedo Machado, é uma cantora, compositora e empresária brasileira. Famosa por seu estilo musical que mistura pop, funk carioca e reggaeton, ela se tornou uma das artistas mais influentes da música brasileira e internacional.",
        songs: [
            { name: "Show das Poderosas", icons: "🎤🎶" },
            { name: "Bang", icons: "🎤🎶" },
            { name: "Vai Malandra", icons: "🎤🎶" },
            { name: "Envolver", icons: "🎤🎶" }
        ],
        members: [
            "Anitta - Vocal"
        ],
        gallery: [
            "https://i.pinimg.com/736x/ab/9a/79/ab9a79e3d2f8d53917e041a7062eb92e.jpg",
            "https://i.pinimg.com/736x/6f/76/9d/6f769d30769398306b542d5303a35db0.jpg",
            "https://i.pinimg.com/736x/58/50/9f/58509fbaba874b686f880ad44d6c8f25.jpg",
            "https://i.pinimg.com/736x/b6/f2/1f/b6f21f42c05bd4fdb1845368c5837f7e.jpg"
        ],
        awards: [
            "Latin Grammy de Melhor Álbum de Música Urbana - 2018",
            "MTV Europe Music Award de Melhor Artista Brasileiro - 2017",
            "Billboard Latin Music Award de Artista Feminina do Ano - 2020"
        ]
    },
    bbking: {
        name: "B.B. King",
        image: "https://i.pinimg.com/736x/26/47/b6/2647b6bd75ed9a221250bf2c53014870.jpg",
        views: "500.123.654 exibições",
        history: "B.B. King foi um guitarrista, cantor e compositor americano, considerado um dos maiores músicos de blues de todos os tempos. Sua técnica inovadora e estilo único de tocar guitarra influenciaram gerações de músicos ao longo de sua carreira.",
        songs: [
            { name: "The Thrill Is Gone", icons: "🎤🎸" },
            { name: "Every Day I Have the Blues", icons: "🎤🎸" },
            { name: "Lucille", icons: "🎤🎸" },
            { name: "Sweet Little Angel", icons: "🎤🎸" }
        ],
        members: [
            "B.B. King - Vocal/Guitarra"
        ],
        gallery: [
            "https://i.pinimg.com/736x/d1/9e/8f/d19e8ff8a50cc8364587e986c33fe878.jpg",
            "https://i.pinimg.com/736x/be/13/1e/be131e973ffed27be6ba28b745678c0f.jpg",
            "https://i.pinimg.com/736x/20/8d/a4/208da41313e78f2a5b31b4c855233903.jpg",
            "https://i.pinimg.com/736x/85/64/0c/85640c6d666227ad759fbb509ae8ac99.jpg"
        ],
        awards: [
            "Grammy de Melhor Álbum de Blues Tradicional - 2004",
            "Grammy Lifetime Achievement Award - 1987",
            "Rock and Roll Hall of Fame - 1987"
        ]
    },
    joaogilberto: {
        name: "João Gilberto",
        image: "https://i.pinimg.com/736x/3b/4c/7f/3b4c7fb615e48a1eb2c35f858a6cd1a9.jpg",
        views: "250.987.456 exibições",
        history: "João Gilberto foi um cantor, compositor e violonista brasileiro, considerado o pai da Bossa Nova. Sua maneira inovadora de tocar violão e sua voz suave transformaram a música brasileira e influenciaram músicos no mundo todo.",
        songs: [
            { name: "Chega de Saudade", icons: "🎤🎸" },
            { name: "Desafinado", icons: "🎤🎸" },
            { name: "Garota de Ipanema", icons: "🎤🎸" },
            { name: "Águas de Março", icons: "🎤🎸" }
        ],
        members: [
            "João Gilberto - Vocal/Violão"
        ],
        gallery: [
            "https://i.pinimg.com/736x/91/d6/79/91d67990a6f51fd6bc4e58eb4cf2f8a3.jpg",
            "https://i.pinimg.com/736x/6f/d1/85/6fd185c6b63a68f8e4c3df6a6bc54351.jpg",
            "https://i.pinimg.com/736x/5e/67/1a/5e671a420cf4ee3b1e6f64a8f42060c5.jpg",
            "https://i.pinimg.com/736x/12/57/35/1257359b4730d70eeb5b40dc8d7607dc.jpg"
        ],
        awards: [
            "Grammy Latino de Melhor Álbum de MPB - 2001",
            "Grammy de Melhor Álbum de World Music - 2000",
            "Prêmio Shell de Música - 1992"
        ]
    }
    




};

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
                window.location.href = "../pages/musica.html"; // Redireciona para a página de aprendizado
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