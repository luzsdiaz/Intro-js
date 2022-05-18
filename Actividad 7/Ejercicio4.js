//Crea un programa. el cual sirva para convertir temperaturas. De celsius a fahrenheit  y viceversa. 
//Utiliza las expresiones matematicas necesarias para la conversion.
// Quedicho programa reciba como argumentos las temperaturas y regresa el resultado imprimiendo en pantalla la conversion.
// Solucion libre de imaginacion

var temp = 70
var scale = 0
var res = 0

function convTemp(temperatura, escala){
    if (escala == 0){
            res = (temperatura*9/5)+32
    }
    else {
        res = (temperatura-32)*5/9
    }
    return res
}

console.log(convTemp(temp, scale))

