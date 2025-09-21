//noprotection
/*leiam numeros da tela até que o usuário cancele
e mostre a soma, a quantidade e a média deles
dica: confirm e while
*/
let confirmacao = false
let somaNumero = 0
let quantidade = 0

while (confirmacao){
   let numero = Number (prompt ("Digite um número"))
   if (numero %2 ===0){
     somaNumero += numero
     quantidade ++     
   }
   confirmacao =  confirm("Deseja continuar")
}
let media = somaNumero / quantidade

console.log ("Soma", somaNumero)
console.log ("Quantidade", quantidade)
console.log ("Média", media)

