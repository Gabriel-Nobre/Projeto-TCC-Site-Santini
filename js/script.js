// Array de imagens
const images = document.querySelectorAll('.lightbox-trigger');
let currentImageIndex = 0;

// Seleciona os elementos do lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

// Abre o lightbox ao clicar nas imagens
images.forEach((trigger, index) => {
    trigger.addEventListener('click', function(event) {
        event.preventDefault();
        currentImageIndex = index; // Define o índice atual da imagem
        lightbox.style.display = 'flex';
        lightboxImg.src = this.href; // Carrega a imagem no lightbox
    });
});

// Fecha o lightbox ao clicar no "X"
closeBtn.addEventListener('click', function() {
    lightbox.style.display = 'none';
});

// Função para passar para a próxima imagem
nextBtn.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex + 1) % images.length; // Próxima imagem
    lightboxImg.src = images[currentImageIndex].href; // Atualiza a imagem no lightbox
});

// Função para voltar para a imagem anterior
prevBtn.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length; // Imagem anterior
    lightboxImg.src = images[currentImageIndex].href; // Atualiza a imagem no lightbox
});

// Fechar o lightbox ao clicar fora da imagem
lightbox.addEventListener('click', function(event) {
    if (event.target === lightbox) {
        lightbox.style.display = 'none';
    }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const offset = 70; // ajuste isso de acordo com a altura da sua navbar
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = target.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});