# Lista de Exercícios sobre  If/else em Javascript



>Todos os exercícios estão com as respostas, porém, eu gostaria de incentivá-lo a tentar resolvê-los por conta própria antes de conferir as respostas. Reflita, pesquise e, se necessário, pergunte para alguém para mim ou no grupo, antes de olhar a resposta. Afinal, o processo de aprendizagem é muito mais valioso quando você se desafia a resolver os exercícios e compreende como chegar às respostas. Não sabote seus estudos, tente ao máximo e se esforce para aprender. Estamos aqui para ajudá-lo sempre que precisar.

---
>Então, para visualizar as respostas dos exercícios, basta clicar na palavra "resposta". Espero que esses exercícios sejam úteis para o seu aprendizado em JavaScript.

1. ### Escreva um programa que verifica se um número é positivo, negativo ou zero.

<details> 
  <summary>resposta</summary>

````js
var num = 5;

if (num > 0) {
  console.log("O número é positivo");
} else if (num < 0) {
  console.log("O número é negativo");
} else {
  console.log("O número é zero");
}

````
</details>


2. ### Escreva um programa que verifica se um número é par ou ímpar.

<details> 
  <summary>resposta</summary>

````js
var num = 4;

if (num % 2 === 0) {
  console.log("O número é par");
} else {
  console.log("O número é ímpar");
}

````
</details>

3.  ### Escreva um programa que verifica se uma pessoa tem idade suficiente para votar (18 anos ou mais).

<details> 
  <summary>resposta</summary>

````js
var idade = 20;

if (idade >= 18) {
  console.log("Você tem idade suficiente para votar");
} else {
  console.log("Você ainda não tem idade suficiente para votar");
}
````
</details>

4. ### Escreva um programa que verifica se uma pessoa pode dirigir (idade maior ou igual a 18 anos e habilitação válida).

<details> 
  <summary>resposta</summary>

````js
var idade = 20;
var cnh = true;

if (idade >= 18 && cnh) {
  console.log("Você pode dirigir");
} else {
  console.log("Você não pode dirigir");
}
````
</details>

5. ### Escreva um programa que verifica se um número é divisível por 3 e 5.

<details> 
  <summary>resposta</summary>

````js
var num = 15;

if (num % 3 === 0 && num % 5 === 0) {
  console.log("O número é divisível por 3 e 5");
} else {
  console.log("O número não é divisível por 3 e 5");
}
````
</details>

6. ### Escreva um programa que verifica se uma pessoa pode se aposentar (idade maior ou igual a 65 anos ou tempo de contribuição maior ou igual a 30 anos).

<details> 
  <summary>resposta</summary>

````js
var idade = 70;
var contricuicao = 35;

if (idade >= 65 || contribuicao >= 30) {
  console.log("Você pode se aposentar");
} else {
  console.log("Você ainda não pode se aposentar");
}
````
</details>

7. ### Escreva um programa que verifica se uma pessoa pode obter um empréstimo (renda mensal maior ou igual a 1000 e não possui nenhuma dívida em aberto).

<details> 
  <summary>resposta</summary>

````js
var renda = 1200;
var debito = false;

if (renda >= 1000 && !debito) {
  console.log("Você pode obter um empréstimo");
} else {
  console.log("Você não pode obter um empréstimo");
}
````
</details>

8. ### Escreva um programa que verifica se uma pessoa é adolescente (idade entre 13 e 19 anos).

<details> 
  <summary>resposta</summary>

````js
var idade = 15;

if (idade >= 13 && idade <= 19) {
  console.log("Você é um adolescente");
} else {
  console.log("Você não é um adolescente");
}
````
</details>


9. ### Escreva um programa que verifica se um ano é bissexto (divisível por 4 e não divisível por 100 ou divisível por 400).

<details> 
  <summary>Clique para visualizar a resposta</summary>

````js

````
</details>


10. ### Escreva um programa que verifica se uma pessoa pode entrar em uma montanha-russa (altura maior ou igual a 1,5 metros e idade maior ou igual a 12 anos).

<details> 
  <summary>resposta</summary>

````js
var altura = 1.6;
var idade = 15;

if (altura >= 1.5 && idade >= 12) {
  console.log("Você pode entrar na montanha-russa");
} else {
  console.log("Você não pode entrar na montanha-russa");
}
````
</details>

11. ### ***DESAFIO*** Escreva um programa que verifica se um número é um quadrado perfeito.


<details> 
  <summary>resposta</summary>

````js
var num = 25;
var sqrt = Math.sqrt(num);

if (sqrt % 1 === 0) {
  console.log("O número é um quadrado perfeito");
} else {
  console.log("O número não é um quadrado perfeito");
}
````
</details>

12. ### Escreva um programa que verifica se uma pessoa tem acesso à área VIP (nome na lista e idade maior ou igual a 21 anos).

<details> 
  <summary>resposta</summary>

````js
var nome = "João";
var idade = 25;
var estaNaLista = true;

if (idade >= 21 && estaNaLista) {
  console.log("Você tem acesso à área VIP");
} else {
  console.log("Você não tem acesso à área VIP");
}
````
</details>



13. ### Escreva um programa que verifica se um número é par e maior que 10.

<details> 
  <summary>resposta</summary>

````js
var num = 12;

if (num % 2 === 0 && num > 10) {
  console.log("O número é par e maior que 10");
} else {
  console.log("O número não é par e maior que 10");
}
````
</details>















