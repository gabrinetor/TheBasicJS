// Herança
const ferrari = {
    modelo: 'F40',
    velMax: 324 
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)  //__proto__ é um atributo privado dentro do objeto
    /* {} -> objeto vazio */

console.log(ferrari.__proto__ === Object.prototype) //de fato o objeto é estritamente igual ao prototype
    /* true */

console.log(volvo.__proto__ === Object.prototype) //prototype está presente apenas em objetos
    /* true */

console.log(Object.prototype.__proto__) //depois do object.prototype não tem prototipo depois dele (mais alto nivel)
    /* null */

console.log(Object.prototype.__proto__ === null)
    /* true */

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
    /* function function */
console.log(Object.prototype, MeuObjeto.prototype)
    /* {} MeuObjeto {} */