const nombreApellidos = document.querySelector(".nombreApellidos");

const correo = document.querySelector(".correo");

const fechaNacimiento = document.querySelector(".fecha");

const sexo = document.querySelector('input[name="sexo"]');

const aficiones = document.querySelector(".aficiones");

const ciudad = document.querySelector(".ciudadesLista");

const mensaje = document.querySelector(".textarea");

const formulario = document.querySelector(".contenido-formulario");

const validarNombre = () => {
  const nombreVacio = nombreApellidos.value.split(" ");

  const exprUsuario = /[0-9]/;

  if (nombreVacio.includes("") || exprUsuario.test(nombreApellidos.value)) {
    parrafoNombre.textContent = "Nombre y/o apellidos no válido";

    parrafoNombre.classList.add("rojo");
  } else {
    parrafoNombre.textContent = "";

    /* 
    setTimeout(() => {
    parrafoNombre.remove();
    }, 5000); 
        
        Hago esto para que aparezca el mensaje durante 5 segundos y después desaparece, pero una vez que ha desaparecido,
        no vuelve a crearme el mensaje 
    
    */
  }
};

const parrafoNombre = document.createElement("p");

nombreApellidos.insertAdjacentElement("afterend", parrafoNombre);

nombreApellidos.addEventListener("blur", validarNombre);

const validarFecha = () => {
  const fechaVacia = fechaNacimiento.value.split(" ");

  if (fechaVacia.includes("")) {
    parrafoFecha.textContent = "Fecha no válida";

    parrafoFecha.classList.add("rojo");
  } else {
    parrafoFecha.textContent = "";

  }
};

const parrafoFecha = document.createElement("p");

fechaNacimiento.insertAdjacentElement("afterend", parrafoFecha);

fechaNacimiento.addEventListener("blur", validarFecha);

const validarCorreo = () => {
  const CorreoVacio = correo.value.split(" ");

  if (CorreoVacio.includes("")) {
    parrafoCorreo.textContent = "Correo no válido";

    parrafoCorreo.classList.add("rojo");
  } else {
    parrafoCorreo.textContent = "";
  }
};

const parrafoCorreo = document.createElement("p");

correo.insertAdjacentElement("afterend", parrafoCorreo);

correo.addEventListener("blur", validarCorreo);

const validarSexo = () => {
  const SexoVacio = sexo.value.split(" ");

  if (SexoVacio.includes("")) {
    parrafoSexo.textContent = "Sexo no válido";

    parrafoSexo.classList.add("rojo");
  } else {
    parrafoSexo.textContent = "";
  }
};

    const parrafoSexo = document.createElement("p");

    sexo.insertAdjacentElement("afterend", parrafoSexo);

    sexo.addEventListener("blur", validarSexo);

const validarMensaje = () => {
  const MensajeVacio = mensaje.value.split(" ");

  if (MensajeVacio.includes("")) {
    parrafoMensaje.textContent = "Mensaje no válido";

    parrafoMensaje.classList.add("rojo");
  } else {
        parrafoMensaje.textContent = "";
    
  }
};

    const parrafoMensaje = document.createElement("p");

    mensaje.insertAdjacentElement("afterend", parrafoMensaje);

    mensaje.addEventListener("blur", validarMensaje);

const validarCiudad = () => {
  const CiudadVacia = ciudad.value.split(" ");

  if (CiudadVacia.includes("")) {
    parrafoCiudad.textContent = "La ciudad no es válida";

    parrafoCiudad.classList.add("rojo");
  } else{
    parrafoCiudad.textContent = "";
  }
};

    const parrafoCiudad = document.createElement("p");

    ciudad.insertAdjacentElement("afterend", parrafoCiudad);

    ciudad.addEventListener("blur", validarCiudad);


const validarFormulario = () =>{
    if(validarNombre==false || validarCiudad || validarCorreo || validarFecha || validarMensaje || validarSexo){
        console.log("Esta mal");    
    };
}    

formulario.addEventListener("submit", validarFormulario);    