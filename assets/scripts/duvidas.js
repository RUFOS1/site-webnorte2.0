function showQuestions() {
    const duvida1 = document.querySelector('#duvida-1');
    const resposta1 = document.querySelector('#resposta-1');

    const duvida2 = document.querySelector('#duvida-2');
    const resposta2 = document.querySelector('#resposta-2');

    const duvida3 = document.querySelector('#duvida-3');
    const resposta3 = document.querySelector('#resposta-3');

    const duvida4 = document.querySelector('#duvida-4');
    const resposta4 = document.querySelector('#resposta-4');

    const duvida5 = document.querySelector('#duvida-5');
    const resposta5 = document.querySelector('#resposta-5');
    
    duvida1.addEventListener('click', () => {
        if (resposta1.style.display === 'block') {
            resposta1.classList.remove('slide-in-down');
            resposta1.classList.add('slide-out-up');
            setTimeout(() => {
                resposta1.style.display = 'none';
            }, 300); // Tempo da animação em milissegundos
        } else {
            resposta1.style.display = 'block';
            resposta1.classList.remove('slide-out-up');
            resposta1.classList.add('slide-in-down');
        }
    });
    






    duvida2.addEventListener('click', () => {
        if (resposta2.style.display === 'block') {
            resposta2.classList.remove('slide-in-down');
            resposta2.classList.add('slide-out-up');
            setTimeout(() => {
                resposta2.style.display = 'none';
            }, 300); // Tempo da animação em milissegundos
        } else {
            resposta2.style.display = 'block';
            resposta2.classList.remove('slide-out-up');
            resposta2.classList.add('slide-in-down');
        }
    });

    duvida3.addEventListener('click', () => {
        if (resposta3.style.display === 'block') {
            resposta3.classList.remove('slide-in-down');
            resposta3.classList.add('slide-out-up');
            setTimeout(() => {
                resposta3.style.display = 'none';
            }, 300); // Tempo da animação em milissegundos
        } else {
            resposta3.style.display = 'block';
            resposta3.classList.remove('slide-out-up');
            resposta3.classList.add('slide-in-down');
        }
    });

    duvida4.addEventListener('click', () => {
        if (resposta4.style.display === 'block') {
            resposta4.classList.remove('slide-in-down');
            resposta4.classList.add('slide-out-up');
            setTimeout(() => {
                resposta4.style.display = 'none';
            }, 300); // Tempo da animação em milissegundos
        } else {
            resposta4.style.display = 'block';
            resposta4.classList.remove('slide-out-up');
            resposta4.classList.add('slide-in-down');
        }
    });

    duvida5.addEventListener('click', () => {
        if (resposta5.style.display === 'block') {
            resposta5.classList.remove('slide-in-down');
            resposta5.classList.add('slide-out-up');
            setTimeout(() => {
                resposta5.style.display = 'none';
            }, 300); // Tempo da animação em milissegundos
        } else {
            resposta5.style.display = 'block';
            resposta5.classList.remove('slide-out-up');
            resposta5.classList.add('slide-in-down');
        }
    });

    
}

document.addEventListener('DOMContentLoaded', showQuestions);
