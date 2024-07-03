let slideIndex = 1;
let slideInterval; // Variável para armazenar o intervalo

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Função para avançar os slides automaticamente
function autoSlides() {
  plusSlides(1); // Avança para o próximo slide
}

// Configura um intervalo para chamar a função autoSlides a cada 5 segundos
function startAutoSlides() {
  slideInterval = setInterval(autoSlides, 4000); // 5000 milissegundos = 5 segundos
}

// Inicia automaticamente o slideshow
startAutoSlides();

// Função para parar o avanço automático dos slides
function pauseSlides() {
  clearInterval(slideInterval);
}

// Mostra os slides inicialmente
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Adiciona eventos para pausar o slideshow quando o mouse estiver sobre os slides
let slideshowContainer = document.querySelector('.slideshow-container');

slideshowContainer.addEventListener('mouseenter', function() {
  pauseSlides();
});

slideshowContainer.addEventListener('mouseleave', function() {
  startAutoSlides();
});

// Adicione um evento para pausar o slideshow quando o usuário interagir com os controles manuais
document.querySelector('.prev').addEventListener('click', function() {
  pauseSlides();
});
document.querySelector('.next').addEventListener('click', function() {
  pauseSlides();
});
document.querySelectorAll('.dot').forEach(function(dot) {
  dot.addEventListener('click', function() {
    pauseSlides();
  });
});
