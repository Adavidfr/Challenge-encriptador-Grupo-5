let botonEncriptar = document.querySelector(".encriptar");
let botonDesencriptar = document.querySelector(".desencriptar");
let dibujo =  document.querySelector(".dibujo");
let mensajeNoEncontrado = document.querySelector(".mensajeNoEncontrado");
let contenedorParrafo = document.querySelector(".contenedorParrafo");
let botonCopiar = document.querySelector(".copiar");
let resultado = document.querySelector(".texto-resultado");
let botonLimpiar = document.querySelector(".limpiar");
let cajaTexto1 = document.querySelector(".text-area"); 

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonLimpiar.onclick = limpiar;
botonCopiar.onclick = copiar;

function encriptar(){
    ocultarCuadro2();
   resultado.textContent = encriptarTexto(recuperarTexto());
   document.getElementById(".copiar").style.display = "show"
   document.getElementById(".copiar").style.display = "inherit"
}

function desencriptar(){
    ocultarCuadro2();
   resultado.textContent = desencriptarTexto(recuperarTexto());
}

function recuperarTexto(){
    return cajaTexto1.value;
}

function ocultarCuadro2(){
    dibujo.classList.add("ocultar");
    mensajeNoEncontrado.classList.add("ocultar");
    contenedorParrafo.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    let texto = mensaje;
    let textoFinal ="";
    
    for (let i = 0; i < texto.length; i++) {
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje){
    let texto = mensaje;
    let textoFinal ="";
    
    for (let i = 0; i < texto.length; i++) {
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i + 1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i + 4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i + 3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i + 3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i + 3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

function copiar() {
    navigator.clipboard.writeText(resultado.textContent);
    botonCopiar.textContent = 'Copiado';
    setTimeout(() => {
      botonCopiar.textContent = 'Copiar';
    }, 2000);
}


function limpiar(){
    cajaTexto1.value = '';
    resultado.textContent = '';
    dibujo.classList.remove("ocultar");
    mensajeNoEncontrado.classList.remove("ocultar");
    contenedorParrafo.classList.remove("ocultar");
}

function minusculas(event){
    if(window.event){
        tecla = event.keyCode;
    }
    else{
        tecla = event.which;
    }

    if((tecla > 47 && tecla < 58) || tecla == 8 || tecla == 13 || tecla == 32 || (tecla > 96 && tecla <123)){
        return true;
    }
    else{
        alert("Ingresar solo letras minúsculas y sin acento")
        return false
    }
}


  