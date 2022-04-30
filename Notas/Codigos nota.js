/*
var num =4;

if(num > 3){
    console.log('Estamos dentro de la condicion');
}
console.log('Fin de la ejecucion')


var dinero = prompt('cuanto dinero tienes?');

if(dinero >= 100000){
    console.log('Eres un cliente platinum?');
}else if(dinero >= 50000){
    console.log('Eres un cliente Gold');
}else if(dinero >= 30000){
    console.log('Eres un clliente classic');
}else{
    console.log('No puedes ser cliente del banco')
}
*/

/*
var comida = prompt('Que quieres comer');

switch(comida){
    case 'malteada':
            console.log('Puedes ir a McDonlads');
    break;

    case 'hamburguesas':
            console.log('Puedes ir a BurgerKing');
    break;

    case 'tacos':
        console.log('Puedes ir a Milagros');
    break;

    default:
        console.log('No sabemos que decirte');

}
*/

/*
var esMjuer = confirm('¿Eres mujer?');
var esPregnant = confirm('¿Estas embarazada?');
var weeks = prompt('¿Semanas de embarazo?');

console.log(esMjuer)
console.log(esPregnant)
console.log(weeks)

if( esMjuer && esPregnant && weeks > 9){
    console.log('Te puedes vacunar');
}else{
    console.log('No te puedes vacunar');
}
*/

/*

var esMjuer = confirm('¿Eres mujer?');
var esPregnant = confirm('¿Estas embarazada?');
var weeks = prompt('¿Semanas de embarazo?');

console.log(esMjuer)
console.log(esPregnant)
console.log(weeks)

if( esMjuer ){
    if(esPregnant){
        if(weeks > 9){
            console.log('Te puedes vacunar');
        }
    }
}else{
    console.log('No te puedes vacunar');
}
*/




/*WHILE*/
//Escribir datos y que se agreguen a una variable- Hasta que el usuario no escriba 'fin' no podremos salir del ciclo.

let list = prompt("Escribe un articulo")
let articulos = '';

while(list != "fin"){
    articulos += list + "\n";
    list = promt("Escribe un articulo");

}

console.log(articulos)



//Ejemplo 2

var arreglo = [];
var userInput;

while( !(userUnput == "")){
    userInput = prompt("Ingresa caracter");
    arreglo.push(userInput);

}

console.log("Introduciste estos valores: " + arreglo)



//Ejemplo funcion FOR

var contador = 0

for(let index = 1; index <= 10; index++){
    if(index % 2 == 0){
        contador += 1;
        consolre.log(`${index} es multiplo de 2`); //template literals, una expresion que incluya cadena de caracteres y variables
    }

}

console.log(`De 0 a 10 existen ${contador} multiplos de 2`);