
var num = Number(prompt("Ingrese un numero"));
var contador = 1;
do{
    if(contador>num){
        console.log("Número no valido");
        break;
    }
    if(contador%5==0){
        console.log(""+contador+"");
    }
    contador++
}while(contador<=num);

console.log("Estos serian los multiplos de 5 del numero: " + num)
