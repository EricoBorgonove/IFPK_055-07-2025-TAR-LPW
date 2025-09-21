const num1 = document.getElementById("input-num1")
const num2 = document.getElementById("input-num2")
let result = document.getElementById("result")

function dizerOla (){
    alert("Olá mundo")
}
function dizerTchau(){
    alert("Adeus mundo cruel...")
}

function somar(){
    const soma = Number(num1.value) + Number(num2.value)
    result.innerHTML= soma
}
function subtrair(){
    const subtracao = Number(num1.value) - Number(num2.value)
    result.innerHTML= subtracao
}