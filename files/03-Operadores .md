# Operadores em JavaScript

Esta documentação explica os diversos operadores disponíveis em JavaScript, divididos por categorias.

---

## **1. Operadores Aritméticos**

Operadores que realizam cálculos matemáticos.

| Operador | Descrição                 | Exemplo      | Resultado       |
|----------|---------------------------|--------------|-----------------|
| `+`      | Adição                   | `5 + 3`      | `8`             |
| `-`      | Subtração                | `5 - 3`      | `2`             |
| `*`      | Multiplicação            | `5 * 3`      | `15`            |
| `/`      | Divisão                  | `6 / 3`      | `2`             |
| `%`      | Módulo (resto da divisão)| `5 % 3`      | `2`             |
| `**`     | Exponenciação            | `2 ** 3`     | `8`             |

---

## **2. Operadores de Atribuição**

Operadores usados para atribuir valores a variáveis.

| Operador | Descrição                         | Exemplo         | Resultado       |
|----------|-----------------------------------|-----------------|-----------------|
| `=`      | Atribuição                       | `x = 5`         | `x` é `5`       |
| `+=`     | Adição e atribuição              | `x += 3`        | `x = x + 3`     |
| `-=`     | Subtração e atribuição           | `x -= 3`        | `x = x - 3`     |
| `*=`     | Multiplicação e atribuição       | `x *= 3`        | `x = x * 3`     |
| `/=`     | Divisão e atribuição             | `x /= 3`        | `x = x / 3`     |
| `%=`     | Módulo e atribuição              | `x %= 3`        | `x = x % 3`     |

---

## **3. Operadores de Comparação**

Operadores que comparam valores e retornam um booleano (`true` ou `false`).

| Operador | Descrição                         | Exemplo        | Resultado       |
|----------|-----------------------------------|----------------|-----------------|
| `==`     | Igualdade (valor)                | `5 == '5'`     | `true`          |
| `===`    | Igualdade estrita (valor e tipo) | `5 === '5'`    | `false`         |
| `!=`     | Desigualdade                     | `5 != '5'`     | `false`         |
| `!==`    | Desigualdade estrita             | `5 !== '5'`    | `true`          |
| `>`      | Maior que                       | `5 > 3`        | `true`          |
| `<`      | Menor que                       | `5 < 3`        | `false`         |
| `>=`     | Maior ou igual                  | `5 >= 3`       | `true`          |
| `<=`     | Menor ou igual                  | `5 <= 3`       | `false`         |

---

## **4. Operadores Lógicos**

Operadores usados para combinar expressões booleanas.

| Operador | Descrição             | Exemplo            | Resultado   |
|----------|-----------------------|--------------------|-------------|
| `&&`     | E lógico (AND)        | `true && false`    | `false`     |
| `||`     | OU lógico (OR)        | `true || false`    | `true`      |
| `!`      | NÃO lógico (NOT)      | `!true`            | `false`     |

---

## **5. Operadores Unários**

Operadores que atuam em um único operando.

| Operador | Descrição             | Exemplo    | Resultado   |
|----------|-----------------------|------------|-------------|
| `+`      | Conversão para número | `+'5'`     | `5`         |
| `-`      | Negação numérica      | `-5`       | `-5`        |
| `++`     | Incremento            | `x++`      | `x + 1`     |
| `--`     | Decremento            | `x--`      | `x - 1`     |

---

## **6. Operadores Bitwise**

Operadores que manipulam bits diretamente.

| Operador | Descrição                 | Exemplo    | Resultado   |
|----------|---------------------------|------------|-------------|
| `&`      | E bit a bit (AND)         | `5 & 1`    | `1`         |
| `|`      | OU bit a bit (OR)         | `5 | 1`    | `5`         |
| `^`      | OU exclusivo bit a bit    | `5 ^ 1`    | `4`         |
| `~`      | NÃO bit a bit (NOT)       | `~5`       | `-6`        |
| `<<`     | Deslocamento à esquerda   | `5 << 1`   | `10`        |
| `>>`     | Deslocamento à direita    | `5 >> 1`   | `2`         |

---

## **7. Operadores de Tipo**

Operadores usados para verificar ou converter o tipo de valores.

| Operador    | Descrição              | Exemplo       | Resultado          |
|-------------|------------------------|---------------|--------------------|
| `typeof`    | Retorna o tipo do valor| `typeof 'abc'`| `'string'`         |
| `instanceof`| Verifica instância     | `obj instanceof Object` | `true` |

---

## **8. Operador Condicional (Ternário)**

Operador para expressões condicionais curtas.

| Operador | Descrição                                 | Exemplo                | Resultado   |
|----------|-------------------------------------------|------------------------|-------------|
| `? :`    | Avalia uma condição e retorna um valor    | `x > 5 ? 'Yes' : 'No'`| `'Yes'`     |

---

## **9. Operadores de String**

Operadores usados em strings.

| Operador | Descrição                 | Exemplo             | Resultado       |
|----------|---------------------------|---------------------|-----------------|
| `+`      | Concatenação de strings   | `'Hello' + 'World'` | `'HelloWorld'`  |
| `+=`     | Concatenação e atribuição | `x += 'World'`      | `'HelloWorld'`  |

---

## **10. Operadores Avançados**

| Operador | Descrição                                | Exemplo            | Resultado              |
|----------|------------------------------------------|--------------------|------------------------|
| `,`      | Avalia múltiplas expressões              | `(x = 1, y = 2)`   | Última expressão: `2`  |
| `...`    | Operador de espalhamento (spread/rest)   | `[...arr, 4, 5]`   | Combina arrays         |

---


