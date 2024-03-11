function menosQueNoventa(num) {
  // Retorna true si el argumento "num" es menor que noventa.
  // De lo contrario, retorna false.
  // Tu código:

  if (num < 90)
  {
    return true;
  }
  else
  {
    return false;
  }
  
}

module.exports = menosQueNoventa;

console.log (menosQueNoventa(85));
console.log (menosQueNoventa(90));
