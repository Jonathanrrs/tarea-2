// Calcular área de un triangulo
var btnCalcularArea = document.querySelector('#calcularArea');
btnCalcularArea.addEventListener('click', area);


function area() {
    var inputNumero1 = document.querySelector('#numero1');
    var inputNumero2 = document.querySelector('#numero2');

    var resultado = (Number(inputNumero1.value) * Number(inputNumero2.value)) / 2;

    var inputResultado = document.querySelector('#resultado');
    inputResultado.value = resultado;
}