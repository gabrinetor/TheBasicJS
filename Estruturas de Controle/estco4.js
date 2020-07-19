//For/Loop For
// 1.For
// 2.While
// 3.Do..while
// 4.For..In
// 5.For..Of

for(let i = 0; i < 3; i++){
    console.log('Revisar de vez enquando!', i)
}   /*  Revisar de vez enquando! 0
        Revisar de vez enquando! 1
        Revisar de vez enquando! 2 */

for(let i = 0; i <= 5; i++){
    if(i % 2 !== 0){ //só nums ímpares
        console.log(i) /* 1  3  5 */
    }
}

for(let i = 5; i >= 1; i--){
    if(i <= 5 && i >= 1){
        console.log(i) /* 5  4  3  2  1 */
    }
}