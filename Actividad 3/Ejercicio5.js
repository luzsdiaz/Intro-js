var num1 = Number(prompt("Ingresa número 1"));
var num2 = Number(prompt("Ingresa número 2"));
var num3 = Number(prompt("Ingresa número 3"));

if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}

console.log("El numero mas grande es " + largest);
