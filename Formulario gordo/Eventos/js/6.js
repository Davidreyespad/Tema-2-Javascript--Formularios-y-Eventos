"use strict";
/* 6. Realiza un programa con dos botones “Comenzar Saludos” y “Parar Saludos”. Al hacer
click en “Comenzar Saludos”, lance un setInterval que cada 5 segundos muestra un
“alert” con “Hola”. El botón “Parar Saludos” parará esa secuencia. */

const saludos = () => {
    alert("Hola");
}

let intervaloSaludo = setInterval(saludos, 2000);

const mensajeSaludo = () =>{
    intervaloSaludo
}

const pararSaludo = () =>{
    clearInterval(intervaloSaludo);
}

const comenzarSaludos = document.querySelector("#comenzar");
const pararSaludos = document.querySelector("#parar");

comenzarSaludos.addEventListener("click", mensajeSaludo);
pararSaludos.addEventListener("click", pararSaludo);