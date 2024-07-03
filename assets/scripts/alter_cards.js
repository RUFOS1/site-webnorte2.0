function mudarCidade(cidade) {
    const titlenvu = document.querySelector('#title-nvu');
    const titlevp = document.querySelector('#title-vp');

    // Referências aos elementos dos cards
    //cards cidades
    const megasNumberCity1 = document.querySelector('#mega-velocity-city1');
    const megasNumberCity2 = document.querySelector('#mega-velocity-city2');
    const megasNumberCity3 = document.querySelector('#mega-velocity-city3');

    //REFERENCIA AOS TITULOS DOS PLANOS cidade
    const tituloplano1 = document.querySelector('#titulo-plano-cards1');
    const tituloplano2 = document.querySelector('#titulo-plano-cards2');
    const tituloplano3 = document.querySelector('#titulo-plano-cards3');

    //h4 instalação gratis rural 
    const instaGratuita1 = document.querySelector('#h4-insta-rural1')
    const instaGratuita2 = document.querySelector('#h4-insta-rural2')
    const instaGratuita3 = document.querySelector('#h4-insta-rural3')
    
    const hrinstaGratuita1 = document.querySelector('#hr-instal1')
    const hrinstaGratuita2 = document.querySelector('#hr-instal2')
    const hrinstaGratuita3 = document.querySelector('#hr-instal3')
   

    // REFERENCIA AOS BOTOES COM LINK DOS CARDS
    const linkcard1 = document.querySelector('#link-card1')
    const linkcard2 = document.querySelector('#link-card2')
    const linkcard3 = document.querySelector('#link-card3')
    const linkcard4 = document.querySelector('#link-card4')

    const linkcard5 = document.querySelector('#link-card5')
    const linkcard6= document.querySelector('#link-card6')
    const linkcard7 = document.querySelector('#link-card7')

    


    //REFERENCIA AOS TITULOS DOS PLANOS RURAL
    const tituloplanorural1 = document.querySelector('#titulo-plano-cardsrural1');
    const tituloplanorural2 = document.querySelector('#titulo-plano-cardsrural2');
    const tituloplanorural3 = document.querySelector('#titulo-plano-cardsrural3');
    
    //cards rurais
    const megasNumberRural1 = document.querySelector('#mega-velocity-rural1');
    const megasNumberRural2 = document.querySelector('#mega-velocity-rural2');
    const megasNumberRural3 = document.querySelector('#mega-velocity-rural3');

    // icone da tv e titulo RURAL
    const hr_tvrural2 = document.querySelector('#hr-tvrural2')
    const h4_tvrural2 = document.querySelector('#h4-tvrural2')
    const hr_tvrural3 = document.querySelector('#h4-tvrural3')

    // Referências aos botões
    const btnNvu = document.querySelector('#btn-nvu');
    const btnVp = document.querySelector('#btn-vp');




    if (cidade === 'nvu') {
        
        // Oculta o título de 'vp' com animação
        titlevp.classList.add('slide-out-left');
        setTimeout(() => {
            titlevp.style.display = 'none';
            titlevp.classList.remove('slide-out-left');
        }, 300);

        // Oculta o ICONE E O TITULO DE TV 
        hr_tvrural2.classList.add('slide-out-left');
        setTimeout(() => {
            hr_tvrural2.style.opacity = '0';
            hr_tvrural2.classList.remove('slide-out-left');
        }, 300);

        h4_tvrural2.classList.add('slide-out-left');
        setTimeout(() => {
            h4_tvrural2.style.opacity = '0';
            h4_tvrural2.classList.remove('slide-out-left');
        }, 300);

        //----------------------------------------

        
        // Exibe o título de 'nvu' com animação
        setTimeout(() => {
            titlenvu.style.display = 'flex';
            titlenvu.classList.add('slide-in-right');
            setTimeout(() => {
                titlenvu.classList.remove('slide-in-right');
            }, 300);
        }, 300);

        // Exibe o h4 com instalação gratuita
        setTimeout(() => {
            instaGratuita1.style.display = 'block';
            instaGratuita1.classList.add('slide-in-right');
            setTimeout(() => {
                instaGratuita1.classList.remove('slide-in-right');
            }, 300);
        }, 300);

        setTimeout(() => {
            instaGratuita2.style.display = 'block';
            instaGratuita2.classList.add('slide-in-right');
            setTimeout(() => {
                instaGratuita2.classList.remove('slide-in-right');
            }, 300);
        }, 300);

        setTimeout(() => {
            instaGratuita3.style.display = 'block';
            instaGratuita3.classList.add('slide-in-right');
            setTimeout(() => {
                instaGratuita3.classList.remove('slide-in-right');
            }, 300);
        }, 300);

        setTimeout(() => {
            hrinstaGratuita1.style.display = 'block';
            hrinstaGratuita1.classList.add('slide-in-right');
            setTimeout(() => {
                hrinstaGratuita1.classList.remove('slide-in-right');
            }, 300);
        }, 300);

        setTimeout(() => {
            hrinstaGratuita2.style.display = 'block';
            hrinstaGratuita2.classList.add('slide-in-right');
            setTimeout(() => {
                hrinstaGratuita2.classList.remove('slide-in-right');
            }, 300);
        }, 300);

        setTimeout(() => {
            hrinstaGratuita3.style.display = 'block';
            hrinstaGratuita3.classList.add('slide-in-right');
            setTimeout(() => {
                hrinstaGratuita3.classList.remove('slide-in-right');
            }, 300);
        }, 300);

       

        ///////////////////////////////////////////////////////////////////

        // Atualiza números de MEGAS cidade para 'nvu'
        megasNumberCity1.textContent = '250MB';
        megasNumberCity2.textContent = '450MB';
        megasNumberCity3.textContent = '650MB';

        // atualizar os titulos dos planos
        tituloplano1.textContent = 'WEB FIBRA 250';
        tituloplano2.textContent = 'WEB FIBRA 450';
        tituloplano3.textContent = 'WEB FIBRA 650';

        // atualizar link de cada botao
        linkcard1.href = 'https://api.whatsapp.com/send?phone=5569981274593&text=Ola'
        linkcard2.href = 'https://api.whatsapp.com/send?phone=5569981274593&text=Ola'
        linkcard3.href = 'https://api.whatsapp.com/send?phone=5569981274593&text=Ola'
        linkcard4.href = 'https://api.whatsapp.com/send?phone=5569981274593&text=Ola'
        linkcard5.href = 'https://api.whatsapp.com/send?phone=5569981274593&text=Ola'
        linkcard6.href = 'https://api.whatsapp.com/send?phone=5569981274593&text=Ola'
        linkcard7.href = 'https://api.whatsapp.com/send?phone=5569981274593&text=Ola'


        

        // Atualiza números de MEGAS rural para 'nvu'
        megasNumberRural1.textContent = '150MB';
        megasNumberRural2.textContent = '200MB';
        megasNumberRural3.textContent = '300MB';

        // atualizar os titulos dos planos nvu
        tituloplanorural1.textContent = 'WEB FIBRA 150';
        tituloplanorural2.textContent = 'WEB FIBRA 200';
        tituloplanorural3.textContent = 'WEB FIBRA 300';


        // Atualiza classes dos botões
        btnNvu.classList.add('active');
        btnVp.classList.remove('active');


    } else if (cidade === 'vp') {
        // Oculta o título de 'nvu' com animação
        titlenvu.classList.add('slide-out-left');
        setTimeout(() => {
            titlenvu.style.display = 'none';
            titlenvu.classList.remove('slide-out-left');
        }, 300);

        // Oculta o h4com instalãcao gratuita 
        instaGratuita1.classList.add('slide-out-left');
        setTimeout(() => {
            instaGratuita1.style.display = 'none';
            instaGratuita1.classList.remove('slide-out-left');
        }, 300);

        instaGratuita2.classList.add('slide-out-left');
        setTimeout(() => {
            instaGratuita2.style.display = 'none';
            instaGratuita2.classList.remove('slide-out-left');
        }, 300);

        instaGratuita3.classList.add('slide-out-left');
        setTimeout(() => {
            instaGratuita3.style.display = 'none';
            instaGratuita3.classList.remove('slide-out-left');
        }, 300);


        hrinstaGratuita1.classList.add('slide-out-left');
        setTimeout(() => {
            hrinstaGratuita1.style.display = 'none';
            hrinstaGratuita1.classList.remove('slide-out-left');
        }, 300);
        hrinstaGratuita2.classList.add('slide-out-left');
        setTimeout(() => {
            hrinstaGratuita2.style.display = 'none';
            hrinstaGratuita2.classList.remove('slide-out-left');
        }, 300);
        hrinstaGratuita3.classList.add('slide-out-left');
        setTimeout(() => {
            hrinstaGratuita3.style.display = 'none';
            hrinstaGratuita3.classList.remove('slide-out-left');
        }, 300);


        //---------------------------------------------

        // Exibe o título de 'vp' com animação
        setTimeout(() => {
            titlevp.style.display = 'flex';
            titlevp.classList.add('slide-in-right');
            setTimeout(() => {
                titlevp.classList.remove('slide-in-right');
            }, 300);
        }, 300);

        // Exibe o ICONE E O TITULO DA TV com animação
        setTimeout(() => {
            hr_tvrural2.style.opacity = '1';
            hr_tvrural2.classList.add('slide-in-right');
            setTimeout(() => {
                hr_tvrural2.classList.remove('slide-in-right');
            }, 300);
        }, 300);

        
        setTimeout(() => {
            h4_tvrural2.style.opacity = '1';
            h4_tvrural2.classList.add('slide-in-right');
            setTimeout(() => {
                h4_tvrural2.classList.remove('slide-in-right');
            }, 300);
        }, 300);
        //-----------------------------------------

        // Atualiza números de MEGAS para 'vp'
        megasNumberCity1.textContent = '450MB';
        megasNumberCity2.textContent = '650MB';
        megasNumberCity3.textContent = '750MB';

        // atualizar link de cada botao
        linkcard1.href = 'https://api.whatsapp.com/send?phone=5569984333306&text=Ola'
        linkcard2.href = 'https://api.whatsapp.com/send?phone=5569984333306&text=Ola'
        linkcard3.href = 'https://api.whatsapp.com/send?phone=5569984333306&text=Ola'
        linkcard4.href = 'https://api.whatsapp.com/send?phone=5569984333306&text=Ola'
        linkcard5.href = 'https://api.whatsapp.com/send?phone=5569984333306&text=Ola'
        linkcard6.href = 'https://api.whatsapp.com/send?phone=5569984333306&text=Ola'
        linkcard7.href = 'https://api.whatsapp.com/send?phone=5569984333306&text=Ola'

        

        // atualizar os titulos dos planos
        tituloplano1.textContent = 'WEB FIBRA 450';
        tituloplano2.textContent = 'WEB FIBRA 650';
        tituloplano3.textContent = 'WEB FIBRA 750';

        // Atualiza números de MEGAS rural para 'vp'
        megasNumberRural1.textContent = '50 MB';
        megasNumberRural2.textContent = '150 MB';
        megasNumberRural3.textContent = '200 MB';

        // atualizar os titulos dos planos nvu
        tituloplanorural1.textContent = 'WEB FIBRA 50';
        tituloplanorural2.textContent = 'WEB FIBRA 150';
        tituloplanorural3.textContent = 'WEB FIBRA 200';


        // Atualiza classes dos botões
        btnNvu.classList.remove('active');
        btnVp.classList.add('active');

    }
}

document.addEventListener('DOMContentLoaded', function () {
    mudarCidade('nvu');
})










function ShowPlansRural() {
    const BtnShowPlans = document.querySelector('#btn-exibir-planos');
    const PlansRural = document.querySelector('.container-cards-fibra-rural');
    const iconEye = document.querySelector('#icon-eye'); // Seleciona o ícone de olho dentro do botão

    BtnShowPlans.addEventListener('click', function () {
        if (PlansRural.style.display === 'none' || PlansRural.style.display === '') {
            // Mostra os planos com animação de slide-in-down
            PlansRural.style.display = 'flex';
            PlansRural.classList.remove('slide-out-left');
            PlansRural.classList.add('slide-in-right');

            // Troca o ícone para olho aberto
            iconEye.classList.remove('fa-plus-square');
            iconEye.classList.add('fa-minus-square-o');


        } else {
            // Oculta os planos com animação de slide-out-up
            PlansRural.classList.remove('slide-in-right');
            PlansRural.classList.add('slide-out-left');
            setTimeout(() => {
                PlansRural.style.display = 'none';
            }, 200);

            // Troca o ícone de volta para olho fechado
            iconEye.classList.remove('fa-minus-square-o');
            iconEye.classList.add('fa-plus-square');


        }
    });
}


document.addEventListener('DOMContentLoaded', function () {
    ShowPlansRural();
});

;
