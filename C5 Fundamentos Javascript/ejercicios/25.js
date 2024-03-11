function obtenerResto(x, y) {
  // La función recibe dos argumentos "x" e "y" que son números.
  // Obten el resto de la división de "x" entre "y".
  // Tu código:
  if (y === 0)
  {
    return " No se puede dividir por cero";
  }
  else{
    return x % y;
  }

}

module.exports = obtenerResto;

console.log (obtenerResto(10,3));
console.log (obtenerResto(9,0));