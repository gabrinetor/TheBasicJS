// Palindromo
const palindromo = str => {
    
    str = str.toLowerCase()  // tranformar a string em lowercase

    return str === str.split('').reverse().join('')  // separar, reverter e juntar as letras 

}

console.log(palindromo('racecar'))  //true
console.log(palindromo('taoblo'))  //false