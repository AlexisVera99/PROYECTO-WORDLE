let intentos = 6;
let diccionario = [ "PERRO", "SILLA" , "BALAS", "MARZO" ];
let palabra = obtenerPalabra(diccionario);
let button = document.getElementById("guess-button");
    
button.addEventListener("click", intentar);

function obtenerPalabra(diccionario){
    let max = diccionario.length - 1;
    let min = 0;
    let i = Math.floor(Math.random() *(max - min + 1)) + min;
    palabra = diccionario[i];
    return;
}

function intentar(){
    const INTENTO = leerIntento();
    if(INTENTO === palabra){
        terminar("<h1>GANASTE</h1>");
        return;
    }
    const GRID = document.getElementById("grid");
    const ROW = document.createElement("div");
    ROW.className = "row";

    for (let i in INTENTO){
    const SPAN = document.createElement("span");
    SPAN.className = "letter"; 
    SPAN.innerHTML = INTENTO[i];
    let color;
    let letra = INTENTO[i];
    if (letra == palabra[i]){
        color = "#79b851";
    } else if (palabra.includes(letra)){
        color = "#f3c237";
    } else {
        color = "#a4aec4";
    }
    SPAN.style.backgroundColor = color;
    ROW.appendChild(SPAN)
}
intentos--;   
    if (intentos == 0){
    terminar ("<h1>PERDISTE</h1>");
}
    GRID.appendChild(ROW)

}
function terminar(mensaje){
    let input = document.getElementById("guess-input");
    input.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById("guesses");
    contenedor.innerHTML = mensaje ;
} 

