//Seleccionamos el elemento cuyo atributo name sea boton
const boton = document.querySelector('[name="boton"]');
//Seleccionamos el elemento cuyo atributo name sea listaDes
const listaDes = document.querySelector('[name="listaDes"]');

//Funcion que añade elemento li con numero aleatorio al ul
const generaAleat =()=>{
    //Creamos el elemento li
    const li= document.createElement('li');

    //Generamos el número aleatorio
    let numAleat = Math.floor(Math.random()*100);

    //Le damos un color aleatorio por cada numero generado
    li.setAttribute("style", `color:rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`);
    
    //Le añadimos el numero aleatorio generado al contenido del elemento li
    li.textContent= `${numAleat}`;

    //Insertamos el elemento li a la lista desordenada
    listaDes.insertAdjacentElement("beforeend", li);
}

//Añadimos el eventListener
boton.addEventListener("click", generaAleat);
