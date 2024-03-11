function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  var contador = 0; // Inicializamos un contador para controlar el límite de 8 veces
  do {
    num += 5; // Aumentamos el valor de num en 5 en cada iteración
    contador++; // Incrementamos el contador
  } while (contador < 8); // Ejecutamos el bucle mientras el contador sea menor que 8
  return num; // Retornamos el valor final de num
}

module.exports = doWhile;

console.log (doWhile(4));
console.log (doWhile(12));