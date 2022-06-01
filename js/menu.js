export function handleMenu() {
    const hamburgerIcon = document.querySelector('.hamburger');
    const menuNavElement = document.querySelector('.menuNav');
    const closeElement = document.querySelector('.close');


    hamburgerIcon.addEventListener('click', () => {
        menuNavElement.classList.remove('slide-out');
        menuNavElement.classList.remove('hidden');
        menuNavElement.classList.add('slide-in');
    });
    closeElement.addEventListener('click', () => {
        menuNavElement.classList.add('slide-out');
        menuNavElement.classList.remove('slide-in');
    });
}

