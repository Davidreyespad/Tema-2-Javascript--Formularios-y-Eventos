//En caso de pulsar este boton, mostrará el valor de su atributo name en un alert
const mostrar = function(){
    alert(this.getAttribute("name"));
}

const generaBotones=()=>{
    //Seleccionamos el botón y el div donde van a aparecer los botones
    const div = document.querySelector('[name=espacioBotones]');
    const nuevoBoton = document.createElement("button");

    //Generamos un numero aleatorio
    let numAleat=Math.floor(Math.random()*100);

    //Le asignamos el contenido al numero aleatorio
    nuevoBoton.textContent=`${numAleat}`;
    //Le asignamos un atributo con el numero aleatorio
    nuevoBoton.setAttribute("name",`${numAleat}`);
    nuevoBoton.addEventListener("click", mostrar)
    //Insertamos el elemento en el div
    div.insertAdjacentElement("beforeend", nuevoBoton); 

}

const botonOriginal= document.querySelector('[name=botonOriginal]');
botonOriginal.addEventListener("click", generaBotones);