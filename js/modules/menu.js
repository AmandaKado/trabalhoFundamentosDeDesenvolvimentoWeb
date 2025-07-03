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

    const secoes = document.querySelectorAll('section[id]');

    const atualizarMenuAtivo = () => {

        const checkpoint = window.scrollY + (window.innerHeight / 2);

        secoes.forEach(secao => {
            const topoSecao = secao.offsetTop;
            const alturaSecao = secao.offsetHeight;
            const idSecao = secao.getAttribute('id');


            const checkpointEstaDentroDaSecao = checkpoint >= topoSecao && checkpoint <= topoSecao + alturaSecao;

            if (checkpointEstaDentroDaSecao) {

                const linkAtivo = document.querySelector(`.itemNavegacao[href*=${idSecao}]`);

                linksDoMenu.forEach(link => link.parentElement.classList.remove('ativo'));

                if (linkAtivo) {
                    linkAtivo.parentElement.classList.add('ativo');
                }
            }
        });
    };

    window.addEventListener('scroll', atualizarMenuAtivo);

};