// Data e hora
let d = new Date()
console.log(d.toString())  
    /* Sun Jul 19 2020 06:24:01 GMT-0300 (GMT-03:00) */

console.log(d.toUTCString())
    /* Sun, 19 Jul 2020 09:26:51 GMT */

console.log(d.toDateString())
    /* Sun Jul 19 2020 */

console.log('getDate ' + d.getDate())
    /* getDate 19 */

console.log('getDay ' + d.getDay()) //de 0 a 6
    /* getDay 0 */

console.log('getFullYear ' + d.getFullYear())
    /* getFullYear 2020 */

console.log('getHours ' + d.getHours())
    /* getHours 6 */

console.log('getMilliseconds ' + d.getMilliseconds())
    /* getMiliseconds 206 */

console.log('getMinutes ' + d.getMinutes())
    /* getMinutes 36 */

console.log('getMonth ' + d.getMonth()) //de 0 a 11
    /* getMonth 6 */

console.log('getSeconds ' + d.getSeconds())
    /* getSeconds 59 */

console.log('getTime ' + d.getTime())
    /* getTime 1595151593273 */

let d1 = new Date(86400000) // 01/01/1970
console.log(d1) /* 1970-01-02T00:00:00.000Z */
    
function formataData(data = new Date()){
    let dia = data.getDate()
    let mes = data.getMonth() + 1
    let ano = data.getFullYear()

    if(dia.toString().length == 1) dia = '0'+dia
    if(mes.toString().length == 1) mes = '0'+mes

    return dia+'/'+mes+'/'+ano
}
console.log(formataData())
    /* 19/07/2020 */