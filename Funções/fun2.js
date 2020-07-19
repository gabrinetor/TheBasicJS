// Realizar uma tarefa e não devolver nada
function dizerNome(){
    console.log('gabriela')
}

dizerNome();    /* gabriela */

// Retornando algo, devolvendo pra que seja usada em algum lugar o resultado dessa função
function MultipplicarPorDois(valor) {
    return valor * 2
}

console.log(MultipplicarPorDois(5)) /* 10 */

let resultado = MultipplicarPorDois(18)

console.log(resultado)  /* 36 */