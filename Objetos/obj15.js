// Herança de "métodos"
var o = {
    a: 2,
    m: function(b){
      return this.a + 1;
    }
  };
  
console.log(o.m()); // 3
// Ao chamar 'o.m' neste caso, "this" refere-se a 'o'
  
var p = Object.create(o);
// 'p' é um objeto que foi herdado de 'o'
  
p.a = 12; // cria uma propriedade 'a' no objeto 'p'
console.log(p.m()); // 13
// Ao chamar 'p.m', 'this' refere-se a 'p'
/* Então, quando 'p' herda a função de 'm' de 'o', 'this.a' 
representa 'p.a' que é a própria propriedade 'a' de 'p' */
    /*  3
        13 */