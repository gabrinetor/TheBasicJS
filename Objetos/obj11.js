// Cadeia de protótipos (prototype chain) - Herança
//o protótipo é sempre o objeto anterior, que sucedeu o objeto atual

Object.prototype.atributo0 = '0'    
//adicionar atributo diretamente aqui no prototype do object vai impactar em toda a estrutura, não faça isso!!!

const avo = { atributo1: 'A' }
const pai = { __proto__: avo, atributo2: 'B' }
const filho = { __proto__: pai, atributo3: 'C' }
console.log(filho.atributo1)    /* A */
console.log(filho.atributo0)    /* 0 */
console.log(filho.atributo0, filho.atributo1, filho.atributo2, filho.atributo3)
    /* 0 A B C */

const carro = {
    velAtual: 0, //inicializando
    velMax: 200, 
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing = tem variavel local dentro de uma função que pode sombrear variaveis de escopo
}

const volvo = {
    modelo: 'V40',
    status() {  
        return `${this.modelo}: ${super.status()}`  //super = referencia o meu protótipo
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)    
    /* { modelo: 'F40', velMax: 324 } */

console.log(volvo)
    /* { modelo: 'V40', status: [Function: status] } */

volvo.acelerarMais(100)
console.log(volvo.status())
    /* V40: 100Km/h de 200Km/h */

volvo.acelerarMais(300)
console.log(volvo.status())
    /* V40: 200Km/h de 200Km/h */