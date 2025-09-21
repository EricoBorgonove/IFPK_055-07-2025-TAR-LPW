# Sumário
===================
- [Introdução](#introdução)
- [O que são objetos?](#O-que-são-objetos?)  
- [Programação Orientação a Objetos](#Programação-Orientação-a-Objetos)
- [Princípios Básicos Orientação a Objetos](#Princípios-Básicos-Orientação-a-Objetos)
  - [Abstração](#Abstração)
  - [Objetos](#Objetos)
    - [Atributos](#Atributos)
    - [Métodos](#Métodos)
      - [Funções Anônimas](#Funções-Anônimas)
  - [Classes](#Classes)
- [Instância](#Instância)
- [Herança](#Herança)
- [Encapsulamento](#Encapsulamento)
- [Exercícios de Fixação](#Exercícios-de-Fixação)

# Introdução

Nesse momento você irá conhecer os conceitos para o entendimento da construção de códigos usando orientação a objetos.

# O que são objetos?

Podemos entender um objeto como algo físico: pedra, um sapo, uma laranja, entre outros. Também podemos considerar uma conta bancária com um objeto, claro que de uma forma mental. Não podemos tocar em uma conta bancária, mas temos acesso aos dados dela.

O exemplo da conta bancária podemos chamar de __Objetos Computacionais__, ou seja, objetos que se encontram dentro de sistemas de computador.

A proposta da Orientação a Objetos é representar o mais fielmente as situações do mundo real nos Sistemas Computacionais.

# Programação Orientada a Objetos

Os objetos computacionais são simplificações dos Objetos Reais. Por exemplo, um objeto pessoa em um Sistema Computacional é resumido nos dados dessa pessoa e seus comportamentos como: comprar, receber salário, entre outros.

Outro exemplo, quando você arremessa a bola (objeto), ela quica (comportamento). Quando você implementa no mundo computacional a bola, quando ela for arremessada tem que fazer a mesma coisa do mundo real, ou seja, quicar. Isso é trazer o mundo real para o mundo computacional.

__Objetos Computacionais são estruturas de programação que contêm as informações e os comportamentos que representam um objeto dentro de sistema (Análise Orientada a Objetos - 2ª Ed. 2006 - Tafner, Malcon A.; Correia, Carlos, 2006).__

__Programação Orientada a Objetos consiste em utilizar objetos computacionais para implementar as funcionalidades de um sistema. (Correia, 2006).__

Ainda, segundo Correia, a principal vantagem da Orientação a Objetos consiste em reunir um uma mesma estrutura os dados e os processos que são executados sobre esses dados, permitindo assim um grau maior de organização e simplicidade do programa.

A partir do momento em que um desenvolvedor cria um objeto para realizar uma tarefa complexa, os outros desenvolvedores só precisam acessar esse objeto para realizar essas mesmas tarefas, sem precisar saber como elas são efetuadas. Se alguém muda a maneira como esse objeto realiza internamente essa tarefa, os outros desenvolvedores não precisam alterar seus programas para continuar acessando o novo comportamento, e isso representa um ganho real de produtividade.

Por exemplo, uma empresa desenvolve um sistema educacional que tenha sua funcionalidade de cobrança baseada em objetos. A mesma empresa pode desenvolver um sistema imobiliário e reutilizar os objetos de cobrança, incluindo-os no novo sistema.

# Princípios Básicos de Orientação a Objetos

Veremos agora o que norteia a Orientação a Objetos.

## Abstração

Nada mais é que abstrair as informações do mundo real e levar para o mundo computacional somente aquilo que se pode programar, ou seja, aquilo que vai ser usado no sistema.

## Objetos

Quando pensamos em objetos nos vêm a mente algo do mundo real, concreto, que podemos tocar. Podemos começar a pensar dessa forma, para isso, vamos a um exemplo de objeto, um cachorro para entendermos a relação.

Analisando o objeto, cachorro, podemos deduzir algumas características:

![image](https://user-images.githubusercontent.com/84885503/128808914-e2154891-d414-4da8-8c17-aa9ac4a394ed.png)

Nome: Sansão

Idade: 12

Comprimento dos pelos: curto

Cor dos pelos: preto e marrom

Cor dos olhos: castanhos

Peso: 45

Para um playground mais completo, você pode utilizar o [JsBin](http://jsbin.com/?js,console). É recomendado o JsBin para testes maiores. 

Como representar essas informações de forma computacional?

````js
var cachorro = {nome: "Sansão", idade: 12, cumprimentoPelos: "curto", corPelos:"Preto e Caramelo", corOlhos:"Castanhos", peso: 45};
console.log(cachorro);

//[object Object], é a conversão padrão de um objeto em string.
//Entenderam? Não! Nem eu, rsrsrs...
//Vamos falar de uma outra forma: Este valor é retornado se você tentar imprimir um objeto sem primeiro formatar o objeto como uma string.

console.log(Object.values(cachorro));
````

### Atributos

As características que descrevem um objeto são chamadas de atributos, ou seja, as características que descreveu o cachorro, são os atributos dele.

### Métodos

Os métodos são as ações que ele é capaz de executar, um cachorro pode: latir, pular, sentar, comer, dormir, babar.

A única forma de interagir com os objetos é através dos métodos que ele disponibiliza. Os métodos são funções que realizam as ações próprias de um objeto. Assim, os métodos são as ações que o objeto pode realizar.

````js
var cachorro = 
  {nome: "Sansão", idade: 12, cumprimentoPelos: "curto", corPelos:"Preto e Caramelo", corOlhos:"Castanhos", peso: 45,
   //métodos latir e comer como função anônima
   latir: function() {console.log(this.nome + ", late!");},
   comer: function() {console.log(this.nome + ", vem comer!");}
    
};
console.log(cachorro.nome);
console.log(cachorro.corOlhos);
console.log(cachorro.latir());
console.log(cachorro.comer());
````

• this: significa “esse”, basicamente diz que a variável pertence a classe.

#### Funções Anônimas

A funções anônimas são funções que não dependem de nomes, somente são declaradas e armazenadas em uma variável. No exemplo acima, as funções anônimas não têm nome entre a palavra-chave __function__ e os parênteses __( )__. Como é preciso chamar a função anônima, é atribuído a essas funções uma variável, no nosso exemplo usamos as variáveis latir e comer.

Vamos ver outro exemplo para calcular a área do quadrado.

````js
const quadrado = { 
    base : 10, 
    altura : 10, 
    //método calcularArea com função anônima 
    calcularArea: function() { return this.base * this.altura; }
};

console.log(quadrado.calcularArea());
````
Vamos ver outro exemplo usando o método push.

````js
agenda = {
    contatos : [
        {nome : 'contato1', telefone : 'telefone1', email : 'email1@teste.com'},
        {nome : 'contato2', telefone : 'telefone2', email : 'email2@teste.com'},
        {nome : 'contato3', telefone : 'telefone3', email : 'email3@teste.com'},
        {nome : 'contato4', telefone : 'telefone4', email : 'email4@teste.com'}],
    adicionar : function(contato){ this.contatos.push(contato)}
}

contato1={nome:'contato5', telefone:'telefone5',email:'email5@teste.com'};
agenda.adicionar(contato1);
contato2={nome:'contato6', telefone:'telefone6',email:'email6@teste.com'};
agenda.adicionar(contato2);

agenda.contatos.forEach((value) =>{
 console.log(value.nome);
 console.log(value.telefone);
 console.log(value.email);
 console.log("=====================");
});
````
## Classes

Observe os dois objetos abaixo, notamos que temos duas categorias diferentes: cães e gatos. 

|     ![image](https://user-images.githubusercontent.com/84885503/128809264-5c2ca213-4a05-4ab1-a2ef-a0d218221952.png)
 |     ![image](https://user-images.githubusercontent.com/84885503/128809273-e1674d11-b1a6-4e17-bb29-e63414a19f07.png)|

Isso que diferencia a classe do objeto, a classe é um modelo e todos os seus objetos tem os mesmos atributos. Podemos concluir que a classe que temos é a Mamifero, que podem ser cachorros ou gatos. Vamos ver como representar a classe Mamifero em JavaScript.

Vimos essa forma que não utiliza a sintaxe de classes, é apenas um objeto:

````js
var cachorro = {nome: "Sansão", idade: 12, cumprimentoPelos: "curto", corPelos:"Preto e Caramelo", corOlhos:"Castanhos", peso: 45};
console.log(cachorro);
````
Agora vamos utilizar a sintaxe de classe:

````js
class Mamifero {
    constructor(nome, idade, cumprimentoPelos, corPelos, corOlhos, peso){
        this.nome = nome;
        this.idade = idade;
        this.cumprimentoPelos = cumprimentoPelos;
        this.corPelos = corPelos;
        this.corOlhos = corOlhos;
        this.peso = peso;
    }
    
   // Métodos latir e sentar()
   latir() {
      console.log(this.nome + ", late!");
    }    
    sentar(){
      console.log(this.nome + ", senta!"); 
    }
}
let cachorro = new Mamifero ("Sansão", 12, "curto", "Preto e Castanho","Castanhos", 45);
console.log(cachorro);
cachorro.latir();
cachorro.sentar();

let gato = new Mamifero ("Maria Bonita",4,"longo","Laranja e Branca","Azuis",4.5);
console.log(gato);
````
O que é “constructor”?.

• constructor: é um método especial para criar e inicializar um objeto criado a partir de uma classe, ou seja, define a função construtora que representa a classe. Só pode existir apenas um método especial na classe. É o método que tem o mesmo nome da sua classe. Não pode ter um tipo de retorno e __é chamado pelo operador new__.

# Instância

Uma instância de uma classe é um novo objeto criado dessa classe, com o operador __new__. Instanciar uma classe é __criar um novo objeto do mesmo tipo dessa classe__. Para uma classe ser utilizada precisa ser instanciada.

# Herança

Herança é aquilo que herda ou transmite por hereditariedade. Sobre o ponto de vista da Orientação a Objetos, a herança constitui um mecanismo de aproveitar o código. É através da herança que os objetos podem compartilhar métodos e atributos. Podemos fazer que uma nova classe (classe-filha) herde métodos e atributos de uma outra classe (classe-pai).

A classe-pai é conhecida como superclasse ou ancestral, e a classe-filha, como subclasse ou descendentes. 

__Herança significa que todos os atributos e métodos da classe-pai já estão na classe-filha sem precisar reescrever.__

Para exemplificar iremos criar a classe-pai Pessoa e a classe-filha Cidadão, onde a classe-filha herdará todos os atributos da classe-pai.

````js
class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}
//classe filha
//extends Pessoa => herda todos os atributos de Pessoa
class Cidadao extends Pessoa{
    constructor(nome, idade, cpf, rg){
        //classe superior => classe pai =>chamada da classe Pessoa
        super(nome, idade);
        this.cpf = cpf;
        this.rg = rg;
    }
}

cidadao = new Cidadao('teste', 20, '00000', '11111');
console.log(cidadao);
````

Podemos ter mais de uma classe-filha, veremos outro exemplo:

````js
class Pessoa{
    constructor(nome, idade,rg,cpf, endereco){
        this.nome = nome;
        this.idade = idade;
        this.rg = rg;
        this.cpf = cpf;
        this.endereco = endereco;
    }
}
//classe filha
//extends Pessoa => herda todos os atributos de Pessoa
class Funcionario extends Pessoa{
    constructor(nome, idade, rg, cpf, endereco, funcao, dataAdmissao, salario){
        //classe superior => classe pai =>chamada da classe Pessoa
        super(nome, idade, rg, cpf, endereco);
        this.funcao = funcao;
        this.dataAdmissao = dataAdmissao;
        this.salario = salario;
    }
}

class Cliente extends Pessoa{
    constructor(nome, idade, rg, cpf, endereco, limiteCredito,preferencia,numeroCartao){
        //classe superior => classe pai =>chamada da classe Pessoa
        super(nome, idade, rg, cpf, endereco);
        this.limiteCredito = limiteCredito;
        this.preferencia = preferencia;
        this.numeroCartao = numeroCartao;
    }
}

const funcionario = new Funcionario('João', 20, '00000', '11111','Av. Turquia','Analista de Sistemas','14/08/2021');
const cliente = new Cliente('Ivana', 25,'11111','222222','Av. Londres',100000,'acessórios','123456');
console.log(funcionario);
console.log(cliente);
````
Agora vamos ver como herdar método da classe pai.

````js
class Gato {
    constructor(nome) {
       this.nome = nome;
    }
 
    barulho() {
       console.log(this.nome + ' faça barulho.');
    }
 }
 
 class Leao extends Gato {
    barulho() {
       super.barulho();
       console.log(this.nome + ' roar! grraurrr! brrrum!');
    }
 }
 
 let gato = new Gato ('Maria Bonita')
 gato.barulho();
 
 let leao = new Leao('Rei Leão');
 leao.barulho();
 
 // Rei Leão faça barulho.
 // Rei Leão roar! grraurrr! brrrum!
````

# Encapsulamento

Encapsulamento em programação orientada a objetos significa separar o programa em partes, o mais isolado possível. A ideia é tornar o software mais flexível, fácil de modificar e de criar novas implementações. Encapsular serve para controlar o acesso aos atributos e métodos de uma classe. 

Dessa forma os dados manipulados dentro da classe ficam protegidos de forma eficiente, além de determinar onde esta classe poderá ser manipulada. Não devemos permitir o acesso público aos dados de uma classe, exceto em caso de ser constantes. Vamos a um exemplo de campos e método privado, em Java script usa o cerquilha “#” para informar que um campo ou método é privado.

Exemplo de campos privados.

````js
class Conta{
    #numero;
    #titular;
    #saldo;
    
    constructor(numero, titular,saldo){
        this.#numero = numero;
        this.#titular = titular;
        this.#saldo = saldo;
    }

    sacar(valor){
        
    }

    depositar(valor){

    }

    transferir(valor, recebedor){
    
    }

    getSaldo(){
        return this.#saldo;
    }
}

//classes filhas

class contaCorrente extends Conta{
    
}

class contaPoupanca extends Conta{
    
}

const conta1 = new contaCorrente(4536,"Ivana Bernardo",1000);
const conta2 = new contaPoupanca(14512, "Ivana Bernardo",100000);
console.log('Saldo: '+ conta1.getSaldo());
conta1.saldo = 200;
console.log(conta1.saldo);
console.log('Saldo: '+ conta1.getSaldo());

//Saldo: 1000
//200
//Saldo: 1000
````

Vamos a mais um exemplo mas agora o método que será privado.

````js
class PrivateMethod {
    #privateMethod() {
      return 'hello world';
    }
  
    getPrivateMessage() {
      return this.#privateMethod();
    }
  }

privateMethod = new PrivateMethod;
console.log(privateMethod.getPrivateMessage());
````

# Exercícios de Fixação

 1.	Fazer uma classe para calcular o a área do quadrado: base * altura. Crie a classe Quadrado e o método calcularQuadrado();
 
<details> 
  <summary>Clique para visualizar a resposta</summary>
	
````js
class Quadrado{
    constructor(base, altura){
        this.base = base;
        this.altura = altura;
    }

    calculoQuadrado(){
        return this.base * this.altura;
    }
}

const quadrado = new Quadrado(3, 4);

console.log(quadrado);
console.log(quadrado.calculoQuadrado());
````
</details>

2.	As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes. Faça uma classe que contém o salário de um colaborador e um método que calcule o reajuste segundo o seguinte critério, baseado no salário atual: 

• Salários até R$ 280,00 (incluindo): aumento de 20%;

• Salários entre R$ 280,00 e R$ 700,00 (incluindo): aumento de 15%; 

• Salários entre R$ 700,00 e R$ 1500,00 (incluindo): aumento de 10%;

• Salários de R$ 1500,00 em diante: aumento de 5%.

Após o aumento ser calculado, deverá ser informado: o salário antes do reajuste; o percentual de aumento aplicado; o valor do aumento; o novo salário, após o aumento.

<details> 
  <summary>Clique para visualizar a resposta</summary>
	
````js
class Salario{
    constructor(salario){
        this.salario = salario;
    }

    reajusteSalario(){
        let percentualAjuste, valorAjuste, novoSalario;

        if (this.salario <= 280){
            percentualAjuste = 20;
            valorAjuste =  this.salario * 0.20;
            novoSalario = this.salario + this.salario * 0.20;
        } else if (this.salario >280 && this.salario <= 700)  {
            percentualAjuste = 15;
            valorAjuste =  this.salario * 0.15;
            novoSalario = this.salario + this.salario * 0.15;
        } else if (this.salario >700 && this.salario <= 1500){
            percentualAjuste = 10;
            valorAjuste =  this.salario * 0.10;
            novoSalario = this.salario + this.salario * 0.10;
        } else {
            percentualAjuste = 5;
            valorAjuste =  this.salario * 0.50;
            novoSalario = this.salario + this.salario * 0.05;
        }

        console.log("Salário: " + this.salario);
        console.log("Percentual Reajuste: " + percentualAjuste+ "%");
        console.log("Valor Reajuste: " + valorAjuste);
        console.log("Salário Atual: " + novoSalario);
    }
}

salario1 = new Salario(100);
salario1.reajusteSalario();
salario2 = new Salario(600);
salario2.reajusteSalario();
salario3 = new Salario(1400);
salario3.reajusteSalario();
salario4 = new Salario(2000);
salario4.reajusteSalario();
````
</details>
    
3. Implementar os métodos sacar(valor); depositar(valor) e transferir(valor, recebedor).

````js
class Conta{
    #numero;
    #titular;
    #saldo;
    
    constructor(numero, titular,saldo){
        this.#numero = numero;
        this.#titular = titular;
        this.#saldo = saldo;
    }

    sacar(valor){
        
    }

    depositar(valor){

    }

    transferir(valor, recebedor){
    
    }

    getSaldo(){
        return this.#saldo();
    }
}

//classes filhas

class contaCorrente extends Conta{
    
}

class contaPoupanca extends Conta{
    
}
````
<details> 
  <summary>Clique para visualizar a resposta</summary>
	
````js
class Conta{
    #numeroConta;
    #titular;
    #saldo;
        
    constructor(numeroConta, titular,saldo){
        this.#numeroConta = numeroConta;
        this.#titular = titular;
        this.#saldo = saldo;
    }

    sacar(valor){
        if (valor<=this.#saldo){
            this.#saldo -= valor;
            console.log('Saque realizado com sucesso!');
        } else {console.log('Saldo insuficiente!');}
        return valor;
    }

    depositar(valor){
        if (valor <=0){
            return;
        }
        this.#saldo += valor;
    }

    getSaldo(){
        return this.#saldo;
    }

    transferir(valor, recebedor){
        if (valor>this.#saldo){
            console.log("Você não tem saldo suficiente para essa transferência");  
            return;
        }
        this.sacar(valor);
        recebedor.depositar(valor);
    }
}

//classe filha

class contaCorrente extends Conta{
    
}

class contaPoupanca extends Conta{
    
}

const conta1 = new contaCorrente(4536,"Ivana Bernardo",1000);
const conta2 = new contaPoupanca(14512, "Ivana Bernardo",500);

conta1.transferir(250,conta2);
console.log('Saldo conta 1: ' + conta1.getSaldo());
console.log('Saldo conta 2: ' + conta2.getSaldo()); 
````
</details>
  
