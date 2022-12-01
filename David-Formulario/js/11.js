let formulario = document.querySelector(".formularioEmail");

const emailVerdadero = (email) => {

    let listaServidores=["terra.es","google.com","marca.es","yahoo.es", "iesmartinez.es", "gmail.com"];

    const exprEmail = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i;


    if (!exprEmail.test(email)) return false;

    let servidor = email.split("@");

    if(listaServidores.includes(servidor[1])) return false;
        
    return true;
};

formulario.addEventListener("submit", (evento)=>{

    const input =document.querySelector("#email");

    if(emailVerdadero(input.value)){
        alert("Está incluido");
    }else{
        evento.preventDefault();
        alert("No está incluido");
    }
})

