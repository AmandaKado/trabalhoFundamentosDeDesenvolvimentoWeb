export function iniciarMenu() {

    const nav = document.querySelector('nav');
    const menuHamburguer = document.getElementById('menuHamburguer');
    const fecharMenu = document.getElementById('fecharMenu');
    const linksDoMenu = document.querySelectorAll('.itemNavegacao');

    const fecharSeClicarFora = (event) => {

        if (!nav.contains(event.target) && event.target !== menuHamburguer) {
            fecharMenuAberto(); 
        }
    };

    const abrirMenu = () => {
        nav.classList.add('menuAberto');
        setTimeout(() => document.addEventListener('click', fecharSeClicarFora));
    };

    const fecharMenuAberto = () => {
        nav.classList.remove('menuAberto');
        document.removeEventListener('click', fecharSeClicarFora);
    };

    if (menuHamburguer && fecharMenu && nav) {
        menuHamburguer.addEventListener('click', abrirMenu);
        fecharMenu.addEventListener('click', fecharMenuAberto); 
    
        linksDoMenu.forEach(link => {
            link.addEventListener('click', fecharMenuAberto);
        });
    }
};