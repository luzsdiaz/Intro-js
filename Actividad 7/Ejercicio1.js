//Crear una funcion que recibe 2 parametros (una oracion y la palabra a buscar).
//Retornar true o flase en caso de que una oracion contenga una palabra dada, es decir, si yo mando "Hola mundo" y mando la palabra 
//a buscar "perro" me debe retornar un false. En cambio si mando "mundo" entonces debe retornar true



function findWord (sentence, word) {

    return sentence.indexOf(word) != -1;
}

console.log(findWord("en esta oracion quiero buscar una palabra", "hola"));
