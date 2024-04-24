/*
Salen de la oficina y de camino a los vestuarios conocen dos jugadores más.

Se presenta Nahitan Nández, mediocampista, que comenta que no tiene apodo.
Y a su lado, te estrecha la mano el mediocampista Federico Valverde, conocido como "Pajarito".

Ya es dificil llevar registro de todos los nombres nuevos.

Escriba un programa que:
- guarde en una colección
  - que acepte una fecha de nacimiento en formato string
  - y que devuelva la cantidad de años cumplidos
- imprima en consola un mensaje en el formato: {nombre} "{apodo}" {apellido} (edad).

Tip: consulten los métodos de la clase Date
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

var i = 0;
function contar(i) {
  for (i; i < 11; i++) {

    console.log(i);
  }
}
setTimeout(contar, 1000, i++)

const prompt = require("prompt-sync")();

console.log("ingrese los datos del juagdor");
console.log("")
console.log("cual es el nombre del jugador que desea ingresar?");
var nombrejug = prompt("cual es el nombre del jugador que desea ingresar?");
console.log("cual es el apellido del jugador que desea ingresar?");
var apellidojug = prompt("cual es el apellido del jugador que desea ingresar?");
console.log("cual es el apodo del jugador que desea ingresar? (si no tiene apodo ingresa none)");
var apodojug = prompt("cual es el apodo del jugador que desea ingresar? (si no tiene apodo ingresa none)");
console.log("por favor ingresa la fecha de nacimiento en este formato (año-mes-dia)");
var fechanac = prompt("por favor ingresa la fecha de nacimiento en este formato (año-mes-dia)");

function calcularEdad(fechanac) {
  var nacimiento = new Date(fechanac);
  var fechaActual = new Date();
  var edad = fechaActual.getFullYear() - nacimiento.getFullYear();

  if (nacimiento.getMonth() > fechaActual.getMonth() || (nacimiento.getMonth() === fechaActual.getMonth() && nacimiento.getDate() > fechaActual.getDate())) {
    edad--;
  }
  return edad;
}

var edadjugador = calcularEdad(fechanac);

console.log(edadjugador);

var nuevojuagdor = {
  nombre: nombrejug,
  apellido: apellidojug,
  apodo: apodojug,
  fechanacimiento: fechanac,
  edad: edadjugador
}

let Arrayjuagador = [];

nuevojuagdor.push(nuevojuagdor);

for (i = 0; i < nuevojuagdor.length; i++) {
  console.log("la los datos del jugador son nombre:" + Arrayjuagador[i].nombre + " ,apellido:" + Arrayjuagador[i].apellido + " ,apodo: " + Arrayjuagador[i].apodo + " ,edad:" + Arrayjuagador[i])
}
