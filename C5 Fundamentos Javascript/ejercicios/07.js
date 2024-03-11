function esTipoDato(valor) {
  // Utiliza el operador typeof para obtener el tipo de dato del valor
  return typeof valor;
}

// Prueba de la función con diferentes valores
console.log(esTipoDato("Hola")); // Devuelve "string"
console.log(esTipoDato(123)); // Devuelve "number"
console.log(esTipoDato(true)); // Devuelve "boolean"
console.log(esTipoDato({})); // Devuelve "object"
console.log(esTipoDato([])); // Devuelve "object", ya que las matrices son objetos en JavaScript


module.exports = esTipoDato;
