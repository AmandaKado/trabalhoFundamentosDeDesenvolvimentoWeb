export function iniciarAnimacaoScroll() {
    function iniciarAnimacaoScroll() {
        const elementos = document.querySelectorAll('.fadeInElemento');
        if (elementos.length === 0) return;

        const observer = new IntersectionObserver((entradas) => {
            entradas.forEach(entrada => {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add('visivel');
                }
            });
        }, { threshold: 0.1 });

        elementos.forEach(el => observer.observe(el));
    }

    document.addEventListener('DOMContentLoaded', () => {

        iniciarAnimacaoScroll();

    });
};