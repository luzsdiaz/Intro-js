//Desarrolla un metodo para verificar si una palabra es un palindromo. 
//casos de prueba:
// var word=1 "madam"  var word2 = "computadora"

let word="Ana";

function isPalindromo(palabra){
    const palabraAlreves=palabra.split("").reverse();
    const palabraNormal=palabra.split("");
    let cont=0;
    for(let i=0; i<palabraAlreves.length; i++){
        if(palabraNormal[i].toLowerCase()!=palabraAlreves[i].toLowerCase()) return "Este no es un palindromo";
        else cont=1;
    }
    if(cont==1) return "Es un palindromo";
}

var result= isPalindromo(word);
console.log(result);
