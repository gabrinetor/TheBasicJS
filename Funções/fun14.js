// Contar quantas as Vogais

const contarVogais = str => {
    let cont = 0
    const vowels = ['a', 'e', 'i', 'o', 'u', 'c']
    for(let char of str.toLowerCase()) {
        if(vowels.includes(char)) {
            cont++
        }
    }
    return cont
}

console.log(contarVogais('frutas')) //2
console.log(contarVogais('cachorrinho')) //6