// JSON vs Objeto
/* Objeto permite uso de aspas simples, JSON só com aspas duplas em atributos. 
    JSON aceita (strings, numeros, objetos json, arrays, booleans e null. 
    Objeto, além desses, permmite criar objeto literal, datas(date), funções e undefineds. */

    //criar objeto e transformar para JSON
const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj))
    /* {"a":1,"b":2,"c":3} */

//pegar JSON e transformar em Objeto
//console.log(JSON.parse("{ a: 1, b: 2, c: 3 }")) //Esse formato não é válido!
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3}"))    
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))    //Os atributos têm que ser com aspas duplas. Isso porque a notação de objeto é string
    /* { a: 1, b: 2, c: 3 } */

console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": [] }'))    //Os atributos têm que ser com aspas duplas. Isso porque a notação de objeto é string
    /* { a: 1, b: 'string', c: true, d: {}, e: [] } */