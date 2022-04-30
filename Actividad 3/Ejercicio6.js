var nombre = prompt("Cual es tu Nombre");
var edad = (prompt("Cual es tu edad"));

if( edad >= 18 && nombre=="Mario" ){
    alert("Ingresa como VIP")
}else if ( edad >= 18 && nombre=="Carlos"){
    alert("Ingresa como VIP")
}else if(edad>18){
    alert("Ingresa a la discoteca")
}else if(edad<18){
    alert("No puede ingresas a la discoteca")
}