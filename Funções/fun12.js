// FizzBuzz
// 3 = Fizz / 5 = Buzz / multiplos de 3 e 5 = FizzBuzz

const fizzBuzz = num => {

    for(let i = 1; i <= num; i++) {

        if(i % 3 === 0 && i % 5 === 0) {  //verificar se o numero é multiplo de 3 e 5
            console.log('fizzbuzz')
        }  

        else if(i % 3 === 0) {  //verificar se numero é multiplo de 3
            console.log('fizz')
        } 

        else if(i % 5 === 0) {  //verificar se numero é multiplo de 5
            console.log('buzz')
      
        } 
        
        else {  //se não, apresente apenas o número
            console.log(i)
        }
        
    }
}