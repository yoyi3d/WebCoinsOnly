document.addEventListener("DOMContentLoaded", function () {
  const frases = [
    "Me han dicho que estas buscando trabajo.",
    "Bienvenido a la web de CoinsOnly.",
    "Que conste que aquí sólo aceptamos... ¡monedas!",
    "Pasa y disfruta de nuestros productos."
  ];

  const dialogo = document.getElementById("dialogo");
  let index = 0;

  function mostrarFrase() {
    if (index < frases.length) {
      dialogo.textContent = frases[index];
      index++;
      setTimeout(mostrarFrase, 3000); // cambia de frase cada 6s
    } else {
      setTimeout(() => {
        window.location.href = "main.html"; // Redirige al acabar
      }, 2000); // espera un poco para no cortar el último diálogo
    }
  }

  mostrarFrase();
});

// Carrusel
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const indicators = document.querySelectorAll('.indicator');

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
    indicators[i].classList.toggle('active', i === index);
  });
}

document.querySelector('.control-next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

document.querySelector('.control-prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

indicators.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    currentIndex = i;
    showImage(currentIndex);
  });
});

// Zoom
const zoomOverlay = document.getElementById('zoomOverlay');
const zoomImage = document.getElementById('zoomImage');

images.forEach(img => {
  img.addEventListener('click', () => {
    zoomImage.src = img.src;
    zoomOverlay.style.display = 'flex';
  });
});

zoomOverlay.addEventListener('click', () => {
  zoomOverlay.style.display = 'none';
  zoomImage.src = '';
});


// menu radial
  const menuToggle = document.getElementById("menuToggle");
  const menuItems = document.getElementById("menuItems");

  menuToggle.addEventListener("click", () => {
    menuItems.classList.toggle("active");
    menuToggle.classList.toggle("open");
  });