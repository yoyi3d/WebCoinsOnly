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
