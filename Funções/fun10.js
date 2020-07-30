// Arrow Functions () => {}
// Simplificando o exemplo anterior

class Tabuada {
    constructor(numero, valores){
        this.numero = numero
        this.valores = valores
    }

    get tabela(){   
        let resultado = this.valores.map( valor => {
            return {
                numero: this.numero, 
                valor: valor, 
                resultado: this.numero * valor     
            } 
        })  // No Arraw Function, não precisa fazer o bind pro this, porque ele vai pegar o this que está representado aqui na classe tabuada 
        
        return resultado
    }
}

let x = new Tabuada(4, Array.from(Array(11).keys()))
console.log(x.tabela)
    /* 
    [
    { numero: 4, valor: 0, resultado: 0 },
    { numero: 4, valor: 1, resultado: 4 },
    { numero: 4, valor: 2, resultado: 8 },
    { numero: 4, valor: 3, resultado: 12 },
    { numero: 4, valor: 4, resultado: 16 },
    { numero: 4, valor: 5, resultado: 20 },
    { numero: 4, valor: 6, resultado: 24 },
    { numero: 4, valor: 7, resultado: 28 },
    { numero: 4, valor: 8, resultado: 32 },
    { numero: 4, valor: 9, resultado: 36 },
    { numero: 4, valor: 10, resultado: 40 }
    ]
    */

console.table(x.tabela)
    /* 
    ┌─────────┬────────┬───────┬───────────┐
    │ (index) │ numero │ valor │ resultado │
    ├─────────┼────────┼───────┼───────────┤
    │    0    │   4    │   0   │     0     │
    │    1    │   4    │   1   │     4     │
    │    2    │   4    │   2   │     8     │
    │    3    │   4    │   3   │    12     │
    │    4    │   4    │   4   │    16     │
    │    5    │   4    │   5   │    20     │
    │    6    │   4    │   6   │    24     │
    │    7    │   4    │   7   │    28     │
    │    8    │   4    │   8   │    32     │
    │    9    │   4    │   9   │    36     │
    │   10    │   4    │  10   │    40     │
    └─────────┴────────┴───────┴───────────┘
    */