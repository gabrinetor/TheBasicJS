// Medidor de Velocidade
// velocidade máxima até 70km/h
// a cada 5km acima do limite vc ganha 1 ponto na carteira
// Math.floor()
// Ao ultrapassar de 12 pontos, a carteira é suspendida
verificarVelocidade(81)

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70
    const kmPorPonto = 5
    if (velocidade <= 70){
        console.log('Ok')
    } else {
        const pontos = Math.floor((velocidade - velocidadeMaxima) / kmPorPonto)
        if (pontos >= 12)
            console.log('Carteira Suspensa')
        else
            console.log('Pontos', pontos) /* Pontos 2 //em velocidade 81 */
    }
}