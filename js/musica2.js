document.addEventListener("DOMContentLoaded", function () {
    const scrollBtn = document.getElementById("auto-scroll-btn");
    const startScrollBtn = document.getElementById("start-scroll-btn"); // Botão para iniciar/pausar
    const tablatura = document.querySelector(".tablatura");
    const speedDisplay = document.getElementById("speed-display");
    const increaseSpeedBtn = document.getElementById("increase-speed");
    const decreaseSpeedBtn = document.getElementById("decrease-speed");

    let scrollActive = false;
    let scrollInterval;
    let scrollSpeed = 1; // Velocidade inicial

    function startScrolling() {
        stopScrolling(); // Para qualquer rolagem anterior antes de iniciar
        scrollInterval = setInterval(() => {
            if (tablatura.scrollTop < tablatura.scrollHeight - tablatura.clientHeight) {
                tablatura.scrollTop += scrollSpeed; // Usa a velocidade escolhida
            } else {
                stopScrolling();
                scrollBtn.textContent = "Auto Rolagem ⏬";
                scrollActive = false;
            }
        }, 50);
    }

    function stopScrolling() {
        clearInterval(scrollInterval);
    }

    scrollBtn.addEventListener("click", function () {
        if (scrollActive) {
            stopScrolling();
            scrollBtn.textContent = "Auto Rolagem ⏬";
        } else {
            startScrolling();
            scrollBtn.textContent = "Pausar Rolagem ⏸️";
        }
        scrollActive = !scrollActive;
    });

    // Novo evento para iniciar e pausar a rolagem com o mesmo botão
    startScrollBtn.addEventListener("click", function () {
        if (scrollActive) {
            stopScrolling();
            startScrollBtn.textContent = "Auto Rolagem ⏬";
            scrollActive = false;
        } else {
            startScrolling();
            startScrollBtn.textContent = "Pausar Rolagem ⏸️";
            scrollActive = true;
        }
    });

    increaseSpeedBtn.addEventListener("click", function () {
        if (scrollSpeed < 5) {
            scrollSpeed++;
            speedDisplay.textContent = scrollSpeed + "x";
            if (scrollActive) {
                startScrolling(); // Reinicia a rolagem com a nova velocidade
            }
        }
    });

    decreaseSpeedBtn.addEventListener("click", function () {
        if (scrollSpeed > 1) {
            scrollSpeed--;
            speedDisplay.textContent = scrollSpeed + "x";
            if (scrollActive) {
                startScrolling(); // Reinicia a rolagem com a nova velocidade
            }
        }
    });
});


function toggleIframe() {
    const iframeContainer = document.getElementById('iframe-container');
    const listenButton = document.getElementById('responsive-listen-btn');

    if (iframeContainer.style.display === 'none' || iframeContainer.style.display === '') {
        iframeContainer.style.display = 'block';
        listenButton.textContent = 'Fechar';
    } else {
        iframeContainer.style.display = 'none';
        listenButton.textContent = 'Ouvir';
    }
}
