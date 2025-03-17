// Salvar o artista escolhido no localStorage e redirecionar
function selectArtist(artist) {
    localStorage.setItem("selectedArtist", artist);
    window.location.href = "artista/artista.html";
}

// Dados das bandas
const artistsData = {
    charliebrownjr: {
        name: "Charlie Brown Jr.",
        image: "/imagens/cbjr.avif",
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
        image: "/imagens/michael.avif",
        views: "800.452.123 exibições",
        history: "Michael Jackson foi um cantor, compositor e dançarino, conhecido como o Rei do Pop.",
        songs: [
            { name: "Billie Jean", icons: "🎤🎶" },
            { name: "Thriller", icons: "🎤🎶" },
            { name: "Beat It", icons: "🎤🎶" }
        ],
        members: ["Michael Jackson - Vocal"],
        gallery: [
            "/imagens/michael1.avif",
            "/imagens/michael2.avif",
            "/imagens/michael3.avif"
        ],
        awards: [
            "Grammy de Melhor Artista Masculino - 1984",
            "Billboard Music Awards - Melhor Artista Pop"
        ]
    },
    jorgemateus: {
        name: "Jorge & Mateus",
        image: "/imagens/JM.avif",
        views: "600.325.789 exibições",
        history: "Jorge & Mateus é uma dupla sertaneja brasileira, muito popular nos anos 2000.",
        songs: [
            { name: "Os Anjos Cantam", icons: "🎤🎶" },
            { name: "Sosseguei", icons: "🎤🎶" }
        ],
        members: ["Jorge - Vocal", "Mateus - Vocal"],
        gallery: [
            "/imagens/JM1.avif",
            "/imagens/JM2.avif"
        ],
        awards: [
            "Melhor Dupla Sertaneja - Prêmio Multishow 2011",
            "Melhor Álbum Sertanejo - Grammy Latino 2013"
        ]
    },
    johncoltrane: {
        name: "John Coltrane",
        image: "/imagens/john.avif",
        views: "250.654.321 exibições",
        history: "John Coltrane foi um dos maiores saxofonistas da história do jazz.",
        songs: [
            { name: "Giant Steps", icons: "🎷🎶" },
            { name: "My Favorite Things", icons: "🎷🎶" }
        ],
        members: ["John Coltrane - Saxofone"],
        gallery: [
            "/imagens/john1.avif",
            "/imagens/john2.avif"
        ],
        awards: [
            "Prêmio de Melhor Álbum de Jazz - 1965",
            "Grammy de Melhor Performance de Jazz - 1962"
        ]
    },
    caetanoveloso: {
        name: "Caetano Veloso",
        image: "/imagens/caetano.avif",
        views: "350.123.654 exibições",
        history: "Caetano Veloso é um cantor e compositor brasileiro, um dos fundadores do movimento Tropicalista.",
        songs: [
            { name: "Sozinho", icons: "🎤🎵" },
            { name: "Sampa", icons: "🎤🎵" }
        ],
        members: ["Caetano Veloso - Vocal"],
        gallery: [
            "/imagens/caetano1.avif",
            "/imagens/caetano2.avif"
        ],
        awards: [
            "Prêmio de Melhor Álbum de Música Brasileira - 2000",
            "Grammy Latino de Melhor Álbum Tropical - 2006"
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