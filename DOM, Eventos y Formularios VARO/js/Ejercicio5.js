let parrafo = document.querySelector('#posicionRaton');
 
const posicionRaton = (event) => {
    let x = event.clientX;
    let y = event.clientY;
    parrafo.innerHTML= ("coordenada X: " + x + "<br> coordenada Y: " + y);
}

document.addEventListener('mousemove', posicionRaton);