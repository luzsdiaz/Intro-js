const array = [1, 2, 3, 4, 7, 10];

function sumArray (array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return(sum)   
}

const x = sumArray(array)
console.log(x);


