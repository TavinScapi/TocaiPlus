const messages = [
    "Carregando cifras",
    "Preparando o violão",
    "Afinando as cordas",
    "Pronto para tocar"
];

let progress = 0;
let currentMessage = 0;
const progressBar = document.getElementById('progressBar');
const loadingText = document.getElementById('loadingText');

// Simular progresso
const interval = setInterval(() => {
    // Incremento não linear para parecer mais natural
    const increment = progress < 50 ?
        Math.random() * 5 + 3 :
        Math.random() * 3 + 1;

    progress = Math.min(progress + increment, 100);
    progressBar.style.width = progress + '%';

    // Atualizar mensagens
    if (progress >= 25 && currentMessage < 1) {
        loadingText.innerHTML = `${messages[1]}<span class="loading-dots"></span>`;
        currentMessage = 1;
    } else if (progress >= 50 && currentMessage < 2) {
        loadingText.innerHTML = `${messages[2]}<span class="loading-dots"></span>`;
        currentMessage = 2;
    } else if (progress >= 75 && currentMessage < 3) {
        loadingText.innerHTML = `${messages[3]}<span class="loading-dots"></span>`;
        currentMessage = 3;
    }

    // Finalizar carregamento
    if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
            document.querySelector('.splash-container').style.opacity = 0;
            setTimeout(() => {
                window.location.href = "pages/home.html";
            }, 600);
        }, 800);
    }
}, 300);

// Prevenir comportamento de toque indesejado
document.addEventListener('touchmove', (e) => {
    if (e.target === document.documentElement) {
        e.preventDefault();
    }
}, { passive: false });