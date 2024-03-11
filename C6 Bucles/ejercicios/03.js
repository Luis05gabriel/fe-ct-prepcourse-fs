function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:

  if (x >= y){  // comparo si x es mayor igual que "y" para que lo retorne
    return x;
  }
  else {
    return y;  // caso contrario, retorna "y"
  }
}

module.exports = obtenerMayor;

console.log (obtenerMayor(10,5));
console.log (obtenerMayor(2,15));
console.log (obtenerMayor(5,5));