// Variables
var low;
var high;

// Arreglos
var array = [];

// Establecer el tamaño del arreglo.
var arrSize = prompt("Ingrese el tamaño del arreglo: ")
arrSize = parseInt(arrSize)

// Llenar el arreglo con valores
for (var i = 0; i < arrSize; i++){
    array.push(prompt("Valor para la casilla " + (i + 1)))
    array[i] = parseInt(array[i])
}

// Mayor y Menor
high = array.reduce(function(a, b){
    return Math.max(a, b)
})
console.log(high)
low = array.reduce(function(a, b){
    return Math.min(a, b)
})
console.log(low)

// Resultados
alert("El numero más grande es: " + high)
alert("El numero más pequeño es: " + low)