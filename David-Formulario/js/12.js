/*12. Realiza un formulario que tenga dos campos de texto. Deberá validar antes de enviarse
si uno de los campos es un anagrama del otro y enviarse solo si lo es. Se ignorarán
mayúsculas, minúsculas y espacios.
 
Para más información sobre que es un anagrama https://es.wikipedia.org/wiki/Anagrama*/
 
//obtenemos el boton
let boton = document.getElementById('boton');
 
//funcion que valida si las palabras son anagrama
const validarAnagrama = () =>{
 
    let esAnagrama=false;
    //obtenemos las dos palabras del formulario
    let primeraPalabra = document.getElementById('palabra1');
    let segundaPalabra = document.getElementById('palabra2');
 
    let primeraPalabraDivida = primeraPalabra.value.split('');
    let segundaPalabraDivida = segundaPalabra.value.split('');
 
    if(primeraPalabraDivida.length === segundaPalabraDivida.length){
        primeraPalabraDivida.forEach(element => {
            if(segundaPalabraDivida.includes(element)){
                esAnagrama=true;
            }else{
                return false;
            }
        });
    }
    return esAnagrama;
}
 
const mensaje = (esAnagrama) =>{
    if(esAnagrama){
        alert('Es Anagrama');
    }
    else{
        alert('No es anagrama');
    }
}
 
boton.addEventListener('click',function(){
    mensaje(validarAnagrama());
})
