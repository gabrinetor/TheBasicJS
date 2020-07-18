// Procedural
//carro(nome, preco, cor, ...);

// OO
let carro = {
    nome: 'Fiat', preco: 45000, 
    andar(){
        return console.log('andou');
    }
}

console.log(carro)
console.log(carro.andar())
    /* OUTPUT
    { nome: 'Fiat', preco: 45000, andar: [Function: andar] }
    andou
    undefined */

let nome = 'Rodilson'
console.log(nome.toUpperCase());
    /* RODILSON */

function $(nome){
    return {
        hide(){
            console.log('Esconder o ' + nome);
        }
    }
}

$('Pedro').hide();
    /* Esconder o Pedro */