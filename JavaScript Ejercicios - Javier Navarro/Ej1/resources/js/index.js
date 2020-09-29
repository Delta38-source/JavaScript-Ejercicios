let hours = prompt("Introduzca sus horas de trabajo:")
hours = parseInt(hours)

var workH = 20
var extras = 25
var result;

if (hours > 40) {
    result = (hours - 40) * extras
    hours = 40
}else{
    result += hours * workH
}

alert("Su salarario será de: " + result)