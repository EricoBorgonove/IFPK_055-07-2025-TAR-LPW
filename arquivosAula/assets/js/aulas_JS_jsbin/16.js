// noprotect
for (let i =1 ; i<=5; i++){
  let nota1 = Number (prompt ("Digite a 1 nota"))
  let nota2 = Number (prompt ("Digite a 2 nota"))
  let nota3 = Number (prompt ("Digite a 3 nota"))

  let media = (nota1+nota2+nota3)/3


  if (media>=0 && media <5){
    console.log ("reprovado")
  }else if (media >=5 && media <7){
    console.log ("em recuperação")
  }else if (media>=7 && media <=10){
    console.log ("aprovado")
  }else{
    console.log ("médias inválidas")
  }
}





//65462