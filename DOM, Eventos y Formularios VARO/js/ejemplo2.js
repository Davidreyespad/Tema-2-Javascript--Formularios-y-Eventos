//const nombre =document.querySelector('[name="nombre"]');
//const apellido =document.querySelector('[name="apellido"]');
const boton =document.querySelector('[name="boton"]');



const mensajePers=()=>{
    alert(`Hola ${nombre.value} ${apellido.value}`);
}

//boton.addEventListener("click", mensajePers);
const accionNueva =()=>{
    const nombre =document.querySelector('[name="nombre"]');
    const apellido =document.querySelector('[name="apellido"]');
    const nuevoLabel= document.createElement('p');
    nuevoLabel.textContent= `Hola ${nombre.value} ${apellido.value}`;
    document.body.appendChild(nuevoLabel);
}


//Añadimos el listener
boton.addEventListener("click", accionNueva);