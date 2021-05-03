var num1;
var num2;
var final;

function suma() {
    var num1Element = document.getElementById("num1");
    var num2Element = document.getElementById("num2");
    num1 = num1Element.value;
    num2 = num2Element.value;
    console.log(num1);
    console.log(num2);

    final = parseInt(num1) + parseInt(num2);
    console.log(final);

    var finalElement = document.getElementById("resultado");
    finalElement.innerHTML = 'Resultado de la Suma = ' + final;
}

function resta() {
    var num1Element = document.getElementById("num1");
    var num2Element = document.getElementById("num2");
    num1 = num1Element.value;
    num2 = num2Element.value;
    console.log(num1);
    console.log(num2);

    final = parseInt(num1) - parseInt(num2);
    console.log(final);

    var finalElement = document.getElementById("resultado");
    finalElement.innerHTML = 'Resultado de la Resta = ' + final;
}

function multiplicacion() {
    var num1Element = document.getElementById("num1");
    var num2Element = document.getElementById("num2");
    num1 = num1Element.value;
    num2 = num2Element.value;
    console.log(num1);
    console.log(num2);

    final = num1 * num2;
    console.log(final);

    var finalElement = document.getElementById("resultado");
    finalElement.innerHTML = 'Resultado de la Multiplicacion = ' + final;
}

function division() {
    var num1Element = document.getElementById("num1");
    var num2Element = document.getElementById("num2");
    num1 = num1Element.value;
    num2 = num2Element.value;
    console.log(num1);
    console.log(num2);

    final = num1 / num2;
    console.log(final);

    var finalElement = document.getElementById("resultado");
    finalElement.innerHTML = 'Resultado de la Division = ' + final;
}

function raizCuadrada() {
    var num1Element = document.getElementById("num3");
    num1 = num1Element.value;
    console.log(num1);

    final = Math.sqrt(num1);
    console.log(final);

    var finalElement = document.getElementById("resultado");
    finalElement.innerHTML = 'Resultado de la Raiz Cuadrada = ' + final;
}

function cuadrado() {
    var num1Element = document.getElementById("num3");
    num1 = num1Element.value;
    console.log(num1);

    final = num1 * num1;
    console.log(final);

    var finalElement = document.getElementById("resultado");
    finalElement.innerHTML = 'Resultado del Cuadrado = ' + final;
}

function potencia() {
    var num1Element = document.getElementById("num1");
    var num2Element = document.getElementById("num2");
    num1 = num1Element.value;
    num2 = num2Element.value;
    console.log(num1);
    console.log(num2);

    final = Math.pow(num1, num2);
    console.log(final);

    var finalElement = document.getElementById("resultado");
    finalElement.innerHTML = 'Resultado de la Potencia = ' + final;
}