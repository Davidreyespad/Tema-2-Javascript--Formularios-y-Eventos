const cuadro = document.querySelector('[name="password"]');

const muestraContra = function(event) {
    const texto = document.querySelector('[name="muestraContra"]');

    texto.textContent = texto.textContent.concat(String.fromCharCode(event.keyCode));

}

cuadro.addEventListener("keypress", muestraContra);