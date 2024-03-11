function esPositivo(num) {
  // La función recibe un entero. Devuelve como resultado un string que indica si el número
  // es positivo o negativo.
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  // Tu código:

  if (num > 0)
  {
    return "El numero es positivo";
  }
  else if (num < 0)
  { 
    return " El numero es negativo";
    
  }
  else 
  {
    return false;
  }
  
}

module.exports = esPositivo;

console.log(esPositivo(5));
console.log(esPositivo(0));
console.log(esPositivo(20));
