const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca de produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 98000,
    proprietaria: {
        nome: 'Gabriela',
        idade: 25,
        endereco: {
            logadouro: "Rua ABC",
            numero: 123
        }
    },
    condutores: [{
        nome: "Junior",
        idade: 19
    }, {
        nome: "Claudia",
        idade: 46
    }],
    calcularValorSeguro: function() {
        // ...
    }
};

carro.proprietaria.endereco.numero = 10000;
carro['proprietaria']['endereco']['logradouro'] = 'Rua Tal..';
console.log(carro); 

    /* OUTPUT
    { nome: 'Cadeira', 'marca do produto': 'Generica', preco: 220 }
    { nome: 'Cadeira', 'marca do produto': 'Generica' }
    {
    modelo: 'A4',
    valor: 98000,
    proprietaria: {
        nome: 'Gabriela',
        idade: 25,
        endereco: { logadouro: 'Rua ABC', numero: 10000, logradouro: 'Rua Tal..' }
    },
    condutores: [ { nome: 'Junior', idade: 19 }, { nome: 'Claudia', idade: 46 } ],
    calcularValorSeguro: [Function: calcularValorSeguro]
    }*/

delete carro.condutores
delete carro.proprietaria.endereco
delete carro.calcularValorSeguro
console.log(carro)
    /* OUTPUT
    { nome: 'Cadeira', 'marca do produto': 'Generica', preco: 220 }
    { nome: 'Cadeira', 'marca do produto': 'Generica' }
    {
    modelo: 'A4',
    valor: 98000,
    proprietaria: {
        nome: 'Gabriela',
        idade: 25,
        endereco: { logadouro: 'Rua ABC', numero: 10000, logradouro: 'Rua Tal..' }
    },
    condutores: [ { nome: 'Junior', idade: 19 }, { nome: 'Claudia', idade: 46 } ],
    calcularValorSeguro: [Function: calcularValorSeguro]
    }
    {
    modelo: 'A4',
    valor: 98000,
    proprietaria: { nome: 'Gabriela', idade: 25 }
    } */

console.log(carro.condutores)
    /* { nome: 'Cadeira', 'marca do produto': 'Generica', preco: 220 }
    { nome: 'Cadeira', 'marca do produto': 'Generica' }
    {
    modelo: 'A4',
    valor: 98000,
    proprietaria: {
        nome: 'Gabriela',
        idade: 25,
        endereco: { logadouro: 'Rua ABC', numero: 10000, logradouro: 'Rua Tal..' }
    },
    condutores: [ { nome: 'Junior', idade: 19 }, { nome: 'Claudia', idade: 46 } ],
    calcularValorSeguro: [Function: calcularValorSeguro]
    }
    {
    modelo: 'A4',
    valor: 98000,
    proprietaria: { nome: 'Gabriela', idade: 25 }
    }
    undefined    */