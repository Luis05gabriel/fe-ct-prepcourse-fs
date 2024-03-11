function mayoriaDeEdad(edad) {
  // Determinar si la persona puede ingresar al evento según su edad.
  // Si tiene 18 años o más, retorna el string: "Allowed".
  // Caso contrario: "Not allowed".
  // Tu código:

  if (edad >= 18){
    console.log(" Allowed");
  }
  else{
    console.log ("Not allowed");
  }
}

module.exports = mayoriaDeEdad;

mayoriaDeEdad(18);
mayoriaDeEdad (12);
mayoriaDeEdad (37);
