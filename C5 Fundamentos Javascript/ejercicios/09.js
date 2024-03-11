function esNuloOIndefinido(valor) {
  // La función recibe un argumento "valor".
  // Si este valor es null o undefined, retorna true.
  // De lo contrario, retorna false.
  // Tu código:
  if (valor === undefined || valor === null){
    return true;
  }
  
    else {return false
  }
}

module.exports = esNuloOIndefinido;

console.log (esNuloOIndefinido(null));
console.log(esNuloOIndefinido(undefined));
console.log(esNuloOIndefinido(5));
