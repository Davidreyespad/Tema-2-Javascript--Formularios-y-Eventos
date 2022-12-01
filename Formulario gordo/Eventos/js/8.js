"use strict";
/* Realiza un programa que al hacer doble click en la pantalla del navegador, cambie el
fondo a un color aleatorio. */

const cambiaFondo = () => {

        let body = document.querySelector("#body");

        let aleatorio1= Math.floor(Math.random() * 255);
        let aleatorio2= Math.floor(Math.random() * 255);
        let aleatorio3= Math.floor(Math.random() * 255);
        
        body.style.backgroundColor =`rgba(${aleatorio1}, ${aleatorio2}, ${aleatorio3})`;
}
