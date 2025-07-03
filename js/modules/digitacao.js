export function iniciarDigitacao() {
    document.addEventListener('DOMContentLoaded', () => {
        
        function efeitoMaquinaDeEscrever(elemento) {
            const textoArray = elemento.innerHTML.split('');
            elemento.innerHTML = '';
            
            textoArray.forEach((letra, i) => {
                setTimeout(() => {
                    elemento.innerHTML += letra;
                }, 75 * i); 
            });
        }

        const tituloAnimado = document.querySelector('.subtitulo');

        if(tituloAnimado) {
            efeitoMaquinaDeEscrever(tituloAnimado);
        }

    });
}