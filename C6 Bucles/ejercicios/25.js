function esPalindromo(string) {
   // La función recibe un argumento "string".
   // Verifica si este string es palíndromo o no.
   // Retorna true si lo es, caso contrario, retorna false.
   // IMPORTANTE: Un palíndromo es una palabra o frase
   // que se lee igual hacia adelante que hacia atrás.
   // Tu código:
   // Convertimos el string a minúsculas y eliminamos los espacios
  var textoSinEspacios = string.toLowerCase().replace(/ /g, '');
  var longitud = textoSinEspacios.length;

  // Iteramos hasta la mitad de la longitud del string
  for (var i = 0; i < longitud / 2; i++) {
    // Comparamos el caracter en la posición actual con su simétrico desde el final del string
    if (textoSinEspacios[i] !== textoSinEspacios[longitud - 1 - i]) {
      return false; // Si hay una diferencia, no es un palíndromo
    }
  }

  return true; // Si no encontramos diferencias, es un palíndromo
}

module.exports = esPalindromo;

console.log (esPalindromo("menem"));
console.log (esPalindromo("hola"))