document.addEventListener("DOMContentLoaded", function () {
    const scrollBtn = document.getElementById("auto-scroll-btn");
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
