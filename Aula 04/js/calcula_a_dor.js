var inputN1 = document.getElementById("n1")
var inputN2 = document.getElementById("n2")

var labelResultado = document.getElementById ("resuldado")

function somar (){
    var n1 = parseFloat(inputN1.value)
    var n2 = parseFloat(inputN2.value)
    var resultado = n1 + n2

    labelResultado.innerHTML = resultado
    console.log(resultado)

}

function sub (){
    var n1 = parseFloat(inputN1.value)
    var n2 = parseFloat(inputN2.value)
    var resultado = n1 - n2

    labelResultado.innerHTML = resultado
    console.log(resultado)

}
function divi (){
    var n1 = parseFloat(inputN1.value)
    var n2 = parseFloat(inputN2.value)
    var resultado = n1 / n2

    labelResultado.innerHTML = resultado
    console.log(resultado)

}
function multi (){
    var n1 = parseFloat(inputN1.value)
    var n2 = parseFloat(inputN2.value)
    var resultado = n1 * n2

    labelResultado.innerHTML = resultado
    console.log(resultado)

}