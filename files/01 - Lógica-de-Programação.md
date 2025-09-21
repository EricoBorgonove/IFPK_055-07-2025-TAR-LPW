Sumário
===================
- [Introdução](#introdução)
- [Lógica de programação](#lógica-de-programação)
  - [Sintaxe](#sintaxe)
  - [Semântica](#semântica)
- [Ferramentas para Desenvolvedores do Google Chrome](#ferramentas-para-desenvolvedores-do-google-chrome)
  - [Como acessar as Ferramentas para Desenvolvedores](#como-acessar-as-ferramentas-para-desenvolvedores)
- [Tipos de dados básicos](#tipos-de-dados-básicos)
  - [Operadores](#operadores)
    - [Operadores aritméticos](#operadores-aritméticos)
  - [Operadores relacionais](#operadores-relacionais)
    - [Variável](#variável)
    - [Regras de Declaração de Variáveis](#regras-de-declaração-de-variáveis)
    - [Palavras reservadas](#palavras-reservadas)
    - [var x let](#var-x-let)
  - [Métodos de Entrada e Saída](#métodos-de-entrada-e-saída)
    - [alert()](#alert)
    - [prompt()](#prompt)
    - [confirm()](#confirm)
- [Estruturas de Decisão](#estruturas-de-decisão)
  - [Estrutura de seleção simples](#estrutura-de-seleção-simples)
  - [Estrutura de seleção composta](#Estrutura-de-seleção-composta)
  - [Estrutura de seleção homogênea](#Estrutura-de-seleção-homogênea)
  - [Estrutura de seleçao switch case](#Estrutura-de-seleçao-switch-case)
- [Estrutura de Repetição](#Estrutura-de-repetição)	
  - [Laço while](#Laço-while)
    - [Sintaxe while](#sintaxe-while)
  - [Laço do while](#Laço-do-while)
    - [Sintaxe do while](#sintaxe-do-while)
  - [Laço for](#Laço-for)
    - [Sintaxe for](#sintaxe-for)
  - [Classe Array](#Classe-Array) 
    - [Inserindo no final](#inserindo-no-final)
    - [Removendo do final](#removendo-do-final)
    - [Inserindo no início](#inserindo-no-início)
    - [Removendo do início](#Removendo-do-início)
    - [Removendo de qualquer posição](#Removendo-de-qualquer-posição)
    - [Inserindo ou removendo em qualquer posição](#Inserindo-ou-removendo-em-qualquer-posição)
  - [Método forEach](#método-forEach)
  - [Função](#função)
    - [Funções sem parâmetros](#Funções-sem-parâmetros)
    - [Funções com parâmetros](#Funções-com-parâmetros)
    - [Funções com parâmetros e com retorno](#Funções-com-parâmetros-e-com-retorno)
    - [Funções sem parâmetros e com retorno](#Funções-sem-parâmetros-e-com-retorno)
- [Exercícios](#exercícios)
   
# Introdução
Nesse momento você irá conhecer os conceitos básicos para o entendimento do funcionamento de uma linguagem de programação.

## Lógica de programação

Lógica de Programação é uma sequência de passos definidos para resolver um problema específico (Forbellone, 1993).
Quando você aplica uma lógica para resolver um problema é preciso de uma ferramenta para implementar essa lógica. Por isso existem as linguagens de programação.
Imagine como uma receita de bolo. 

![image](https://user-images.githubusercontent.com/84885503/128551144-17a43a9d-0df1-4ca4-bff6-280c1c41b785.png)


**Entrada**

Os **comandos** são os materiais e as medida para fazer o bolo
- 1 batedeira
- 1 bacia
- 1 forma redonda de 25 cm
- 1 colher de pau
- 1/2 xícara chá de açúcar
- 1 colher de sopa de manteiga
- 250 ml de leite
- 3 ovos

**Processamento**

O modo de fazer é a **sequência lógica** usada para o preparo do bolo, assim evitamos que ele fique, por exemplo, solado.

- Separe a clara e a gema do ovo, colocando a gema na bacia e, bata na batedeira até virar clara em neve, e reserve.
- Na bateira coloque o açúcar e manteiga, bate até ficar homogênea, acrescente aos poucos o leite, e depois o fermento em pó. Sempre batendo para a massa ficar homogênea.
- Unte a forma e acrescente a massa da batedeira.
- Leve ao forno em temperatura de 180º por 45 minutos.

**Saída**

- Retire o bolo do forno e sirva-se quando estiver frio.

Os **comandos** são a __sintaxe__ e a **sequência lógica** a __semântica__. E o que isso significa? Que você precisa conhecer a sintaxe para a construção da semântica. Veja os conceitos de sintaxe e semântica.

## Sintaxe

Um conjunto de regras formais, que especificam a composição de programas a partir de letras, dígitos, e outros símbolos. 
Por exemplo, regra de sintaxe pode especificar que cada parêntese aberto equivale a um parêntese fechado. 

## Semântica

Especifica o significado de qualquer programa, sintaticamente válido, escrito na linguagem, ou seja, um programa pode não ter nenhum tipo de erro de sintaxe, todavia pode estar com o raciocínio lógico errado, ou vice-versa.

# Ferramentas para Desenvolvedores do Google Chrome

Ferramentas para desenvolvedores do Google Chrome permitem analisar rapidamente o conteúdo/recursos de uma página da Web. 

## Como acessar as Ferramentas para Desenvolvedores
1.	Clique com o botão direito do mouse em uma página e selecione "Inspecionar elemento". O código HTML do elemento clicado será exibido;
2.	Use o atalho``F12``;
3.	Use o atalho ``Ctrl + Shift+ I``;
4.	Clique nos 3 pontos do lado direito que fica na barra de navegação + Mais Ferramentas + Ferramentas do desenvolvedor.

A Guia Console: detecta erros no código da página automaticamente, além de executar scripts para testes. Vamos conhecê-los:

# Tipos de dados básicos

Veremos os tipos de dados básicos, e também, como as variáveis utilizam esses tipos de dados.

## Operadores

Os operadores indicam ao compilador a necessidade de se fazer manipulações matemáticas ou lógicas. Os operadores fundamentais são:

### Operadores aritméticos

Os operadores aritméticos são símbolos utilizados para realizar as operações aritméticas elementares.

Expressão Função  Exemplo
````js
2 ** 3; //8 (exponenciação)
5 % 3; // 2 (Módulo ou resto da divisão inteira)
4 * 2; // 8 (Multiplicação)
15 / 7; // 7.5 (Divisão)
4 + 2; // 6 (Soma)
-4 – 2; // - 6 (Subtração)
````
### Operadores relacionais

Esses operadores são responsáveis pelas comparações de expressões nos programas. Assumiremos os seguintes valores para as variáveis abaixo: 

````js
a = 100;
b = 100;
c = "100";
d = 50;
````

````js
a == b; // true (Igualdade)

a != b; // false (Diferente de)
a != c; // false
a != d; // true

a === b; // true (Idêntico a (igual e do mesmo tipo))
a === c; // false
a === d; // false

a !== b; // false (Não Idêntico a)
a !== c; // true
a !== d; // true

a > b; // false (Maior que)
a > c; // false

a >= b; // true (Maior ou igual a)
a >= c; // true

a < b; //false (Menor que)
d < a; // true

a <= b; //true (Menor ou igual a)
d <= b; //true
````

### Simplificando os operadores aritméticos

Os comandos de soma, subtração, multiplicação e divisão tem sua forma simplificada para dizer a mesma coisa, são elas:

````js
x = 5; 
x = x + 3; ou x += 3; //Atribuição com adição
x = 9; 
x = x – 3; ou x -= 3; //Atribuição com subtração
x = 5; 
x = x * 3; ou x *= 3; //Atribuição de multiplicação
x = 9; 
x = x / 3; ou x /= 3; //Atribuição de divisão
````

## Variável

Quando você abre uma geladeira já percebe que existem compartimentos com tamanhos e formatos diferentes e, saberá onde pode guardar os ovos, a jarra, as latas, onde armazenará o gelo, etc.

![image](https://user-images.githubusercontent.com/84885503/128551222-153275a3-61fb-412c-9dc9-3916c627d69f.png)
https://www.consul.com.br/facilita-consul/ihhh-agora/como-armazenar-papinha-de-bebe/

A geladeira é composta por vários tipos e formatos diferentes que servem para armazenar os mantimentos de forma organizada. 
Assim funcionam as variáveis, elas têm seu tipo e formato para armazenar as informações passadas, por exemplo, você pode ter o tipo real que guarda o formato de números fracionados. Mas o que vem ser uma variável?
É um nome que damos a uma determinada posição de memória para armazenar uma informação que contém um tipo pré-definido. Para declarar uma variável usamos a palavra reservada __var__ que significa __variable__.
Para exemplificar variáveis vamos usar a ferramenta para desenvolvedores do Google Chrome ``atalho F12``, e insira as seguintes instruções:

````js
> var a = 10;
> var b = 5;
> var c = a + b;
````

Variáveis são formas de armazenar dados para uso posterior, elas podem ser classificadas em 4 tipos básicos. 

**number** - Um ponto inteiro ou flutuante, algumas linguagens distinguem os inteiros do flutuante como int e float, respectivamente;

**string** - Uma sequência de caracteres;

**boolean** - (booleano ou lógico): true e false.

**Objects** — Conjunto de atributos aninhados a uma variável denomina-se um objeto.

Vamos verificar os tipos de variáveis usando o operador typeof que é um operador unário colocado antes de seu operando, o qual pode ser de qualquer tipo. Seu valor é uma string que especifica o tipo do operando.

````js
var d = 2.5
2.5
typeof d;
"number"
````

````js
var curso = "Full Stack";
"Full Stack"
typeof curso;
"string"
````

````js
var c = a > b;
true
typeof c;
"boolean"
````

````js
var alunos = ['Pedro', 'Tiago', 'João', 'André'];
typeof alunos;
"object"
````
Ao contrário da maioria das outras linguagens, não é necessário declarar as variáveis que serão usadas, tampouco definir seu tipo, ou seja, trabalha com Tipagem Dinâmica (Duck Typing). A própria sintaxe do dado a ser armazenada identifica o tipo da variável para armazená-lo.

### Regras de Declaração de Variáveis

1. Não use underline *_* no início de nomes de variáveis - isso é usado em certas construções JavaScript para significar coisas específicas, então pode ficar confuso.

2. Não use números no início das variáveis. Isso não é permitido e causa um erro.

3. Uma convenção segura para seguir criar a variável é:

	• Usar letras minúsculas para toda a primeira palavra e, em seguida, capitalizando as primeiras letras das palavras subsequentes. 

Exemplos:

````js
ano
minhaIdade
calcularMediaAluno
audio1
audio2
````

4. Torne os nomes das variáveis intuitivos, para que eles descrevam os dados que contêm. Não use apenas letras / números simples ou frases longas e grandes.

5. As variáveis são case sensitive, ou seja, diferencia letras maiúsculas de letras minúsculas - portanto, uma variável chamada "minhaidade" é diferente de variável "minhaIdade".

6. Não pode usar palavras reservadas de JavaScript como nomes de variáveis. 

### Palavras reservadas

Palavras reservadas definem as regras e a estrutura da linguagem e não podem ser usadas como nomes de variáveis do JavaScript.

|       |          |         |         |        |     |
| ------|----------|---------|---------|--------|-----|
| break |	   super |	export |	switch |	var   |	let |
|  case	| default  | extends |    in	 |  this	| void|
| delete|   while  |  class	 |    do	 |   for	| new	|
| const	|   else	 | function| 	return | typeof	| if	|   
|       |          |         |         |        |     |

### var x let

A palavra reservada __var__ existe desde das versões antigas do JavaScript, mas havia momento que usar var se tornava confuso, então as versões mais novas criaram a palavra reservada “let” para:

A partir de agora vamos usar o JS Editor para podermos executar mais de uma linha de código, acesse: _https://jseditor.io/_

1.	não permitir que declare duas vezes a mesma variável com valores diferentes. 

````js
| var myName = 'Chris'; | let myName = 'Chris';                  |
| console.log(myName);  | console.log(myName);                   |
| var myName = 'Bob';   | let myName = 'Bob';                    |
| console.log(myName);  | console.log(myName);                   |
|                       |                                        |
| Chris                 | Error: Uncaught SyntaxError: Identifier|
| Bob                   | 'myName' has already been declared     |
````
Para resolver o erro da palavra reservada __let__:

````js
let myName = 'Chris';
console.log(myName);
myName = 'Bob';
console.log(myName);

Chris
Bob
````
2. Criar variáveis locais em um escopo.

````js
for (let i = 0; i<3; i++) {
    alert(i); // 1, 2, 3, 4 ... 9
}
  
  console.log(i); // i não está definida
````
Outros exemplos:

````js
var x = 1;        
if (x === 1) {   
  var x = 2;       
  console.log("Dentro do 'if' -> " + x);
}
console.log("Fora do 'if' -> " + x);

//Dentro do 'if' -> 2
//Fora do 'if' -> 2
````
````js
let x = 1;        
if (x === 1) {   
  let x = 2;       
  console.log("Dentro do 'if' -> " + x);
}
console.log("Fora do 'if' -> " + x);

//Dentro do 'if' -> 2
//Fora do 'if' -> 1
````

## Métodos de Entrada e Saída

Para interagir com o usuário o JavaScript tem os métodos alert(), prompt() além do método confirm(). Vamos iniciar com os métodos prompt() e alert().

### alert()

Abre uma janela para exibir uma mensagem ou aviso ao usuário. É indicado para dar boas-vindas em um novo cadastro efetuado em uma página ou para avisar sobre uma falha no preenchimento de um formulário. 

Sua sintaxe:
alert("texto");

Exemplo: o usuário esquece de preencher o nome no formulário, emite um alert().
````js
alert ("Insira o nome");
````
### prompt()

Seu objetivo é obter alguma informação da pessoa usuária da página. Confira a sua sintaxe:

var <nome_variável> = prompt(argumento1,argumento2);

argumento1: a mensagem destinada à pessoa usuária, que corresponde à solicitação feita.
argumento2: texto opcional que serve como um exemplo do que deve ser preenchido no prompt.

````js
var nome = prompt ("Digite seu nome");
var item = prompt ("Qual objeto você deseja incluir na lista?", "Adicione um novo objeto");
````
### confirm()

Seu objetivo é permitir que a pessoa usuária da página decida se deseja ou não executar uma ação determinada. Para isso, exibe uma janela modal com uma mensagem e dois botões: um de confirmação e outro que cancela a ação. 
O método confirm() retorna verdadeiro se a escolha for a alternativa confirmar, e falso se a opção escolhida for cancelar. Por isso, precisamos usar uma variável para armazenar o retorno do comando quando o utilizamos no código. 

````js
confirm("Um dúzia é igual a 12?");
````

# Estruturas de Decisão

Uma estrutura de seleção ou condicional permite que certas partes do programa sejam executadas ou não, dependendo da avaliação de uma condição (expressão lógica). Elas podem ser:

## Estrutura de seleção simples

Na estrutura de seleção simples você analisa apenas a parte verdadeira da condição onde a mesma poderá ou não ser executada.

````js
var valor = prompt("Entre com um número ");
if (valor > 10){
    alert("O valor " + valor + " é maior que 10");
}
if (valor < 10){
    alert("O valor " + valor + " é menor que 10");
}
````
## Estrutura de seleção composta

Na estrutura de seleção composta você analisa a parte da condição onde tomará uma decisão.

````js
var valor = prompt("Entre com um número ");
if (valor > 10){
    alert("O valor " + valor + " é maior que 10");
} else {
    alert("O valor " + valor + " é menor que 10");
}
````
## Estrutura de seleção encadeada

Na estrutura de seleção homogênea você segui um padrão (se senão se) e analisa as partes da condição onde tomará uma decisão.

````js
var valor = prompt("Entre com um número ");
if (valor > 10){
    alert("O valor " + valor + " é maior que 10");
} else if (valor < 10) {
         alert("O valor " + valor + " é menor que 10");
       } 
       else {
         alert("O valor "+ valor+ " é igual a 10");
       }
````
## Estrutura de seleçao switch case

As estruturas do tipo switch são usadas quando queremos selecionar uma opção dentre várias disponíveis.

````js
sexo = "masculino";

switch (sexo) {
    case "feminino":
        console.log("Bem-vinda!");
        break;
    case "masculino":
        console.log("Bem-vindo!");
        break;
}
````
# Estrutura de Repetição

Se você é um bom observador, deve ter notado que os programas até no momento aprendido, não são executados mais de uma vez. Esse fato ocorre porque não tem um laço de repetição que faça o programa ler aqueles comandos novamente. 

Existem situações onde é necessário realizarmos contagens de ocorrências, ou somatórios e produtórios de valores dentro de um conjunto de dados, devemos utilizar variáveis específicas para fazer o armazenamento dos resultados. 

**Contadores**

Chamamos de contadores para as variáveis que realizam a contagem de ocorrências de um determinado valor (ou situação), o contador é usado para realizar a contagem de alguma etapa do programa.

Exemplo:
Contar a entrada de 4 notas.

![image](https://user-images.githubusercontent.com/84885503/128253855-823412ad-cfa8-424f-af4b-0d82b6bdb80d.png)

Lembra que vimos a forma simplificada?
c += 1;

Ainda podemos usar __c++;__ quando o contador é incremento de 1;

**Acumuladores**

Chamamos de acumuladores para as variáveis responsáveis por armazenar os resultados de somatórios e produtórios de valores.

Exemplo:
Acumular as 4 notas lidas de um determinado aluno.

ac_nota = ac_nota + nota;
         ou
ac_nota *= nota;

![image](https://user-images.githubusercontent.com/84885503/128251273-13e7d1e8-e99b-4fed-a2f8-5fb4b52fedd4.png)

## Laço while

A repetição do while é controlada por uma condição que verifica alguma característica do programa, por exemplo, valores de variáveis. Para o uso correto do while, o bloco de sentenças precisa modificar o estado do sistema de forma a afetar justamente as características testadas na expressão. Se isto não ocorrer, então o while executará eternamente (loop).

![image](https://user-images.githubusercontent.com/84885503/128251046-2a612388-b61b-4a22-a8dc-b3d3736d1320.png)

### Sintaxe while
	
while <condição>{
     ...bloco de comandos
}

**Exemplos:**

1. Programa para ler 4 idades de pessoas.

````js
var contIdade=1, idade;
while (contIdade <=4) {
  idade = prompt("Entre com a idade");
  contIdade++;
}
````

## Laço do..while

Diferentemente do while, o do ... while primeiro executa o conteúdo do laço uma vez e, depois disso, realiza o teste da expressão pare decidir se continuará executando o laço ou irá seguir o resto do programa.

### Sintaxe do..while
	
do {
     ...bloco de comandos
} while <condição>;


**Exemplo:**

Programa para ler 4 idades de pessoas.

````js
var contIdade=0, acumIdade=0, mdIdade;
 do {
   let idade = prompt("Entre com a idade");
   contIdade++;
   acumIdade += parseInt(idade);
  }while (confirm("Deseja continuar?"));
  mdIdade = acumIdade / contIdade;
  alert("A média das Idades: " + mdIdade);
````

## Laço for

Na maioria dos casos, programa necessitam executar um bloco de sentenças por um número específico de vezes. E para isso utiliza-se uma variável para controlar o número de repetições, que você aprendeu como contador. 
O comando for é mais adequado para contagens e para percorrer sequências (ou listas) de valores.

### Sintaxe for
       
for (<variável de controle>) {
    ...bloco de comandos
}

**Exemplo:**

Programa para ler 4 idades de pessoas.

````js
var id;
for (var contId=1;contId<=4; contId++) {
  id = prompt("Entre com a idade");
}
````

# Classe Array

A linguagem Javascript provê um objeto com características semelhantes a um array. São geralmente descritas como "lista de objetos", e são basicamente objetos que contêm múltiplos valores armazenados em uma lista. 

Vamos a um exemplo:

Uma lista com nomes de 5 frutas.

````js
var frutas = ["banana","uva","manga","goiaba","laranja"];
````
Para acessar os dados desse array precisamos dizer qual a posição que desejamos, essa posição se chama índice do array. No array a contagem começa com “zero” até o tamanho do array, logo:

````js
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);
console.log(frutas);
````
Note que o último console.log não possui o índice, isso indica que todos as posições do array serão exibidas.

## Inserindo no final

````js
frutas.push("abacate");
````
## Removendo do final
````js
frutas.pop();
````
## Inserindo no início
````js
frutas.unshift("abacate");
````
## Removendo do início
````js
frutas.shift();
````
	
## Método forEach()

O método forEach() permite executar uma função para cada item de um array. Sua sintaxe é:
array.forEach(funcao([valorAtual, índice]))

Seus parâmetros são:
  1. funcao() é a função a ser executada para cada elemento do array. Pode receber dois parâmetros:
  
  	- valorAtual: é o valor da posição atual sendo percorrida no array. Parâmetro obrigatório na declaração a função.  
  	- índice: é a posição que se encontra cada elmento do array.
	
Exemplos:
	
**Exemplo 1:**
	
Somente com o primeiro parâmetro.
	
````js
var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var total = 0;

numeros.forEach(function(item) {
    total += item;
});

console.log("Total ->" + total);
````

**Exemplo 2:**

Inserindo o segundo parâmetro, ficaria dessa forma:
	
````js
var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var total = 0;

numeros.forEach(function(item, indice) {
    total += item;
    console.log("índice: " + indice + " -> " + item);
});

console.log("Total -> " + total);
````

# Função

Uma função é um bloco de código organizado e reutilizável usado para executar uma única ação relacionada. As funções fornecem a reutilização de código.
Você pode dizer que a função segue o conceito de dividir para conquistar: 
Um problema é dividido em diversos subproblemas.
As soluções dos subproblemas são combinadas numa solução do problema maior.
	
## Funções sem parâmetros

As funções sem parâmetros, são quando não há argumentos na sua chamada. Exemplo:.
 
````js
var idade=[];
function inserirIdade(){
  for (let i=0;i<=4;i++){
    idade[i] = prompt("Entre com a idade");
  }
}

inserirIdade(); //Chamada da função
alert(idade);
````
## Funções com parâmetros

As funções com parâmetros, são quando há argumentos na sua chamada. Vamos a um exemplo:
Somar dois números.
	
````js
function soma(a, b){
    console.log(a + b);
}
soma(2,3);
````
![image](https://user-images.githubusercontent.com/84885503/128258004-5ac0e192-11ce-4e9b-91b3-f4359baeaae8.png)

## Funções com parâmetros e com retorno

Já vimos que os parâmetros são argumentos passados para a função, e o return é uma declaração que finaliza a execução de uma função, retornando um determinado valor. O return é usado sempre no final da função, se você colocar algum comando após o return ele não será executado. O return apenas retorna o valor da expressão feita dentro da função. Vamos a um exemplo:
Somar dois números.
````js	
function soma(a, b){
    return a + b; 
}
console.log(soma(2,3));
````
![image](https://user-images.githubusercontent.com/84885503/128258173-517c8f83-af68-46c7-8ade-1f38d294fc28.png)

## Funções sem parâmetros e com retorno

Também podemos ter uma função que não traz nenhum parâmetro, mas retorna algo. Vamos a um exemplo.
	
````js
function atencao(){
    return "Agora você está preparado para aprender Programação Orientada a Objetos ;-)! \nAté a próxima Aula!";
}
console.log(atencao());
````
	
# Exercícios

1) Usando laço de repetição, pedir para o usuário entrar com uma determinada quantidade de idades e, ao final, mostrar a soma das idades. Use o “confirm” e "forEach".
<details> 
  <summary>Clique para visualizar a resposta</summary>

````js
var arrayIdade=[];
var soma = 0;

do {
   let idade = prompt("Entre com a idade");
   arrayIdade.push(idade);
  }while (confirm("Deseja continuar?"));
 
arrayIdade.forEach(function(idade){
 soma += parseInt(idade);    
});

alert(arrayIdade);
alert(soma);
````
</details>

2) Observe o array abaixo:

var disciplinas = ["Lógica de Programação", "Estrutura de Dados", "Programação Orientada a Objetos","Banco de Dados","Analise de Sistemas"];

a) Insira ao final as disciplinas: Engenharia de Software e Programação para Web.</br>
b) Exclua a disciplina primeira disciplina.</br>
c) Exclua a 3ª disciplina.

<details> 
 <summary>Clique para visualizar a resposta</summary>
	
````js
var disciplinas = ["Lógica de Programação", "Estrutura de Dados", "Programação Orientada a Objetos","Banco de Dados","Analise de Sistemas"];

console.log(disciplinas);

//inserir ao final as disciplinas: Engenharia de Software e Programação para Web
disciplinas.push("Engenharia de Software","Programação para Web");
console.log(disciplinas);

//Exclua a disciplina primeira disciplina.
disciplinas.shift(disciplinas);
console.log(disciplinas);

//Exclua a 3ª disciplina.
delete disciplinas[2];
console.log(disciplinas);	
````
</details>

3) Crie uma função para retornar o quadrado de um número qualquer.
<details> 
  <summary>Clique para visualizar a resposta</summary>

````js
function quadrado(num){
    return (Math.pow(num,2));
}

console.log(quadrado(4));
````
</details>
	
4) Crie uma função para retornar a raiz quadrada de um número qualquer.
<details> 
  <summary>Clique para visualizar a resposta</summary>

````js
function raizQuadrada(num){
    return (Math.sqrt(num));
}

console.log(raizQuadrada(4));
````
</details>

5) Crie uma função para calcular a média de notas de um aluno, trazer sua média e se foi aprovado ou reprovado, considerar a média 6.0. O usuário inseri a quantidade de notas desejadas, e serão postas em um array.
<details> 
  <summary>Clique para visualizar a resposta</summary>
	
````js
var notas = [];
var soma = 0, nota=0;

function carregaVetor(){
  while (confirm("Deseja entrar com uma nota?")){
  nota = prompt("Nota");     
  notas.push(parseFloat(nota));
 }
}
  
function mediaNotas(){
  notas.forEach(function(nota) {
  soma = soma + nota;
 });
 media = soma /notas.length;
 if (media >=6){
  alert("Aprovado com média " + media.toFixed(1));
 } else {
  alert("Reprovado com média " + media.toFixed(1));}
}	

carregaVetor();
mediaNotas();
````


### Usando arrow Function
	
Uma expressão arrow function possui uma sintaxe mais curta comparada com a expressão de função (function expression) e não tem seu próprio this ou arguments ou super. Estas expressões de funções são melhor aplicadas para funções que não sejam métodos, e elas não podem ser usadas como construtoras (constructors).
	
````js
function carregaVetor(){
  do{
  nota = prompt("Nota");     
  notas.push(parseFloat(nota));
 }while (confirm("Deseja entrar com uma nota?"));
}
  
function mediaNotas(){
  notas.forEach((nota)=> {
  soma = soma + nota;
 });
 media = soma /notas.length;
 if (media >=6){
  alert("Aprovado com média " + media.toFixed(1));
 } else {
  alert("Reprovado com média " + media.toFixed(1));}
}

carregaVetor();
mediaNotas();
````
</details>


https://youtu.be/eu-cgMFzUio (Métodos de Entrada e Saída)

https://youtu.be/f6wt9mheID4 (Estruturas de Decisão)

https://youtu.be/hUmCXpcQ24M (Estruturas de Repetição - Parte 1)

https://youtu.be/zP9QAFx2-oQ (Estruturas de Repetição - Parte 2)

https://youtu.be/lpXZRPV2JsQ (Estruturas de Repetição - Parte 3)

https://youtu.be/ZPQEgFacenc (Array e forEach)
