//Para simplificar, vamos fazer o exercicio anterior de forma mais clean

const array = [1, 2, 3]

const arrayModificado = array.map(function mapear(valor){
    return valor * 2  //retornar array, multiplicando cada um por 2
}) 
console.log(arrayModificado) //retorna: [ 2, 4, 6 ]