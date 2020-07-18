// Funções de Object
const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
    /* [ 'nome', 'idade', 'peso' ] */

console.log(Object.values(pessoa))
    /* [ 'Rebeca', 2, 13 ] */

console.log(Object.entries(pessoa))
    /* [ [ 'nome', 'Rebeca' ], [ 'idade', 2 ], [ 'peso', 13 ] ] */

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})
    /*  nome: Rebeca
        idade: 2
        peso: 13 */

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})
    /*  nome: Rebeca
        idade: 2
        peso: 13 */

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,   //será listado
    writable: false,    //não poderá ser alterado
    value: '01/01/2020'
})

pessoa.dataNascimento = '01/01/2018'
console.log(pessoa.dataNascimento)
    /* 01/01/2020 */

console.log(Object.keys(pessoa))
    /* [ 'nome', 'idade', 'peso', 'dataNascimento' ] */
    //se fosse 'enumerable: false' a datta de nascimento não seria enumerada na lista

// Object.assign
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)  //concatenação dos outros objetos

console.log(obj)
    /* { a: 4, b: 2, c: 3 } */

Object.freeze(obj)
obj.c = 1234
console.log(obj)
    /* { a: 4, b: 2, c: 3 } */