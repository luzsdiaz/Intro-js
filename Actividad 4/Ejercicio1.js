
var num = Number(prompt("Ingrese un numero"));
var contador = 1;


while(contador <= num){
    if (contador % 5 == 0){
        console.log(contador);
    }
    contador++

}

console.log("Estos serian los multiplos de 5 del numero: " + num)
