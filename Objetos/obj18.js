function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

// function Aula(nome, videoID) {
//     this.nome = nome
//     this.videoID = videoID
// }

const aula1 = new Aula('Bem Vindis', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

// simulando o new
function novo(funConstr, params) {
    const obj = {}  //objeto vazio
    obj.__proto__ = funcaoConstrutora.prototype //prototipo desse objeto vai apontar pra funçãoConstrutora.prototype
    funConstr.apply(obj, params)   //executa a funçãoConstrutora e vai concatenar tudo isso numa array
    return obj  //retorna o objeto criado, a partir do operador new que retorna o objeto criado a partir de uma função
} 

//estanciando aulas a partir da função Aula
const aula3 = novo(Aula, 'Bem Vindis', 123)
const aula4 = novo(Aula, "Até Breve", 456)
console.log(aula3, aula4)
    /*  Aula { nome: 'Bem Vindis', videoID: 123 } Aula { nome: 'Até Breve', videoID: 456 } 
        Aula { nome: 'Bem Vindis', videoID: 123 } Aula { nome: 'Até Breve', videoID: 456 } */