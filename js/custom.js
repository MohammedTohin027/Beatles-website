const barIcon = document.querySelector('.bar-icon');
const navBar = document.querySelector('.navbar');

barIcon.addEventListener('click', () => {
    navBar.classList.toggle('bar-icon-active');
})