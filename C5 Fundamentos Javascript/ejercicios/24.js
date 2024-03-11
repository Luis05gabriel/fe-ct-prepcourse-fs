function divide(x, y) {
  // La función recibe dos argumentos "x" e "y" que son números.
  // Retorna el resultado de su división.
  // Tu código:

  if (y === 0)
  {
    return " No se puede dividir por cero";
  }
  else{
    return x/y;
  }
}

module.exports = divide;

console.log (divide(10,0));
console.log( "El resultado de la division es : ",divide(25,5));