const btnDown = document.getElementById('scroll-down');
const btnUp = document.getElementById('scroll-up');

// Scroll hacia abajo
btnDown.addEventListener('click', () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
});

// Scroll hacia arriba
btnUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Mostrar / ocultar botones según posición
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const pageHeight = document.body.scrollHeight - window.innerHeight;

  if (scrollPosition > pageHeight * 0.5) {
    btnUp.classList.remove('hidden');
    btnDown.classList.add('hidden');
  } else {
    btnUp.classList.add('hidden');
    btnDown.classList.remove('hidden');
  }
});
