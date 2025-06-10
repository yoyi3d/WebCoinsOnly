document.addEventListener("DOMContentLoaded", function () {
  // --- Frases intro ---
  const frases = [
    "Me han dicho que estás buscando trabajo.",
    "Bienvenido a la web de CoinsOnly.",
    "Que conste que aquí sólo aceptamos... ¡monedas!",
    "Pasa y disfruta de nuestros productos."
  ];

  const dialogo = document.getElementById("dialogo");
  let index = 0;

  function mostrarFrase() {
    if (dialogo && index < frases.length) {
      dialogo.textContent = frases[index];
      index++;
      setTimeout(mostrarFrase, 3000);
    } else {
      setTimeout(() => {
        window.location.href = "main.html";
      }, 2000);
    }
  }

  if (dialogo) mostrarFrase();

  // --- Carrusel ---
  const images = document.querySelectorAll('.carousel-image');
  const indicators = document.querySelectorAll('.indicator');

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle('active', i === index);
      indicators[i].classList.toggle('active', i === index);
    });
  }

  let currentIndex = 0;

  const nextBtn = document.querySelector('.control-next');
  const prevBtn = document.querySelector('.control-prev');

  if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    });

    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    });
  }

  indicators.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      currentIndex = i;
      showImage(currentIndex);
    });
  });

  // --- Zoom ---
  const zoomOverlay = document.getElementById('zoomOverlay');
  const zoomImage = document.getElementById('zoomImage');

  images.forEach(img => {
    img.addEventListener('click', () => {
      if (zoomOverlay && zoomImage) {
        zoomImage.src = img.src;
        zoomOverlay.style.display = 'flex';
      }
    });
  });

  if (zoomOverlay) {
    zoomOverlay.addEventListener('click', () => {
      zoomOverlay.style.display = 'none';
      zoomImage.src = '';
    });
  }

  // --- Menú radial ---
  const menuToggle = document.getElementById("menuToggle");
  const menuItems = document.getElementById("menuItems");

  if (menuToggle && menuItems) {
    menuToggle.addEventListener("click", () => {
      menuItems.classList.toggle("active");
      menuToggle.classList.toggle("open");
    });
  }
});
