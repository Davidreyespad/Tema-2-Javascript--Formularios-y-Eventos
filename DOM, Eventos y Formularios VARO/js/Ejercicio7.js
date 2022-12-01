let letra;

document.body.addEventListener("keyup", (event) => {
  //Capturo la letra que se ha pulsado
  letra = event.key;

  //Muestro en un párrafo lo que he se ha pulsado
  let p = document.querySelector("p");
  p.innerHTML = `Ha seleccionado la Letra: <b>${letra}</b>`;

  //Creamos una ul y lo introducimos en el body
  let body = document.querySelector("body");
  let ul = document.createElement("ul");
  body.appendChild(ul);

  //Recorremos de 0 a 9999 para ver cuales son válidos
  for (let i = 0; i < 10000; i++) {
    if (dniValido(i)) {
      let li = document.createElement("li");

      //Mostramos los dni validos para esa letra
      li.textContent = formateaNumero(i) + "-" + event.key.toUpperCase();
      ul.appendChild(li);
    }
  }
});

const dniValido = (numDni) => {
  let resto = numDni % 23;
  let arrayLetras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
  if (letra.toUpperCase() === arrayLetras[resto]) {
    return true;
  }
  return false;
};

const formateaNumero = (num) => {
  num = num.toString();
  let contador = num.length;

  if (contador === 1) {
    return "000" + num;
  } else if (contador === 2) {
    return "00" + num;
  } else if (contador === 3) {
    return "0" + num;
  } else {
    return num;
  }
};
