export function iniciarMenu() {

    const menuHamburguer = document.getElementById('menuHamburguer');
    const links = document.querySelectorAll('nav');
    const fecharMenu = document.getElementById('fecharMenu');

    menuHamburguer.addEventListener('click', () => {
            links.classList.add('menuAberto');
    });

    fecharMenu.addEventListener('click', () => {
        links.classList.remove('menuAberto');
    });

}