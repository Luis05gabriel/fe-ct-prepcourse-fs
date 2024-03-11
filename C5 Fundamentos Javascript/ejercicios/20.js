function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:

    // Verificar si la entrada es un string de un solo carácter
    if (typeof letra === 'string' && letra.length === 1) {
      // Convertir la letra a minúscula para hacer la comparación más sencilla
      letra = letra.toLowerCase();
  
        // Verificar si la letra es una vocal
        if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
          return "Es vocal"; // Si es una vocal, devolver "Es vocal"
        } 
        else 
        {
          return "Dato incorrecto"; // Si no es una vocal, devolver "Dato incorrecto"
        }
    } 
    else 
    {
      return "Dato incorrecto"; // Si la entrada no es un string de un solo carácter, devolver "Dato incorrecto"
    }
  
}

module.exports = esVocal;

console.log (esVocal("A"));
console.log (esVocal("hola"));
console.log (esVocal("12"));