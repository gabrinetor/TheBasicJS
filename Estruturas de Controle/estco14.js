// Multiplos de 3 e 5
/* Criar função somar que retorna a soma de todos os multiplos de 3 e 5 */
/* Dentro de 10, temos: 
    Multiplos de 3 => 3, 6, 9 
    Multiplos de 5 => 5, 10  */
// Somando todos os números, vai retornar 33

somar(10)   //10 é o limite
function somar(limite) {
    let multiplosDe3 = 0
    let multiplosDe5 = 0
    
    for (let i = 0; i <= limite; i++){
        if(i % 3 === 0)
            multiplosDe3 += i   // Armazenar os múltiplos de 3

        if(i % 5 === 0)
            multiplosDe5 += i   // Armazenar os múltiplos de 5
    }
    // Somar os dois
    console.log(multiplosDe3 + multiplosDe5)  /* 33 */
}   