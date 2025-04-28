/*=============== EXPANDED LIST ===============*/
const navExpand = document.getElementById('nav-expand'),
    navExpandList = document.getElementById('nav-expand-list'),
    navExpandIcon = document.getElementById('nav-expand-icon')

navExpand.addEventListener('click', () => {
    // Expand list
    navExpandList.classList.toggle('show-list')

    // Troca o ícone entre livro fechado e livro aberto
    if (navExpandList.classList.contains('show-list')) {
        navExpandIcon.classList.replace('ri-book-line', 'ri-book-open-line');
    } else {
        navExpandIcon.classList.replace('ri-book-open-line', 'ri-book-line');
    }
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)