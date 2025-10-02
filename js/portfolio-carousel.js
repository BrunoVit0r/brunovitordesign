// Carrossel customizado para a sessão Portfólio

document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.getElementById('portfolio-carousel');
  const cards = Array.from(carousel.querySelectorAll('.portfolio-card'));
  const prevBtn = document.getElementById('portfolio-prev');
  const nextBtn = document.getElementById('portfolio-next');
  let startIndex = 0;
  const visibleCards = 3;

  function updateCarousel() {
    cards.forEach((card, i) => {
      if (i >= startIndex && i < startIndex + visibleCards) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
    prevBtn.disabled = startIndex === 0;
    nextBtn.disabled = startIndex + visibleCards >= cards.length;
  }

  prevBtn.addEventListener('click', function() {
    if (startIndex > 0) {
      startIndex--;
      updateCarousel();
    }
  });

  nextBtn.addEventListener('click', function() {
    if (startIndex + visibleCards < cards.length) {
      startIndex++;
      updateCarousel();
    }
  });

  updateCarousel();
});
