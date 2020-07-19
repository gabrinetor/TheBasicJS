// Modelo de Herança Prototipal
function meuObjeto() {}
console.log(meuObjeto.prototype)
    /* meuObjeto {} */

// estancias
const obj1 = new meuObjeto
const obj2 = new meuObjeto
console.log(obj1.__proto__ === obj2.__proto__) //os prototipos desses objetos apontam para o mesmo objeto por padrão
    /* true */

console.log(meuObjeto.prototype === obj1.__proto__)
    /* true */

meuObjeto.prototype.nome = 'Anônimo'
meuObjeto.prototype.falar = function() {
    console.log(`Bom dia: Meu nome é ${this.nome}!`) //não sobrescreveu nada 
}

obj1.falar()
    /* Bom dia: Meu nome é Anônimo! */

obj2.nome = 'Gabriela'
obj2.falar()
    /* Bom dia: Meu nome é Gabriela! */

const obj3 = {}
obj3.__proto__ = meuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

//Resumo!!!
console.log((new meuObjeto).__proto__ === meuObjeto.prototype)  /* true */
//console.log(MeuObjeto.__proto__ === function().prototype) /* `{erro!}` */
console.log(Function.prototype.__proto__ === Object.prototype)  /* true */
console.log(Object.prototype.__proto__ === undefined)   /* false */
console.log(Object.prototype.__proto__ === null)    /* true */    

/* Quando se trata de herança, o JavaScript tem somente um construtor: objetos. 
Cada objeto tem um link interno para um outro objeto chamado prototype. 
Esse objeto prototype também tem um atributo prototype (__proto__), e assim por diante 
até o que o valor null seja encontrado como sendo o seu prototype. null que, por 
definição, não tem prototype, e age como um link final nesta cadeia de protótipos 
(prototype chain). 
Dica: quebre a cadeia caso necessário para evitar problemas de performace. 
Nunca estenda protótipos nativos a menos que seja para conseguir compatibilidade com novas "features" do JavaScript.
(Fonte: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain#:~:text=
    Objetos%20em%20JavaScript%20s%C3%A3o%20%22sacos,f%20%3D%20function%20()%20%7B%20this.)*/