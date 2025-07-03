export function iniciarMenu() {

    const nav = document.querySelector('nav');
    const header = document.querySelector('header');
    const menuHamburguer = document.getElementById('menuHamburguer');
    const fecharMenu = document.getElementById('fecharMenu');
    const linksDoMenu = document.querySelectorAll('.itemNavegacao');

    const abrirMenu = () => {
        nav.classList.add('menuAberto');
    };

    const fecharMenuAberto = () => {
        nav.classList.remove('menuAberto');
    };

    if (menuHamburguer && fecharMenu && nav) {
        menuHamburguer.addEventListener('click', abrirMenu);
        fecharMenu.addEventListener('click', fecharMenuAberto); 
    
        linksDoMenu.forEach(link => {
            link.addEventListener('click', fecharMenuAberto);
        });
    }

    header.addEventListener('click', (event) => {
        if (nav.classList.contains('menuAberto') && !event.target.closest('nav')) {
            fecharMenuAberto();
        }
    });
    
};