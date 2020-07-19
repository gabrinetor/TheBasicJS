// Operador Ternário 
// usado em comparações (evitar eternos IFs)

// if (jogador.pontos > 100) return campeao } else {return comum}
let pontos = 100
let nivel = pontos > 100 ? 'campeao' : 'comum'
console.log(nivel)  /* comum */

let idade = 18
let situacao = (idade >= 10) ? 'Maioridade':'Menoridade'
console.log(situacao)