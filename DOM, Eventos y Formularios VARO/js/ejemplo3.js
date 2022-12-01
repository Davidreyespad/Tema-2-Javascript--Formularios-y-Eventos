const cuadro = document.querySelector('[name="password"]');

cuadro.addEventListener("keypress", (event) => console.log(String.fromCharCode(event.keyCode)));