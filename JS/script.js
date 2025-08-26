document.addEventListener("DOMContentLoaded", function () {
  const frases = [
    "Bienvenido a la tienda online de Coins Only!",
    "En estos momentos todos nuestros esclavos están ocupados",
    "Manténgase a la espera mientras le redirigimos a la sucursal vaporosa",
    "Su tiempo y sobre todo su dinero, nos es muy importante",
    "Recuerde añadir nuestros productos a su wishlist."
  ];

  const dialogo = document.getElementById("dialogo");
  const personaje = document.getElementById("personaje");
  let index = 0;
  let hablandoInterval;
  let cambioFraseTimeout;
  let detenerHablaTimeout;
  let esperando = false;
  let finalizado = false;

  function startHablar() {
    let bocaAbierta = false;
    hablandoInterval = setInterval(() => {
      if (personaje) {
        personaje.src = bocaAbierta
          ? "Media/holojefe_semitrans.png"
          : "Media/holojefe_semitrans_BocaAbierta.png";
        bocaAbierta = !bocaAbierta;
      }
    }, 200);
  }

  function stopHablar() {
    clearInterval(hablandoInterval);
    if (personaje) personaje.src = "Media/holojefe_semitrans.png";
  }

  function mostrarFrase() {
    if (finalizado) return;

    if (dialogo && personaje && index < frases.length) {
      esperando = true;
      dialogo.style.opacity = 0;
      stopHablar();

      setTimeout(() => {
        dialogo.textContent = frases[index];
        index++;

        void dialogo.offsetWidth;
        dialogo.style.opacity = 1; // fade in

        startHablar();

        detenerHablaTimeout = setTimeout(() => {
          stopHablar();
        }, 2500);

        cambioFraseTimeout = setTimeout(() => {
          esperando = false;
          mostrarFrase();
        }, 3000);
      }, 400);
    } else {
      finalizarDialogo();
    }
  }

  function avanzarFrase() {
    if (finalizado) return;
    clearTimeout(cambioFraseTimeout);
    clearTimeout(detenerHablaTimeout);
    stopHablar();
    esperando = false;
    mostrarFrase();
  }

  function finalizarDialogo() {
    if (finalizado) return;
    finalizado = true;
    stopHablar();
    setTimeout(() => {
      window.location.href = "https://store.steampowered.com/app/3897600/Coins_Only/";
    }, 1000);
  }

  function manejarInteraccion() {
    if (finalizado) return;
    if (esperando) {
      avanzarFrase();
    }
  }

  document.addEventListener("click", manejarInteraccion);
  document.addEventListener("touchstart", manejarInteraccion);

  if (dialogo && personaje) {
    dialogo.style.opacity = 0;
    personaje.src = "Media/Minijefe.webp";
    mostrarFrase();
  }
});



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


// --- Click cursor ---
document.addEventListener("click", function (e) {
  if (!e.target.closest(".no-click-anim")) {
    document.body.classList.add("clicking");

    setTimeout(function () {
      document.body.classList.remove("clicking");
    }, 100);
  }
});
