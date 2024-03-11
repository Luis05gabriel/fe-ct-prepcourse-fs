function esEntero(num) {
  // Verificar si el número es un entero
  if (Number.isInteger(num)) {
    return true; // Retorna true si el número es un entero
  } else {
    return false; // Retorna false si el número no es un entero
  }
}


module.exports = esEntero;

console.log (esEntero (10));
console.log (esEntero (-10));
console.log (esEntero (1.5));
