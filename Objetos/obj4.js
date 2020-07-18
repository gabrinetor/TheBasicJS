const obj1 = {}
console.log(obj1)

console.log(typeof Object, typeof new Object)
const obj2 = new Object

console.log(obj2)
    /* {}
    function object
    {} */

//Construction functions
function Produto(nome, preco, desc) {
    this.nome = nome //atributo publico
    this.getPrecoComDesconto = () => {  //acessando o metodo a partir da estancia
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto, p2.getPrecoComDesconto())
    /* {}
    function object
    {}
    [Function] 2249.2425 */

//Factory functions
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 9430, 1)
console.log(f1.getSalario(), f2.getSalario())
    /* {}
    function object
    {}
    [Function] 2249.2425
    6916 9116 */

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//uma função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)