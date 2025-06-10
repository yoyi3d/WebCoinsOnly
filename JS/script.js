document.addEventListener("DOMContentLoaded", function () {
  const frases = [
    "¡Hola, viajero!",
    "Bienvenido a la tienda CoinsOnly.",
    "Aquí sólo aceptamos... ¡monedas!",
    "Pasa y echa un vistazo a nuestras ofertas doradas."
  ];

  const dialogo = document.getElementById("dialogo");
  let index = 0;

  function mostrarFrase() {
    if (index < frases.length) {
      dialogo.textContent = frases[index];
      index++;
      setTimeout(mostrarFrase, 2000); // cambia de frase cada 2s
    } else {
      setTimeout(() => {
        window.location.href = "main.html"; // Redirige al acabar
      }, 1500); // espera un poco para no cortar el último diálogo
    }
  }

  mostrarFrase();
});
