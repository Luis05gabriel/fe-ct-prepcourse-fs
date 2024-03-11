function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
    // Comprueba si la fecha es válida
    if (Object.prototype.toString.call(fecha) === '[object Date]') {
      // Verifica si es un objeto Date válido
      if (isNaN(fecha.getTime())) {  // Si al convertirlo a tiempo obtiene NaN
        return false; // La fecha no es válida
      } else {
        return true; // La fecha es válida
      }
    } else {
      return false; // No es un objeto Date
    }
  
}

module.exports = esFechaValida;

console.log(esFechaValida(17/2/2024));
console.log(esFechaValida(new Date()));