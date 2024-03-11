function esNumeroPrimo(numero) {
  if (numero <= 1) {
    return false; // Los números menores o iguales a 1 no son primos
  }
  
  // Comprobamos si el número es divisible por algún número entre 2 y su raíz cuadrada
  // Si es divisible por algún número entre 2 y su raíz cuadrada, no es primo
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  
  // Si no es divisible por ningún número entre 2 y su raíz cuadrada, entonces es primo
  return true;
}


module.exports = esNumeroPrimo;

console.log(esNumeroPrimo(5));
console.log(esNumeroPrimo(1));