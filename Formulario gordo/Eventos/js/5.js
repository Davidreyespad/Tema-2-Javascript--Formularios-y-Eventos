/*5. Realiza un programa que mediante eventos y el uso del objeto event, te muestre en todo
momento la posición actual del ratón en pantalla.
Para mostrarlo modificaremos de forma dinámica un elemento HTML (Ejemplo, un <p>) que
nos muestre la posición actual del ratón.*/
 
let parrafo = document.querySelector('#posicionRaton');
 
const posicionRaton = (event) => {
    let x = event.clientX;
    let y = event.clientY;
    parrafo.innerHTML= ("coordenada X: " + x + "<br> coordenada Y: " + y);
}
 
document.addEventListener('mousemove', posicionRaton);