function tieneTresDigitos(num) {
  // Convertir el número a cadena (string)
  var numStr = num.toString();
  // Verificar si la longitud de la cadena es igual a 3
  if (numStr.length === 3) {
    return true; // Retorna true si tiene tres dígitos
  } else {
    return false; // Retorna false si no tiene tres dígitos
  }
}


module.exports = tieneTresDigitos;

console.log (tieneTresDigitos(100));
console.log (tieneTresDigitos(123));
console.log (tieneTresDigitos(1000));
