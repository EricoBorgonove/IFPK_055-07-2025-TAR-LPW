/*leiam 3 notas de um aluno, calculem a media e digam se está 
aprovado (>=7), reprovado (<5) ou em recuperação*/

/*let nota1 = Number (prompt ("Digite a 1 nota"))
let nota2 = Number (prompt ("Digite a 2 nota"))
let nota3 = Number (prompt ("Digite a 3 nota"))

let media = (nota1+nota2+nota3)/3*/
const media = 44

if (media>=0 && media <5){
  console.log ("reprovado")
}else if (media >=5 && media <7){
  console.log ("em recuperação")
}else if (media>=7 && media <=10){
  console.log ("aprovado")
}else{
  console.log ("médias inválidas")
}