function operadoresLogicos(num1, num2, num3) {
  if (num1 === 0 && num2 === 0 && num3 === 0) {
    return "Error";
  } else if (num1 < 0 || num2 < 0 || num3 < 0) {
    return "Hay negativos";
  } else if (num1 > num2 && num1 > num3 && num1 > 0) {
    return "Numero 1 es mayor y positivo";
  } else if (num3 > num1 && num3 > num2) {
    return num3 + 1;
  } else {
    return false;
  }
}


module.exports = operadoresLogicos;

console.log (operadoresLogicos(15,5,6));
console.log (operadoresLogicos(0,0,0));
console.log (operadoresLogicos(4,5,6));