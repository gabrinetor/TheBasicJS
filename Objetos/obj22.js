//Classe é convertida em Função
class LancamentoFinanceiro {
    constructor(nome = "Genérico", valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))  //percorrendo todos os lançamentos do Array e dando um push no objeto
    } 

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {  //pra cada um dos lançamentos, eu vou somar o valor consolidado
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new LancamentoFinanceiro('Salario', 45000)
const contaDeLuz = new LancamentoFinanceiro('Luz', -220)

const contas = new CicloFinanceiro(6, 2020)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())
    /* 44780 */