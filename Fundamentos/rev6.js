// Comparações Não Booleanas

console.log(false || 'gabi')
    /* gabi */

console.log(1 || true)
    /* 1 */

console.log(null || false)
    /* false */

/* Só retornam true or false, se for comparado 
com undefined, null, 0, false, '' e 
NaN - Not a Number. */

console.log(false || 1 || 3)  /* 1 */
/*retorna 1 pq o operador OU avalia a primeira 
condição, ignorando tudo que vem depois. */

let corPersonalizada = 'Vermelho'
let corPadrao = 'Azul'
let corPerfil = corPersonalizada || corPadrao

console.log(corPerfil)  /* Vermelho */
/* No OR(||) ele precisa encontrar apenas um valor Truthy. 
Se colocasse o corPersonalizada como string vazia, ia retornar 
a segunda opção que é 'Azul', pois ele para no primeiro verdadeiro 
da comparação. */