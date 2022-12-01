const casiPrimo = (num) => {
  let divisores = 0;

  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      divisores++;
    }
  }
  if (divisores > 1) {
    return false;
  }
  return true;
};

const creaTabla = () => {
  //Creamos un contador
  let cont = 1;
  //Creamos la tabla
  const tabla = document.createElement("table");
  //La insertamos en el html bajo el botón
  botonGenerador.insertAdjacentElement("afterend", tabla);

  //Generamos los tr y los td en su interior y los insertamos
  for (let b = 0; b < 100; b++) {
    //Creamos el elemento tr
    const tr = document.createElement("tr");
    //Lo colocamos como hijo de table
    tabla.appendChild(tr);

    for (let i = 0; i < 100; i++) {
      //Creamos el elemento td
      const td = document.createElement("td");
      //Lo colocamos como hijo de tr
      tr.appendChild(td);
      //Le asignamos un contenido de texto
      td.textContent = cont;
      //Le asignamos un nombre que  será igual que el contenido
      td.setAttribute("name", cont);

      /* if (casiPrimo(td.getAttribute("name"))){
        td.setAttribute("style", "background-color:rgb(255, 233, 0)");
    }*/
      cont++;
    }
  }

  //Una vez creada la tabla, creamos el botón para comprobar los números casi primos
  const body = document.querySelector("body");
  const botonCasiPrimo = document.createElement("button");
  botonCasiPrimo.textContent = "Pulsa aquí para señalar los numeros casi primos";
  body.insertAdjacentElement("afterend", botonCasiPrimo);
};

const marcaCasiPrimos = () => {
  const td = document.querySelectorAll("td");

  td.forEach((item) => {
    if (casiPrimo(item.textContent)){
      item.classList.add(".amarillo");
    }
  });

};

const botonGenerador = document.querySelector('[name="botonGenerador"]');

botonGenerador.addEventListener("click", creaTabla);

botonCasiPrimo.addEventListener("click", marcaCasiPrimos);
