//Par ou Impar

exibirTipo(10)
function exibirTipo(limite) {
    for (let i = 0; i <= limite; i++ ){
        if ( i % 2 === 0 )
            console.log(i, 'PAR')
        else   
            console.log(i, 'IMPAR')
    }
}
    /*  0 PAR
        1 IMPAR
        2 PAR
        3 IMPAR
        4 PAR
        5 IMPAR
        6 PAR
        7 IMPAR
        8 PAR
        9 IMPAR
        10 PAR */