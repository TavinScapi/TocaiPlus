let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange();
})

searchBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange();
})

function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
}

menuBtnChange();

document.getElementById('toggleLyrics').addEventListener('click', function () {
    const sidebar = document.getElementById('lyricsSidebar');
    const button = this;

    if (sidebar.style.display === 'none') {
        sidebar.style.display = 'block';
        button.textContent = 'Ocultar Letra';
    } else {
        sidebar.style.display = 'none';
        button.textContent = 'Mostrar Letra';
    }
});