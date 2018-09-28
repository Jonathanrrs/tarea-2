// Calcular de grados centigrados a grados fahrenheit
var btnCalcularGrados = document.querySelector('#calcularGrados');
btnCalcularGrados.addEventListener('click', grados);


function grados() {
    var inputNumero1 = document.querySelector('#numero1');

    var resultado = (Number(inputNumero1.value) * 1.8) + 32;

    var inputResultado = document.querySelector('#resultado');
    inputResultado.value = resultado;
}