//Switch Case
let permissao   //comum, gerente, diretor
permissao = 'comum'

switch (permissao) {
    case 'comum':
        console.log('usuário comum')
        break;

    case 'gerente':
        console.log('usuario gerente')
        break;

    case 'diretor':
        console.log('usuario diretor')
        break;
            
    default:
        console.log('Usuário não reconhecido')
}   /* usuário comum */