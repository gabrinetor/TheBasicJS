//Getters & Setters
const sequencia = {
    _valor: 1,  //acessar somente internamente . convenção que é privada
    get valor() { return this._valor++ },
    set valor(valor) {  //só aplicar valor quando achar necessário
        if(valor > this._valor){    //teste só permite colocar valor pra frente na sequencia
            this._valor = valor 
        }
    }
}

console.log(sequencia.valor, sequencia.valor)   //incrementa
    /* 1 2 */

sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
    /* 1000 1001 */

sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)   //ignora e so incrementa
    /* 1002 1003 */