let formulario = document.getElementById("form");

let usuario = document.getElementById("username");

let correo = document.getElementById("email");

let contra = document.getElementById("password");

let enviar = document.getElementById("submit");

enviar.setAttribute("disabled", "");

const validarNombre = () => {
  const arrayUsuario = usuario.value.split("");

  const exprUsuario = /[ ?.;,! ]/;

  if (arrayUsuario.includes(" ") || exprUsuario.test(usuario.value)) {
    parrafoUsuario.textContent = "Usuario no válido";

    parrafoUsuario.style.color = "red";
  } else {
    parrafoUsuario.textContent = "Usuario válido";

    parrafoUsuario.style.color = "green";
  }
};

            const parrafoUsuario = document.createElement("p");

            usuario.insertAdjacentElement("afterend", parrafoUsuario);

            usuario.addEventListener("blur", validarNombre);

const validarEmail = (correo) => {
  let arrayCorreos = ["hotmail.com", "gmail.com", "yahoo.com"];

  const expEmail =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  if (!expEmail.test(correo)) return false;

  let servidor = correo.split("@");

  if (arrayCorreos.includes(servidor[1])) return false;
        
  return true;

};

const parrafoEmail = document.createElement("p");

correo.insertAdjacentElement("afterend", parrafoEmail);

            correo.addEventListener("blur", (evento)=>{
            
                if(validarEmail(correo.value)){
                  parrafoEmail.textContent = "Correo válido";

                  parrafoEmail.style.color = "green";
                }else{
                    evento.preventDefault();
                    parrafoEmail.textContent = "Correo no válido";

                    parrafoEmail.style.color = "red";
                }
            });
            