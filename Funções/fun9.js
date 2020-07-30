// Observe o this da classe
// map trata diferente quado tem classes e função. 

class Tabuada {
    constructor(numero, valores){
        this.numero = numero
        this.valores = valores
    }

    get tabela(){   //retorna um array de objetos
        //Quando usamos uma função dentro do map(), o escopo da palavra "this" não se refere à nossa classe por padrão
        //Então precisamos fazer uma associação do "this" que está na classe, pra dentro dessa função
        
        return this.valores.map(function(valor){  
            
            return { numero: this.numero, valor: valor, resultado: this.numero * valor }

        }.bind(this))  //para resolver, vamos usar o metodo "bind()" que vai fazer a associação do this que representa a classe
        // agora com esse this, teremos por fim associação às variáveis dentro da função que está no map, e o "numero" será reconhecido pq faz associação com a classe.
    }
}

let x = new Tabuada(4, [2, 3, 4])
console.log(x.tabela)
    /*  [
        { numero: 4, valor: 2, resultado: 8 },
        { numero: 4, valor: 3, resultado: 12 },
        { numero: 4, valor: 4, resultado: 16 }
        ] */

console.table(x.tabela)
    /* 
    ┌─────────┬────────┬───────┬───────────┐
    │ (index) │ numero │ valor │ resultado │
    ├─────────┼────────┼───────┼───────────┤
    │    0    │   4    │   2   │     8     │
    │    1    │   4    │   3   │    12     │
    │    2    │   4    │   4   │    16     │
    └─────────┴────────┴───────┴───────────┘
    */