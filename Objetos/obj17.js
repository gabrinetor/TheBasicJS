console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
    /*  function
        function
        function  */

/* String, Array e Object são funções, 
portanto têm um atributo chamado .prototype , 
porque toda função tem um atributo chamado .prototype */

//reverter uma String
String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}    

console.log('Tr31n4nd0 J4va5cr1pt'.reverse())
    /* tp1rc5av4J 0dn4n13rT */

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())    /* 1 */
console.log(['a', 'b', 'c'].first())    /* a */

//sobrescrevendo o comportamento toString
String.prototype.toString = function () {
    return 'Lascou tudo'
}

console.log('Tr31n4nd0 J4va5cr1pt'.reverse()) //efeito colateral: reverteu o anterior!
    /* odut uocsaL */

//Dica: Não substitua comportamentos que já existam dessa forma global.