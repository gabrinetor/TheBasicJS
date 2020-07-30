// Agora vamos ver 5 formas de fazer essa simples função, vai ficando mais simples a cada exercicio.
// A evolução da simplicidade para invocar uma função

const array = [1, 2, 3]

const arrayModificado = array.map(mapear) //tratar cada elemento dentro da array
console.log(arrayModificado) //retorna: [ 2, 4, 6 ]

function mapear(valor){
    return valor * 2  //retornar array, multiplicando cada um por 2
}
