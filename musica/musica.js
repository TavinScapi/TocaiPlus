let songData = {};

fetch('musica.json')
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
         artistImageElement.alt = `Foto de ${artistDisplayName}`; // Usa o nome formatado aqui também
      }

      document.getElementById("song-tabs-content").innerHTML = songDetails.tabs;
      document.getElementById("song-video").src = songDetails.videoUrl + "?autoplay=0";
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