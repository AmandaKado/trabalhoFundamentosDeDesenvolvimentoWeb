document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA DO MENU HAMBÚRGUER ---
    const menuHamburguer = document.getElementById('menuHamburguer');
    const linksNavegacao = document.getElementById('linksNavegacao');

    if (menuHamburguer && linksNavegacao) {
        menuHamburguer.addEventListener('click', () => {
            linksNavegacao.classList.toggle('ativo');
            const icone = menuHamburguer.querySelector('i');
            icone.classList.toggle('fa-bars');
            icone.classList.toggle('fa-times');
        });
    }

    document.querySelectorAll('.itemNavegacao').forEach(link => {
        link.addEventListener('click', () => {
            if (linksNavegacao.classList.contains('ativo')) {
                linksNavegacao.classList.remove('ativo');
                const icone = menuHamburguer.querySelector('i');
                icone.classList.remove('fa-times');
                icone.classList.add('fa-bars');
            }
        });
    });

    // --- LÓGICA PARA DESTACAR LINK ATIVO NA ROLAGEM ---
    const secoes = document.querySelectorAll('section[id]');
    const itensNavegacao = document.querySelectorAll('.itemNavegacao');

    window.addEventListener('scroll', () => {
        const posicaoScroll = window.scrollY;
        
        secoes.forEach(secao => {
            const topoSecao = secao.offsetTop - 150;
            const alturaSecao = secao.offsetHeight;
            const idSecao = secao.getAttribute('id');

            if (posicaoScroll >= topoSecao && posicaoScroll < topoSecao + alturaSecao) {
                itensNavegacao.forEach(item => {
                    item.classList.remove('ativo');
                    if (item.getAttribute('href') === `#${idSecao}`) {
                        item.classList.add('ativo');
                    }
                });
            }
        });
    });

    // --- LÓGICA DO BOTÃO VOLTAR AO TOPO ---
    const botaoVoltarAoTopo = document.getElementById('botaoVoltarAoTopo');
    if(botaoVoltarAoTopo) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                botaoVoltarAoTopo.classList.add('mostrar');
            } else {
                botaoVoltarAoTopo.classList.remove('mostrar');
            }
        });
    }

    // --- LÓGICA DO FADE-IN DOS ELEMENTOS ---
    const elementosFadeIn = document.querySelectorAll('.fadeInElemento');
    if (elementosFadeIn.length > 0) {
        const opcoesObservador = {
            root: null,
            threshold: 0.1,
        };

        const observador = new IntersectionObserver((entradas, observador) => {
            entradas.forEach(entrada => {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add('visivel');
                    observador.unobserve(entrada.target);
                }
            });
        }, opcoesObservador);

        elementosFadeIn.forEach(elemento => observador.observe(elemento));
    }
    
    // --- LÓGICA DO CARROSSEL DO PORTFÓLIO ---
    const carrossel = document.querySelector('.carrosselPortfolio');
    const botaoAnterior = document.querySelector('.controleCarrossel.anterior');
    const botaoProximo = document.querySelector('.controleCarrossel.proximo');
    const cartoes = document.querySelectorAll('.cartaoProjeto');

    if (carrossel && botaoAnterior && botaoProximo && cartoes.length > 0) {
        let indiceAtual = Math.floor(cartoes.length / 2); // Começa com o item do meio destacado

        const atualizarDestaque = () => {
            cartoes.forEach((cartao, index) => {
                if (index === indiceAtual) {
                    cartao.classList.add('destaque');
                } else {
                    cartao.classList.remove('destaque');
                }
            });
        };

        const moverCarrossel = () => {
            const cartaoAtivo = cartoes[indiceAtual];
            const deslocamento = cartaoAtivo.offsetLeft - (carrossel.offsetWidth / 2) + (cartaoAtivo.offsetWidth / 2);
            
            carrossel.scrollTo({
                left: deslocamento,
                behavior: 'smooth'
            });
            atualizarDestaque();
        };

        botaoAnterior.addEventListener('click', () => {
            indiceAtual = (indiceAtual > 0) ? indiceAtual - 1 : cartoes.length - 1;
            moverCarrossel();
        });

        botaoProximo.addEventListener('click', () => {
            indiceAtual = (indiceAtual < cartoes.length - 1) ? indiceAtual + 1 : 0;
            moverCarrossel();
        });

        // Inicializa o carrossel na posição correta
        setTimeout(moverCarrossel, 100);
    }
});