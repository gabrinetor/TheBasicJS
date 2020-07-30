// Fibonacci
// Uma sequência de Fibonacci é uma ordem de números em que cada número é a soma dos dois anteriores. Por exemplo, os dez primeiros números da sequência de Fibonacci são: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.

const fibonacci = num => {
    // armazenar a sequencia que está sendo gerada dentro de uma array e inicializa o array com os dois primeiros números da sequencia
    const resultado = [0, 1]
  
    for(let i = 2; i <= num; i++) {
      // inserir dois numeros na soma, dois numeros anteriores à posição de i na array, até o final do resultadoado na array
      const anteriorNum1 = resultado[i - 1]
      const anteriorNum2 = resultado[i - 2]
      resultado.push(anteriorNum1 + anteriorNum2)
    }
    // returna o ultimo valor no resultado da array
    return resultado[num]
}