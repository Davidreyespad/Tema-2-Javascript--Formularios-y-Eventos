const comprobarDni = () =>{
    let numero = dni.value.substring(0,8);
   
    let letra = dni.value.charAt(8);
   
    let arrayletras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];
    let resto = parseInt(numero)%23;
 
    if (letra.toUpperCase() != arrayletras[resto] ){
        return false;
    }else{
        return true
    }
}
 
const eventoDni = () =>{
    if (!comprobarDni(dni.value)){
        alert("Dni introducido no es válido");
    }
}
 
//Seleccionamos el campo dni
const dni = document.querySelector("#dni");
//Añadimos eventListener
dni.addEventListener("blur",eventoDni);
//Seleccionamos el formulario
const formulario = document.querySelector(".formulario");
 
//Añadimos eventListenner al formulario al darle a enviar
formulario.addEventListener("submit", function(e){
   
    if (!comprobarDni(dni.value)){
        e.preventDefault();
        alert("No ha introducido un dni correcto, el formulario no se ha enviado");
    }else{
        alert("El formulario se ha enviado correctamente");
    }
})
