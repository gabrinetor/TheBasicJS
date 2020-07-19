let n = 5 
if(n > 5){
    console.log("É maior")
} else if (n == 5){
    console.log("É igual")
} else {
    console.log("É menor")
}

let idade = 18
let situacao = (idade >= 10) ? 'Maioridade':'Menoridade'
console.log(situacao)

let diaSemana = new Date().getDay()
switch(diaSemana){
    case 6:
        console.log("Sabado")
        break
    case 0:
        console.log("Domingo")
        break
    default:
        console.log('Dia normal: trabalho + estudo')
}   /* Domingo */

let linguagens = ['PHP', 'JAVA', 'Python', 'CSharp']
for( let i = 0; i < linguagens.length; i++ ) {
    if(i == 2) continue
        console.log(linguagens[i])  /* PHP  JAVA  CSharp */

    if(i == 2) break
        console.log(linguagens[i])  /* PHP  JAVA */

    console.log(linguagens[i])
    // /*  PHP
    //     JAVA
    //     Python
    //     CSharp */
}

let contador = 0
let linguagens = ['PHP', 'JAVA', 'Python', 'CSharp']

while(contador < 6){
    console.log(linguagens[contador])
    contador++ 
}   /* PHP  JAVA  Python  CSharp  undefined  undefined */

do{ //executa depois verifica
    console.log(linguagens[contador]);
    contador++;
} while(contador < linguagens.length)
    /* PHP  JAVA  Python  CShar */