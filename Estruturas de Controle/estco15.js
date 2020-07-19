// Média de Nota Escolar
const array = [70, 70, 80]

console.log(mediaDoAluno(array))  /* C */

function mediaDoAluno(notas) {
    const media = calcularMedia(notas)

    if (media <= 59) return 'F'

    if (media <= 69) return 'D'

    if (media <= 79) return 'C'

    if (media <= 89) return 'B'

    //if (media <= 100)
    return 'A'
}

function calcularMedia(array) {
    let soma = 0
    for (let valor of array) {  //percorre os valores da array
        soma += valor
    }
    return soma/(array.length)
}