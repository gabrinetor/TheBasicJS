// Números Primos = divisível apenas por 1 ou por ele mesmo. 
// (Ex.: 10 e 11 somente o 11 é divisível por 1 ou por ele mesmo). 

exibirNumerosPrimos(15)

function exibirNumerosPrimos(limite){
    for (let numero = 2; numero <= limite; numero++) {
        let numPrimo = true

        for (let divisor = 2; divisor < numero; divisor++){
            if (numero % divisor === 0){
                numPrimo = false
                break   //parar para não gastar mais recursos do pc desnecessariamente.
            }
        }

        if (numPrimo) console.log(numero)
    }
}
    /* 2  3  5  7  11  13 */