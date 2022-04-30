var num1 = Number(prompt("Ingresa un número"));
var num2 = Number(prompt("Ingresa otro número"));

if(num1 < num2){
    console.log(num1 + " es menor que " + num2 );
}else if(num1 > num2){
    console.log(num2 + " es menor que " + num1);
}else{
    console.log("Debes poner numeros diferentes")
}