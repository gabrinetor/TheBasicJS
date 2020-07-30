//Remover arrays duplicadas
const array = ['☕', 1, 2, '☕', '☕', 3] 

    /* Os 3 retornam: [ '☕', 1, 2, 3 ] */

// Set
console.log([...new Set(array)])

// Filter
console.log(array.filter((item, index) => array.indexOf(item) === index))

// Reduce
const oreduce = array.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], [])
console.log(oreduce)

// Set 
const unicoSet = new Set(array)
console.log(unicoSet)
    /* Set { '☕', 1, 2, 3 } */

const voltaAoArray = [...unicoSet]
console.log(voltaAoArray)
    /* [ '☕', 1, 2, 3 ] */

console.log(Array.from(new Set(array)))
    /* [ '☕', 1, 2, 3 ] */

// Filter
console.log(array.indexOf('☕'))  //0
console.log(array.indexOf(1))     //1
console.log(array.indexOf(2))     //2
console.log(array.indexOf(3))     //5

const filtro = array.filter((item, index) => { 
    console.log(
        item, // item
        index, // index
        array.indexOf(item), //indexOf
        array.indexOf(item) === index, //Condição
    )
        /* colunas item, index, indexOf, Condição
           ☕  0  0  true
            1  1  1  true
            2  2  2  true
           ☕  3  0  false
           ☕  4  0  false
            3  5  5  true 
        ou seja, o indexOf considera o emoji como 0. */
    return array.indexOf(item) === index  
})

console.log(filtro)
    /* [ '☕', 1, 2, 3 ] */

// para recuperar os valores duplicados
const recuperar = array.filter((item, index) => array.indexOf(item) !== index)
console.log(recuperar)  //vai recuperar os do indice 3 e 4 de condição true
    /* [ '☕', '☕' ] */

// Reduce
const reduzir = array.reduce((unico, item) => {
    console.log(
        item, //item
        unico, //array final (acumulador)
        unico.includes(item), //condição se indice é unico
        unico.includes(item) ? unico : [...unico, item], //resultado da função reducer
    )
    /* outra tabela com as colunas: item, Acumulador(antes da função reducer), Condição se deve coar ao acumulador?, Acumulador(depois da função reducer)
    ☕  []              false   [ '☕' ]
    1   [ '☕' ]        false   [ '☕', 1 ]
    2   [ '☕', 1 ]     false   [ '☕', 1, 2 ]
    ☕  [ '☕', 1, 2 ]  true    [ '☕', 1, 2 ]
    ☕  [ '☕', 1, 2 ]  true    [ '☕', 1, 2 ]
    3   [ '☕', 1, 2 ]  false   [ '☕', 1, 2, 3 ] */
    return unico.includes(item) ? unico : [...unico, item]
}, [])
console.log(reduzir)
    /* [ '☕', 1, 2, 3 ] */