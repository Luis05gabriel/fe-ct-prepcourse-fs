function combine(str1, str2, str3) {
   // Esta función debe combinar de forma alternada cada caracter de cada string.
   // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
   // Los strings pueden tener cualquier tamaño.
   // EJEMPLOS
   // combine("abc", "", "123") == "a1b2c3"
   // combine("abc", "12345", "") == "a1b2c345"
   // combine("abc", "12345", "67") == "a16b27c345"
   let result = '';
   let i = 0;
 
   // Iteramos mientras haya caracteres en al menos una de las cadenas
   while (i < str1.length || i < str2.length || i < str3.length) {
     // Si hay caracteres en str1 en la posición i, los añadimos a result
     if (str1[i] !== undefined) {
       result += str1[i];
     }
     // Si hay caracteres en str2 en la posición i, los añadimos a result
     if (str2[i] !== undefined) {
       result += str2[i];
     }
     // Si hay caracteres en str3 en la posición i, los añadimos a result
     if (str3[i] !== undefined) {
       result += str3[i];
     }
     // Incrementamos i para pasar al siguiente caracter
     i++;
   }
 
   return result;
 
}

module.exports = combine;

console.log (combine("Hola", "5068", "familia"));