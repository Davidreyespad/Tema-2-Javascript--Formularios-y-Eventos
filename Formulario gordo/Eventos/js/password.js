

const input = document.querySelector('[name="password"]');

input.addEventListener("keypress", (event) => console.log(String.fromCharCode(event.keyCode)));
