console.log(`Sesion JS02`);

//--------------------Función declarada------------------
// function delaration, function statement
// Una característica es que las funciones declaradas tiene hoistiong

console.log(`El resultado de 5 * 10 = ${multiplica(5, 10)}`); // Invocando la función 

function multiplica(operandoA, operandoB) {
  const resultado = operandoA * operandoB;
  console.log(resultado);
  return resultado;
};

function divide(dividendo, divisor) {
  return dividendo / divisor;
};

console.log(divide(5, 2));
console.log(divide(5, "2"));
console.log(divide("5", "2"));
console.log(divide("5 0", "2"));

//-------------------------Funciones expresadas----------------
// Function expressions
// Son declaradas dentro de la asignación de una variable
// Estas funciones pueden ser anonimas (no tienen nombre)
// Las funciones expresadas no tienen hoisting, por que no se
// carga en memoria hasta que se utilice.

/* Sintaxis

const nombreVariable = function nombreFuncion( párametros){
  instrucciones;
}
*/

const sum = function sumatoria(a, b) {
  return a + b;
};

const resta = function (a, b) {
  return a - b;
};

const potencia = function (a, b) {
  return a ** b;
};

console.log(sum(9, 9)); // 18
console.log(resta(90, 20)); // 70

//---------------Funciones autoinvocadas-----------------
// self-invoking functions
// se autoinvocan, se pueden definir con funciones anónimas

(function () {
  console.log("Me auto invoco en la función");
})();

//--------------------Funciones Flecha----------------
// Arrow Functions
// Son funciones similares a las funciones declaradas, pero:
// No requieren la palabra function
// Si tiene una sola instrucción no requiere las {}
// Si la instrucción es el mismo retorno, no requiere la palabra return

/* const areaRectangulo = function(base, altura){
  return base * altura;
} */

const areaRectangulo = (base, altura) => base * altura;
console.log(`Área de ractangulo 5X3: ${areaRectangulo(5, 3)}`);

//------------------Parámetros default-----------------
/**
 * Este comentario es documentación de la función
 * @param {number} base esto es la descripción de base 
 * @param {number} altura esto es la descripción de altura
 * @returns área del rectangulo
 */
const areaTriangulo = (base = 1, altura = 1) => (base * altura) / 2;

console.log(`Área de triangulo b:5 a:10 = ${areaTriangulo(5, 10)}`);
console.log(`Área de triangulo b:8 = ${areaTriangulo(8)}`);

//-------------------- Parámetros rest ----------------------------
// Rest Parameters
// Nos permite respresentar una serie de valores indefinidos en los argunemtos
// Estos se presentan como array.
// Debe estar al final de la lista de parámetros

function sumatoriaVariosNumeros(a, b, ...restoDatos) {
  let suma;
  suma = a + b;
  for (let index = 0; index < restoDatos.length; index++) {
    suma += restoDatos[index];
    
  }
  return suma;
}

console.log(`Sumatoria de varios números: ${sumatoriaVariosNumeros(5, 6)}`);
console.log(`Sumatoria de varios números: ${sumatoriaVariosNumeros(5, 6, 9, 10)}`);
console.log(`Sumatoria: ${sumatoriaVariosNumeros(5, 6, 9, 10, 20, 50)}`);

// ---------------- Funciones de Callback ----------------
// Función que se pasa a otra función como argumento, para luego invocarse
// para completar algún tipo de rutina o acción.

// 3 funciones, una que imprima en consola, alert y DOM h1.

function imprimirConsola(nombre) {
  console.log(`Hola ${nombre}`);
}

function imprimirAlert(nombre) {
  alert(`Hola ${nombre}`);
}

function imprimirDom(nombre) {
  const h1 = document.createElement("h1");
  h1.innerHTML = nombre;
  document.body.appendChild(h1);
}

imprimirConsola(`Alexis`);
imprimirAlert(`Alexis`);
imprimirDom(`Hola Alexis`);

const addH1 = (mensaje) =>{
  document.querySelector("#div").innerHTML = `<h1>${mensaje}</h1>`;
};

function getNamePrintToConsole() {
  const name = prompt(`Dime tu nombre: `);
  const text = `${name}, espero tengas un gran día`;
  imprimirConsola(text);
}

function getNamePrintToDOM(){
  const name = prompt("Dime tu nombre");
  const text = `Hola ${name}, espero tengas un gran día`;
  addH1(text);
}

getNamePrintToConsole();
getNamePrintToDOM();