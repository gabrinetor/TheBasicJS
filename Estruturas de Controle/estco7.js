//Loop For..In
const pessoa = {
    nome: 'Rosana', 
    idade: 56
}
//key-value / chave = atributo , valor = valor
for(let chave in pessoa){
    console.log(chave, pessoa.nome)
    /* nome Rosa
    idade Rosana */
}

const cores = ['Vermelho', 'Azul', 'Verde']

for (let indice in cores) {
    console.log(indice, cores.indice)
}   
    /*  0 undefined
        1 undefined
        2 undefined */