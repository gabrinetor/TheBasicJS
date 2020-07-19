// Evitando Modificações

//não deixa adicionar o numero de atributos
//Object.preventExtensions
const produto = Object.preventExtensions({
    //vou pasar no parâmetro deste método um objeto literal e retorne pra mim um atributo que nao pode ser extendido    
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
})
console.log('Extensível:', Object.isExtensible(produto)) 
    /* Extensível: false */ //retorna que não pode ser extensível

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)
    /* { nome: 'Borracha', preco: 1.99 } */

// Object.seal (selar)
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa) //qnd vc sela um objeto, vc não consegue adicionar novos atributos, nem excluir, mas consegue modificar os valores dos atributos do objeto
console.log('Selado:', Object.isSealed(pessoa))
    /* Selado: true */

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29   //só consegue modificar
console.log(pessoa)
    /* { nome: 'Juliana', idade: 29 } */

// Object.freeze = selado + valores constantes