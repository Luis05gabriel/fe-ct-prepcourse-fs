function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  if (a > b) {
    return 0; // Si a es mayor que b, el producto es 0
  }

  // Inicializar el producto
  var producto = 1;

  // Iterar desde a hasta b
  for (var i = a; i <= b; i++) {
    producto *= i; // Multiplicar cada número en el rango
  }

  return producto; // Retornar el producto final
}


module.exports = productoEntreNúmeros;

console.log (productoEntreNúmeros(1,7));