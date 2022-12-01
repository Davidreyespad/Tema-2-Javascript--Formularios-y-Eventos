

/* MODIFICAR EN CASA

<label for="cars">Choose a car:</label>

<select id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="vw">VW</option>
  <option value="audi" selected>Audi</option>
</select> */




let letra;

document.body.addEventListener("keyup", (event) => {
  //Capturo la letra que se ha pulsado
  letra = event.key;

  //Muestro en un párrafo lo que he se ha pulsado
  let label = document.querySelector("label");
  label.textContent= `Ha seleccionado la Letra: <b>${letra}</b>`;
    document.body.appendChild(label);
  //Creamos una ul y lo introducimos en el body
  let body = document.querySelector("body");
  let select = document.createElement("select");
  body.appendChild(select);

  //Recorremos de 0 a 9999 para ver cuales son válidos
  for (let i = 0; i < 10000; i++) {
    if (dniValido(i)) {
      let option = document.createElement("option");

      //Mostramos los dni validos para esa letra
      option.textContent = formateaNumero(i) + "-" + event.key.toUpperCase();
      select.appendChild(option);
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