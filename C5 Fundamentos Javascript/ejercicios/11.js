function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:
  var fechaActual = new Date(); // Obtenemos la fecha actual
  var añoActual = fechaActual.getFullYear(); // Obtenemos el año actual

  var añoNacimiento = fechaNacimiento.getFullYear(); // Obtenemos el año de nacimiento
  
  // Restamos el año de nacimiento al año actual para obtener la edad
  var edad = añoActual - añoNacimiento;

  // Comparamos la edad con 18 y devolvemos true si es mayor o igual a 18, caso contrario devolvemos false
  return edad >= 18;
  
 

}

module.exports = esMayorDeEdad;
var fechaNacimientoPersona = new Date(2000, 5, 15); // 15 de Junio de 2000
console.log(esMayorDeEdad(fechaNacimientoPersona)); // Devolverá true si la persona tiene 18 años o más, de lo contrario devolverá false.
