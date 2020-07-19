const mae = { nome: 'Ana', corCabelo: 'preto' }

const filha1 = Object.create(mae)   //objeto novo tendo como prototipo o objeto mae
filha1.nome = 'Maria'
console.log(filha1.corCabelo)
    /* preto */

const filha2 = Object.create(mae, {
    nome: { value: 'Bia', writable: false, enumerable: true }   //não pode ser mudado, mas pode ser listado.
})

console.log(filha2.nome)
    /* Bia */

filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)
    /* Bia tem cabelo preto */ //não foi possível trocar o nome

console.log(Object.keys(filha1), Object.keys(filha2))
    /* [ 'nome' ] [ 'nome' ] */

for (let key in filha2) {
    //console.log(key)
    /*  nome
        corCabelo */
    filha2.hasOwnProperty(key) ? 
        console.log(key) : console.log(`Por herança: ${key}`)
        /* Por herança: corCabelo */
}   