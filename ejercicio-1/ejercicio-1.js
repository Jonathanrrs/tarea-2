// Calcular suma
var btnCalcularSuma = document.querySelector('#calcularSuma');
btnCalcularSuma.addEventListener('click', sumar);

function sumar() {
    var inputNumero1 = document.querySelector('#numero1');
    var inputNumero2 = document.querySelector('#numero2');

    var resultado = Number(inputNumero1.value) + Number(inputNumero2.value);

    var inputResultado = document.querySelector('#resultado');
    inputResultado.value = resultado;
}

var btnCalcularResta = document.querySelector('#calcularResta');
btnCalcularResta.addEventListener('click', resta);
// Calcular resta
function resta() {
    var inputNumero1 = document.querySelector('#numero1');
    var inputNumero2 = document.querySelector('#numero2');

    var resultado = Number(inputNumero1.value) - Number(inputNumero2.value);

    var inputResultado = document.querySelector('#resultado');
    inputResultado.value = resultado;
}
// Calcular multiplicacion
var btnCalcularMpc = document.querySelector('#calcularMpc');
btnCalcularMpc.addEventListener('click', mpc);

function mpc() {
    var inputNumero1 = document.querySelector('#numero1');
    var inputNumero2 = document.querySelector('#numero2');

    var resultado = Number(inputNumero1.value) * Number(inputNumero2.value);

    var inputResultado = document.querySelector('#resultado');
    inputResultado.value = resultado;
}
//Calcular division
var btnCalcularDvs = document.querySelector('#calcularDvs');
btnCalcularDvs.addEventListener('click', Dvs);

function Dvs() {
    var inputNumero1 = document.querySelector('#numero1');
    var inputNumero2 = document.querySelector('#numero2');

    var resultado = Number(inputNumero1.value) / Number(inputNumero2.value);

    var inputResultado = document.querySelector('#resultado');
    inputResultado.value = resultado;
}
// Calcular Residuo
var btnCalcularRsd = document.querySelector('#calcularRsd');
btnCalcularRsd.addEventListener('click', Rsd);

function Rsd() {
    var inputNumero1 = document.querySelector('#numero1');
    var inputNumero2 = document.querySelector('#numero2');

    var resultado = Number(inputNumero1.value) % Number(inputNumero2.value);

    var inputResultado = document.querySelector('#resultado');
    inputResultado.value = resultado;
}