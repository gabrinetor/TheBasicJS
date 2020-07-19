//classes têm funções por baixo de sua estrutura, por isso trabalham com extensão de prototipo
class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome  //atributo = objeto
    }
}

class Mae extends Avo {
    constructor(sobrenome, profissao = 'Professora') {
        super(sobrenome)    //pra estanciar a função construtora da superclasse
        this.profissao = profissao  //atribuir o atributo profissao ao objeto que foi estanciado
    }
}

class Filha extends Mae {
    constructor() {
        super('Rosa')
    }
}

const filha = new Filha
console.log(filha)  //herdou tudo
    /* Filha { sobrenome: 'Rosa', profissao: 'Professora' } */