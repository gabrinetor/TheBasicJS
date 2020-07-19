// FizzBuzz = comparar alguns valores e ter alguma tipo de retorno baseado nesses valores de entrada. 
// Divisível por 3 => Fizz
// Divisível por 5 => Buzz
// Divisível por 3 e por 5 => FizzBuzz
// Não divisível por 3 nem por 5 => entrada
// Não é um número => 'Não é um número'

const resultado = fizzBuzz(15)
console.log(resultado)  /* FizzBuzz */

function fizzBuzz(entrada){
    if ( typeof entrada !== 'number' )
        return 'Não é um número'
    if ((entrada % 3 === 0) && (entrada % 5 === 0))
        return 'FizzBuzz'
    if (entrada % 3 === 0)
        return 'Fizz'
    if (entrada % 5 === 0)
        return 'Buzz'
    return entrada
} 