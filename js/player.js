// Controle do overlay de letras
document.getElementById('lyrics-btn').addEventListener('click', function () {
    const lyricsOverlay = document.getElementById('lyrics-overlay');

    if (lyricsOverlay.classList.contains('active')) {
        // Se o overlay já está aberto, fecha
        closeLyrics();
    } else {
        // Se o overlay está fechado, abre
        openLyrics();
        // Simulação de letras (substitua pela implementação real)
        simulateLyrics();
    }
});

document.getElementById('close-lyrics').addEventListener('click', function () {
    closeLyrics();
});

// Fechar overlay ao pressionar ESC
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeLyrics();
    }
});

function openLyrics() {
    const lyricsOverlay = document.getElementById('lyrics-overlay');
    lyricsOverlay.classList.add('active');
    // Trava o scroll da página
    document.body.style.overflow = 'hidden';
}

function closeLyrics() {
    const lyricsOverlay = document.getElementById('lyrics-overlay');
    lyricsOverlay.classList.remove('active');
    // Libera o scroll da página
    document.body.style.overflow = '';
}