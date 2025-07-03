export function iniciarMenu() {

    const menuHamburguer = document.getElementById('menuHamburguer');
    const fecharMenu = document.getElementById('fecharMenu');
    const links = document.querySelector('nav');
    const linksDoMenu = document.querySelectorAll('.itemNavegacao');

    menuHamburguer.addEventListener('click', () => {
            links.classList.add('menuAberto');
    });

    fecharMenu.addEventListener('click', () => {
        links.classList.remove('menuAberto');
    });

    linksDoMenu.forEach(link => {
        link.addEventListener('click', () => {
            links.classList.remove('menuAberto');
        });
    });

}