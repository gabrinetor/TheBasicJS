// Encontrar o String
/* criar um método (função) que leia as propriedades (atributos, chaves) 
    dentro de um objeto e exibir somente as propriedades do tipo string 
    que estejam nesse objeto. */

const filme = {
    titulo: 'Vingadores', 
    ano: 2019, 
    diretor: 'Irmaos Russo', 
    personagem: 'Hulk'
}

exibirPropriedades(filme)
function exibirPropriedades(obj) {
    for (prop in obj)  //para inteirar sob um objeto
        if (typeof obj[prop] === 'string')  //Observe que é preciso fazer a verificação com obj[prop] e não com prop, pq vc quer verificar o que está dentr das propriedades do objeto
            console.log(prop,obj[prop])
}   
        /*  titulo Vingadores
            diretor Irmaos Russo
            personagem Hulk */