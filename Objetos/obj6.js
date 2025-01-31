/* Notação Literal */
const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c }
const obj2 = { a, b, c }
console.log(obj1, obj2)
/* { a: 1, b: 2, c: 3 } { a: 1, b: 2, c: 3 } */

const nomeAtributo = 'nota'
const valorAtributo = 7.87

const obj3 = {}
obj3[nomeAtributo] = valorAtributo
console.log(obj3)
/* { a: 1, b: 2, c: 3 } { a: 1, b: 2, c: 3 }
    { nota: 7.87 } */

const obj4 = { [nomeAtributo]: valorAtributo }
console.log(obj4)
/* { a: 1, b: 2, c: 3 } { a: 1, b: 2, c: 3 }
    { nota: 7.87 }
    { nota: 7.87 } */

const obj5 = {
    funcao1: function() {
        //...
    },
    funcao2(){
        //...
    }
}

console.log(obj5)
    /* { a: 1, b: 2, c: 3 } { a: 1, b: 2, c: 3 }
    { nota: 7.87 }
    { nota: 7.87 }
    { funcao1: [Function: funcao1], funcao2: [Function: funcao2] } */