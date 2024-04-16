/*
Siguen su camino hacia la sala administrativa y son recibidos con mucha alegría.
Les preguntan si han conocido algún jugador hasta el momento y recuerdan a quien se encontraron en la entrada.

El secretario les comenta que es el jugador más joven que tiene la selección en plantilla (después del golero suplente).
Abre el cajón y busca rápidamente los datos del equipo y señala una fecha: 16/07/2003

Rápidamente intentan sacar la cuenta de cuantos años puede tener.

Escriba un programa que:
- declare una función llamada "edad"
  - que acepte una fecha de nacimiento en formato string
  - y que devuelva la cantidad de años cumplidos
- imprima en consola un mensaje en el formato: {nombre} "{apodo}" {apellido} (edad).

Tip: consulten los métodos de la clase Date
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date
*/
var jugador = {
  nombre: "Luciano",
  apellido: "Rodríguez",
  apodo: "Lucho",
  fechaNacimiento: "2003-07-16"
};

function calcularEdad(jugador) {
  var nacimiento = new Date(jugador.fechaNacimiento);
  var fechaActual = new Date();
  var edad = fechaActual.getFullYear() - nacimiento.getFullYear();
  // Verificar si el cumpleaños ha ocurrido este año
  var jugador = {
    nombre: "Luciano",
    apellido: "Rodríguez",
    apodo: "Lucho",
    fechaNacimiento: "2003-07-16"
  };

  function calcularEdad(jugador) {
    var nacimiento = new Date(jugador.fechaNacimiento);
    var fechaActual = new Date();
    var edad = fechaActual.getFullYear() - nacimiento.getFullYear();
    // Verificar si el cumpleaños ha ocurrido este año
    if (nacimiento.getMonth() > fechaActual.getMonth() || (nacimiento.getMonth() === fechaActual.getMonth() && nacimiento.getDate() > fechaActual.getDate())) {
      edad--;
    }
    return edad;
  }

  var edadjugador = calcularEdad(jugador);

  return edad;
}

var edadjugador = calcularEdad(jugador);
console.log("la edad del juagdor " + jugador.nombre + " " + jugador.apellido + " es " + edadjugador);
