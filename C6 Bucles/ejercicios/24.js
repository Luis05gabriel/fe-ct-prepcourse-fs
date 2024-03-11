function invertirTexto(texto) {
   // La función recibe un argumento "texto" que es un string.
   // Tu objetivo es invertir el string y devolver el string invertido.
   // Tu código:
     // Convertimos el texto a un array de caracteres, invertimos el orden del array y lo unimos de nuevo en un string
  return texto.split('').reverse().join('');
}

module.exports = invertirTexto;

console.log (invertirTexto("motoneta"));