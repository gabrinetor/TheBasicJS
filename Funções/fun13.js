// Anagrama: transposição de letras de palavra ou frase para formar outra palavra ou frase diferente ( Natércia, de Caterina ; amor, de Roma ; Célia, de Alice etc.).
// Tem nque ter o mesmo numero de caracteres e as letras podem ser trocadas
// Fonte: https://www.sitepoint.com/5-common-coding-interview-challenges/

// Nossa função auxiliar que vai fazer o objeto armazenar dados
const cadaLetra = str => {
    const objCaractere = {}
    for(let char of str.replace(/[^\w]/g).toLowerCase()) {  
        //se o objeto já tiver um par de valores-chave igual ao valor que está sendo repetido, incremente mais 1
        //caso contrário, acione a letra que está sendo repetida como chave e 1 como seu valor
        objCaractere[char] = objCaractere[char] + 1 || 1
    }
    return objCaractere
  }
  
  // Função principal
  const anagrama = (strA, strB) => {
    
    const aobjCaractereect = cadaLetra(strA)  //objeto strA

    const bobjCaractereect = cadaLetra(strB)  //objeto strB
  
    // comparando numero com chaves nos dois objetos (lembre-se: mesmo numero de letras)
    if(Object.keys(aobjCaractereect).length !== Object.keys(bobjCaractereect).length) {
      return false
    }

    // Se ambos os objetos têm o mesmo numero de chaves, nós sabemos que ambas as strings têm o mesmo número de caracteres
    // Agora nós precisamos comparar os dois objetos para ver se ambos têm as mesmas letras em mesma quantidade.
    for(let char in aobjCaractereect) {
      if(aobjCaractereect[char] !== bobjCaractereect[char]) {
        return false
      }
    }

    // se ambos os objetos acima estiverem ok, teremos 'true' como retorno para nosso anagrama
    return true
  }

  console.log(anagrama('bixo', 'ixob'))  //true
    
  console.log(anagrama('hello', 'bye')) //false
  
  console.log(anagrama('acre', 'cera'))  //true
  
  console.log(anagrama('Fruta', 'farofa'))  //false

  console.log(anagrama('finder', 'Friend'))  //true
