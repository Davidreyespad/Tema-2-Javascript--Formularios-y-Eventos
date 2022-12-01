let papel = document.querySelector(".papel img");
let vacia = document.querySelector(".vacia img");

papel.draggable = true;

//Esto se tiene que poner siempre
vacia.addEventListener("dragover", (e) => {
  e.preventDefault(); //para que ejecute el drop
});

//Cuando se suelta...
vacia.addEventListener("drop", (e) => {

    //Cambio la imagen de papelera llena a papelera vacía
    vacia.setAttribute("src", "img/llena.jpg"); 

    //Hago invisible el papel
    papel.style = "visibility:hidden;";
});

