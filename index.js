//Evento de click no menu
const hamburger = document.querySelector('.barra');
const lista = document.querySelector('.lista');


hamburger.addEventListener('click', () => {
    lista.classList.toggle('active');


});

// Adiciona ou remove o background no header ao rolar a página e sobe o menu se estiver aberto
const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    lista.classList.remove('active');


    if (window.scrollY > 50) {
        header.style.backgroundColor = "#2A2A2A";
        
    } else {
        header.style.backgroundColor = "transparent";
    }
    
});


// Adiciona o evento de clique a todos os links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



