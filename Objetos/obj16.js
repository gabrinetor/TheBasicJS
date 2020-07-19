// Objetos criados com sintaxe de construtores 
var o = {a: 1};

// O recém-criado objecto 'o' tem Object.prototype como o seu [[Prototype]]
// 'o' não tem não tem uma propriedade chamada 'hasOwnProperty'
// hasOwnProperty é uma propriedade própria de Object.prototype. Então 'o' herda hasOwnProperty de Object.prototype

// Object.prototype tem null como seu protótipo.
// o ---> Object.prototype ---> null

var a = ["yo", "whadup", "?"];

// Arrays herdam de Array.prototype (que tem métodos como indexOf, forEach, etc.)
// A cadeia de protótipos se parece com isso:
// a ---> Array.prototype ---> Object.prototype ---> null

function f(){
  return 2;
}

// Funções herdam de Function.prototype (que tem métodos como call, bind, etc.)
// f ---> Function.prototype ---> Object.prototype ---> null

//Objeto sendo estanciado
function Graph() {
    this.vertexes = [];
    this.edges = [];
}
  
Graph.prototype = {
    addVertex: function(v){
      this.vertexes.push(v);
    }
};
  
var g = new Graph();
// 'g' é um objeto com as propriedades 'vertexes' e 'edges'.
// g.[[Prototype]] é o valor de Graph.prototype quando new Graph() é executada.

//Criando novos objetos
var a = {a: 1}; 
// a ---> Object.prototype ---> null

var b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a); // 1 (inherited)

var c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null

var d = Object.create(null);
// d ---> null
console.log(d.hasOwnProperty); // undefined, porque não herda de Object.prototype
    /*  1
        undefined */
        
//Reforçando uma dica: estender protótipos nativos é uma péssima prática!!