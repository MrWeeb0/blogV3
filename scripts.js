document.addEventListener('DOMContentLoaded', function () {
  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-slide');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  let idx = 0;

  function updateCarousel() {
    track.style.transform = `translateX(-${idx * slides[0].offsetWidth}px)`;
  }

  prevBtn.addEventListener('click', () => {
    idx = (idx - 1 + slides.length) % slides.length;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    idx = (idx + 1) % slides.length;
    updateCarousel();
  });

  // Optional: Auto-scroll every 5 seconds
  setInterval(() => {
    idx = (idx + 1) % slides.length;
    updateCarousel();
  }, 5000);

  window.addEventListener('resize', updateCarousel);
  updateCarousel();
});