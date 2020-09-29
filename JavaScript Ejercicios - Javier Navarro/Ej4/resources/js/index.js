// Variables
var arrSize;

// Arreglos
var arrChars = []

arrSize = prompt("¿Cuántos carácteres desea capturar?")
arrSize = parseInt(arrSize)

// Capturar carácteres
for (var i = 0; i < arrSize; i++){
    arrChars.push(prompt("Ingrese el carácter " + (i + 1)))
}


alert("Carácteres en orden de captura: " + arrChars)
alert("Carácteres en orden inverso: " + arrChars.reverse())
alert("Carácteres en orden alfabético: " + arrChars.sort())