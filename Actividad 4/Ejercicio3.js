var contador = 0

for(let index = 1; index <= 10; index++){
    if(index % 2 == 0){
        contador += 1;
        consolre.log(`${index} es multiplo de 2`); //template literals, una expresion que incluya cadena de caracteres y variables
    }

}

console.log(`De 0 a 10 existen ${contador} multiplos de 2`);