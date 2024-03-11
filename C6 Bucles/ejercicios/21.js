function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:

  while (numero % 2 === 0){
    return true;
  }
  return false;

}

module.exports = esPotenciaDeDos;

console.log (esPotenciaDeDos(6));
console.log (esPotenciaDeDos(-10));