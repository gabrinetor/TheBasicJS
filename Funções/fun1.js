let cor = "azul"
let jogo = "The Sims"
function resetaCor(){
    cor = "";
}

console.log(cor)    /* azul */
resetaCor() //redefine
console.log(cor)    /*  */

//colocar novas funcionalidades
function trocarJogo(jg, personagem) { //param=input
    jogo = 'Jogo: ' + jg + '. Personagem: ' + personagem  //arguments=oqvoufazeraquidentro
}

console.log(jogo)    /* The Sims */
trocarJogo("FreeFire")
console.log(jogo)    /* FreeFire */

console.log(jogo)   /* Jogo: FreeFire. Personagem: undefined */
trocarJogo("League of Legends", " Darius")
console.log(jogo)   /* Jogo: League of Legends. Personagem:  Darius */