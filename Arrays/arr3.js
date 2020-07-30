// Arrays = conjunto de dados acessado por um indice

let frutas = ['laranja', 'abacate', 'jamelao']
console.log(frutas)
    /* [ 'laranja', 'abacate', 'jamelao'] */

frutas.push('pitanga')
console.log(frutas)
    /*  output 
        [ 'laranja', 'abacate', 'jamelao', 'pitanga' ]
    */

console.log(frutas.length)
    /* 4 */

console.log(frutas.toString())
    /* laranja,abacate,jamelao,pitanga */

console.log(frutas.join(' - '))
    /* laranja - abacate - jamelao - pitanga */

frutas.pop()
console.log(frutas)
    /* [ 'laranja', 'abacate', 'jamelao' ] */

frutas.shift()
console.log(frutas)
    /* [ 'abacate', 'jamelao' ] */

frutas.unshift('pitanga')
console.log(frutas)
    /* [ 'pitanga', 'abacate', 'jamelao' ] */

frutas.sort()
console.log(frutas)
    /* [ 'abacate', 'jamelao', 'pitanga' ] */

frutas.reverse() //inverte a ordem atual
console.log(frutas)
    /* [ 'pitanga', 'jamelao', 'abacate' ] */