let ana = {
    nome: "Ana da Rosa",
    cursos: ["Análise de Algoritmos", "Estrutura de Dados", "Introdução a Computação"],
    isActive: true, 
    pontos: 2000
};

let pedro = {
    nome: "Pedro de Andrade",
    cursos: ["HTML", "Estrutura de Dados", "JavaScript"],
    isActive: true,
    pontos: 1448
};

let roberta = {
    nome: "Roberta Venenzuela",
    cursos: ["Análise de Algoritmos", "Estrutura de Dados", "Introdução a Computação", "Estatistica"],
    isActive: false,
    pontos: 10000
};

let estudantes = [ana, pedro, roberta];

for (estudante of estudantes) {
    console.log(estudante.nome);
}
    /* Ana da Rosa
       Pedro de Andrade
       Roberta Venenzuela */

for (let i = 0; i < estudantes.length; i++) {
    console.log(estudantes[i].nome);
}
    /* Ana da Rosa
       Pedro de Andrade
       Roberta Venenzuela */

//apenas os ativos
for (estudante of estudantes) {
    if(estudante.isActive) {
        console.log(estudante.nome);
    }
}
    /* Ana da Rosa
       Pedro de Andrade */

for (estudante of estudantes) {
    
    console.log( estudante.nome + " está cursando: " );

    for (curso of estudante.cursos) {
        console.log(curso);
    }

    console.log("__________________________________");
}
    /* Ana da Rosa está cursando: 
    Análise de Algoritmos
    Estrutura de Dados
    Introdução a Computação
    __________________________________
    Pedro de Andrade está cursando: 
    HTML
    Estrutura de Dados
    JavaScript
    __________________________________
    Roberta Venenzuela está cursando: 
    Análise de Algoritmos
    Estrutura de Dados
    Introdução a Computação
    Estatistica
    __________________________________ */

//somar todos os pontos
let valorTotal = 0;
for (estudante of estudantes){
    valorTotal += estudante.pontos;
}
console.log(valorTotal);
    /* 13448 */

//fazer o mesmo com reduce
let valorTotal = estudantes.reduce((a,c) => a + c.pontos, 0)
console.log(valorTotal)
    /* 13448 */
