// "Oh, this is going to be easy."
let subjects = prompt("Introduzca cuántas materias lleva:")
console.log(subjects)
// "Ah yes! The negotator, general parseInt."
subjects = parseInt(subjects)

// "Your variables will make a fine addition to my collection!"
var grades = [];
var total = 0;
var high = 0;
var low = 0;

var i; // "This is where the fun begins!
for (i = 0; i < subjects; i++){
    grades.push(prompt("Calificación de la materia " + (i + 1)))
    grades[i] = parseInt(grades[i])

    console.log(grades[i])
    total += grades[i]
}

// total: "Hello there"
// avg: "General total! You are a high one! hehe, average him!"
var avg = total / grades.length;
alert("Su promedio es: " + avg);



// Mayor y Menor
high = grades.reduce(function(a, b){
    return Math.max(a, b)
}) // "High Skywalker! I was expecting someone with your reputation to be a little, older..."
console.log(high)
low = grades.reduce(function(a, b){
    return Math.min(a, b)
}) // "General Low, you are shorter than I expected."
console.log(low)



alert("Su calificación más alta fue: " + high) // "It's over Anakin, I have the highground!"
alert("Su calificación más baja fue: " + low) // "You underestimate my power!"