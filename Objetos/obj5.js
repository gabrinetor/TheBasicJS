//Objetos Constantes 
//um único objeto constante mexe em diferentes endereços de memória 
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)
    /* { nome: 'Pedro' } */

//só pode atribir pra constante uma unica vezz
//pessoa = { nome: 'Ana' } -> deu erro, então vamos congelar

Object.freeze(pessoa)   //objeto congelado não pode ser mexido

pessoa.nome = 'Maria'   //não conseegue alterar um atributo que já existe
pessoa.end = 'Rua ABC'  //não consegue adicionar um atributo nesse objeto
delete pessoa.nome      //não consegue excluir nada do objeto
console.log(pessoa.nome)    //apenas tornou o objeto em si constante!!
console.log(pessoa)
    /* { nome: 'Pedro' }
    Pedro
    { nome: 'Pedro' } */

const pessoaConstante = Object.freeze({ nome: 'Ana' })
pessoaConstante.nome = 'Edinelson'
console.log(pessoaConstante)
    /* output
    { nome: 'Pedro' }
    Pedro
    { nome: 'Pedro' }
    { nome: 'Ana' } */