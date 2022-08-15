// Exercício 1: Escreva uma função que dado um valor numérico retorne se o valor é par.
const retornaPar = (numero) => numero % 2 === 0;
console.log(retornaPar(2));

// Exercício 2: Escreva uma função que recebe por parâmetro um array de números e retorna a soma dos números pares.
const somaPares = (array) => {
  let resultado = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 2 === 0) {
      resultado += array[i];
    }
  }
  return resultado;
}
console.log(somaPares([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// Exercício 3: Escreva uma função que dado um parâmetro retorna se o tipo de dado é Number.
const tipo = (dado) => typeof dado === 'number';
console.log(tipo('hello'));

// Exercício 4: Escreva uma função que receba um nome de usuário e retorne a seguinte mensagem: "Boas vindas, USERNAME!". Valide que o tipo de dado seja string e o texto tenha pelo menos 1 caracter, e caso o parâmetro não atenda alguma das condições o retorno deve ser a string "Parâmetro inválido.".

const boasVindas = (usuario) => (typeof usuario === 'string' && usuario.length > 0)?`Boas vindas, ${usuario}!`:'Parâmetro inválido.';

console.log(boasVindas('Joseane'));

// const boasVindas = (usuario) => {
//   if (typeof usuario === 'string' && usuario.length > 0) {
//     return `Boas vindas, ${usuario}!`;
//   }
//   return 'Parâmetro inválido.';
// }
// console.log(boasVindas(1));

// Exercício 5: Escreva uma função que calcule a velocidade final de um objeto em queda livre dado o tempo que levou para atingir o solo. A fórmula para o cálculo é velocidade = tempo * gravidade. Considere a gravidade constante de 9.8.

const vF = (tempo) => tempo * 9.8;
console.log(vF(10));

// Exercício 6: Utilizando operadores ternários e arrow functions reescreva a seguinte função:

const isZero = (number) => (number === 0)?"Zero":"Not zero";
console.log(isZero(1));

// Exercício 7: Escreva uma função que, dado um array, verifique se todos os valores são iguais. Valide que o tipo de entrada seja array e que o tamanho seja maior que 1, e caso a entrada não atenda alguma das condições o retorno deve ser a string "Parâmetro inválido.".

const verificaArray = (array) => {
  let result = 'Parâmetro inválido.';
  if (Array.isArray(array) && array.length > 1) {
    for(let i = 0; i < array.length; i += 1) {
      if (array[i] === array[i + 1]) {
        result = true;
      }
    }  
  }
  return result;
} 

console.log(verificaArray([1]));