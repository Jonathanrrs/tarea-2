// Interfaz
//Incrementar
var btnIncrementar= document.querySelector('#incrementar');
btnIncrementar.addEventListener('click', incremento);

function incremento() {
    var inputResultado = document.querySelector('#resultado');
    
    var inc = Number(inputResultado.value)  + 1;

    var inputResultado = document.querySelector('#resultado');
    inputResultado.value = inc;
}

//Decrementar
var btnDecrementar= document.querySelector('#decrementar');
btnDecrementar.addEventListener('click', decremento);

function decremento() {
    var inputResultado = document.querySelector('#resultado');
    
    var inc = Number(inputResultado.value)  - 1;

    var inputResultado = document.querySelector('#resultado');
    inputResultado.value = inc;
}

