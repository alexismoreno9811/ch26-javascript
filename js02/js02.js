console.log(`Sesion JS02`);

//--------------------Función declarada------------------
// function delaration, function statement
// Una característica es que las funciones declaradas tiene hostiong

console.log(`El resultado de 5 * 10 = ${multiplica(5,10)}`); // Invocando la función 

function multiplica(operandoA, operandoB) {
  const resultado = operandoA * operandoB;
  console.log(resultado);
  return resultado;
}

function divide(dividendo , divisor){
  return dividendo / divisor;
}

console.log(divide(5, 2));
console.log(divide(5, "2"));
console.log(divide("5", "2"));
console.log(divide("5 0", "2"));