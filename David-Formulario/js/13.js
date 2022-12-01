let primerSelect = document.querySelector(".primero");
 
primerSelect.addEventListener("change", function (e) {
 
    let segundoSelect = document.querySelector(".segundo");
 
    //Eliminamos options
    let todasOptions = document.querySelectorAll(".nuevo");
 
    todasOptions.forEach(element => {
        element.remove();
    });
    //Creamos los options y le añadimos la clase nuevo
    let opcion1 = document.createElement("option");
    opcion1.setAttribute("class", "nuevo");
    let opcion2 = document.createElement("option");
    opcion2.setAttribute("class", "nuevo");
    let opcion3 = document.createElement("option");
    opcion3.setAttribute("class", "nuevo");
 
    let sel = primerSelect.selectedIndex;
 
  if (primerSelect.options[sel].value=="Alicante"){
    opcion1.text = "Alicante Capital";
    opcion2.text = "Elche";
    opcion3.text = "Orihuela";
    segundoSelect.appendChild(opcion1);
    segundoSelect.appendChild(opcion2);
    segundoSelect.appendChild(opcion3);
  }else if (primerSelect.options[sel].value=="Castellón"){
    opcion1.text = "Castellón Capital";
    opcion2.text = "Oropesa";
    opcion3.text = "Vinaroz";
    segundoSelect.appendChild(opcion1);
    segundoSelect.appendChild(opcion2);
    segundoSelect.appendChild(opcion3);
  }else{
    opcion1.text = "Valencia Capital";
    opcion2.text = "Torrent";
    opcion3.text = "Mislata";
    opcion3.setAttribute("selected", "true");
    segundoSelect.appendChild(opcion1);
    segundoSelect.appendChild(opcion2);
    segundoSelect.appendChild(opcion3);
  }
});
 
let enviarFormulario = document.querySelector(".formulario");
 
enviarFormulario.addEventListener("submit", function(e){
 
  let select1 = document.querySelector(".primero");
  let select2 = document.querySelector(".segundo");
 
  let sel1 = primerSelect.selectedIndex;
  let sel2 = primerSelect.selectedIndex;
 
if (select1.options[sel1].value=="Ninguno seleccionado" || select2.options[sel2].value=="Ninguno seleccionado"){
  e.preventDefault();
  alert("Debe seleccionar los dos campos para poder enviar");
}
})
