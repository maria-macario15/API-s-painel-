 var apeso = document.getElementById("peso")
 var aaltura = document.getElementById("altura")
    
 var aresuldado = document.getElementById('resuldado') 

 function calculo() {
    var npeso = parseFloat(altura.value)
    var naltura = parseFloat(peso.value)
   
    var imc = (npeso / (naltura * naltura))
   
    if (imc < 18.5) {
        imc = 'Abaixo do peso ideal'
    }else if (imc < 25) {
        imc =  'Peso ideal'
    }else if (imc < 30) {
        imc = 'Sobrepeso'
    }else if (imc < 35) {
        imc = 'Obesidade grau I'
    }else if (imc < 40) {
        imc ='Obesidade grau II'
    }else {
        imc ='Obesidade grau III'
}
 
aresuldado.innerHTML = imc
    
console.log (imc)
  
}
