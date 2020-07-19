// Operadores Lógicos
// AND, OR, NOT

// AND (&&) retorna True se os dois operandos forem True
console.log(true && true)   /* true */
console.log(false && true)   /* false */
console.log(true && false)   /* false */
console.log(false && false)   /* false */

// OR (||) só retorna False se os dois forem False
let maiorDeIdade = false
let possuiCarteiraDeTrabalho = true
let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho

console.log('Pode Aplicar', podeAplicar)   /* true */

// NOT (!) é a negação
let candidatoRecusado = !podeAplicar
console.log('Candidato Recusado', candidatoRecusado)   /* false */