let frutas = ['laranja', 'abacate', 'melancia']
console.log(frutas)
    /* [ 'laranja', 'abacate', 'melancia'] */

frutas.push('pitanga')
console.log(frutas)
    /*  output 
        [ 'laranja', 'abacate', 'melancia', 'pitanga' ]
    */

console.log(frutas.length)
    /* 4 */

console.log(frutas.toString())
    /* laranja,abacate,melancia,pitanga */

console.log(frutas.join(' - '))
    /* laranja - abacate - melancia - pitanga */

frutas.pop()
console.log(frutas)
    /* [ 'laranja', 'abacate', 'melancia' ] */

frutas.shift()
console.log(frutas)
    /* [ 'abacate', 'melancia' ] */

frutas.unshift('pitanga')
console.log(frutas)
    /* [ 'pitanga', 'abacate', 'melancia' ] */

frutas.sort()
console.log(frutas)
    /* [ 'abacate', 'melancia', 'pitanga' ] */

frutas.reverse() //inverte a ordem atual
console.log(frutas)
    /* [ 'pitanga', 'melancia', 'abacate' ] */