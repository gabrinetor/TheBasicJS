// Propriedades de Heranças
// Vamos criar um objeto o da função f com suas próprias propriedades a e b:
let f = function () {
    this.a = 1;
    this.b = 2;
 }
 let o = new f(); // {a: 1, b: 2}
 
 // adicionar propriedades no protótipo da função f
 f.prototype.b = 3;
 f.prototype.c = 4;
 
 // não defina o protótipo f.prototype = {b: 3, c: 4}; isso vai quebrar a cadeia de protótipos
 // o. [[Prototype]] possui propriedades bec.
 // o. [[Prototype]]. [[Prototype]] é Object.prototype.
 // Finalmente, o. [[Prototype]]. [[Prototype]]. [[Prototype]] é nulo.
 // Este é o fim da cadeia de protótipos, como nulo,
 // por definição, não possui [[Prototype]].
 // Assim, a cadeia completa de protótipos se parece com:
 // {a: 1, b: 2} ---> {b: 3, c: 4} ---> Object.prototype ---> null dfdf
 
 console.log(o.a); // 1
 // Existe uma propriedade 'a' no objeto o? Sim, e seu valor é 1.
 
 console.log(o.b); // 2
 // Existe uma propriedade própria 'b' em o? Sim, e seu valor é 2.
 // O protótipo também tem uma propriedade 'b', mas não é visitado.
 // Isso é chamado de sombreamento de propriedade(Property Shadowing)
 
 console.log(o.c); // 4
 // Existe uma propriedade própria 'c' em o? Não, verifique seu protótipo.
 // Existe uma propriedade 'c' própria em o. [[Prototype]]? Sim, seu valor é 4.
 
 console.log(o.d); // undefined
 // Existe uma propriedade 'd' própria em o? Não, verifique seu prototype.
 // Existe uma propriedade 'd' em o. [[Prototype]]? Não, verifique seu prototype.
 // o. [[Prototype]]. [[Prototype]] é Object.prototype e não há propriedade 'd' por padrão, verifique seu prototype.
 // o. [[Prototype]]. [[Prototype]]. [[Prototype]] é nulo, pare de pesquisar,
 // nenhuma propriedade encontrada, retorne indefinido.

    /*  1
        2
        4
        undefined */