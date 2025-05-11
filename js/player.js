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

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const mobileOverlay = document.querySelector('.mobile-overlay');

    menuToggle.addEventListener('click', function () {
        sidebar.classList.toggle('active');
        mobileOverlay.classList.toggle('active');
    });

    mobileOverlay.addEventListener('click', function () {
        sidebar.classList.remove('active');
        this.classList.remove('active');
    });
});