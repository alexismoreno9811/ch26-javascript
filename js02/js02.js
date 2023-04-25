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

/* 
imprimirConsola(`Alexis`);
imprimirAlert(`Alexis`);
imprimirDom(`Hola Alexis`); 
*/

const addH1 = (mensaje) => {
  document.querySelector(".saludo").innerHTML = `<h1>${mensaje}</h1>`;
};

function getNamePrintToConsole() {
  const name = prompt(`Dime tu nombre: `);
  const text = `${name}, espero tengas un gran día`;
  imprimirConsola(text);
}

function getNamePrintToDOM() {
  const name = prompt("Dime tu nombre");
  const text = `Hola ${name}, espero tengas un gran día`;
  addH1(text);
}

function getNameAndPrint(funcionImprimir) {
  const name = prompt("Dime tu nombre");
  const text = `Hola ${name}, espero tengas un gran día`;
  funcionImprimir(text);
}

//getNameAndPrint(imprimirConsola);
//getNameAndPrint(addH1);

//----------------------------------------------------------------------------
/*
    Ejercicio 2
    Escribe una función que tome un arreglo de números,
    duplique el valor de cada número del arreglo,
    e imprima el nuevo arreglo actualizado.
    [5, 10, 15, 20, 25] -> [10, 20, 30, 40, 50]
*/
function double(arr) {
  const doubleNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    const duplicate = arr[i] * 2;
    doubleNumbers.push(duplicate);
  }
  return doubleNumbers;
}

// Función que nos sirve de callback
// const duplicate = (number) => number * 2;

/* function doubleWithMap(array) {
  const duplicateNumber = array.map(function (number) {
    return number * 2;
  });
  return duplicateNumber;
} */
function doubleWithMap(array) {
  return array.map( number => number * 2);
  }

const numbers = [5, 10, 15, 20, 25];
console.log(double(numbers));
console.log(doubleWithMap(numbers));
console.log(numbers.map(number => number * 2));
console.log(numbers);

const student1Courses = ["Math", "English", "Programming", "Biology", "Physics", "Music"];
const student2Courses = ["Geography", "Spanish", "Programming", "Music"];
const student3Courses = ["Music"];

function commonCourses(arr1, arr2){
  const courses = [];
  for(let i=0; i<arr1.length; i++){
      for(let j=0; j<arr2.length; j++){
          if(arr1[i]===arr2[j])
              courses.push( arr2[j]);
      }
  }
  return `Cursos en comun ${courses}`;
}

// Usar filter y usar includes.
function commonCoursesV2(student1Courses, student2Courses) {
  return student1Courses.filter(course => student2Courses.includes(course) && student3Courses.includes(course) );
}

console.log(commonCourses(student1Courses, student2Courses));
const comunCursos = commonCoursesV2(student1Courses, student2Courses);
console.log("Common courses: ", comunCursos.join(", "));

// -------------------- Contar la cantidad de caracteres de una frase ------------
// pepe pecas pica papas con un pico y una pala
// la cantidad de letras 'p': 8
// resolverlo usando arrow function.

const frase = "Pepe pecas pica papas con un pico y una pala";
console.log(frase);

function contarP(frase,letraB) {
  const arr = frase.toLowerCase().split("");
  const letraFiltrada =[letraB];
  return arr.filter(letra => letraFiltrada.includes(letra)).length;
}

const countChar = (p, phrase) => phrase.toLowerCase().split("").filter(c => c == p).length;

console.log(`la cantidad de letras 'p': ${contarP(frase, "p")}`);
console.log(`la cantidad de letras 'p': ${countChar("p", frase)}`);

//---------------------------Funciones recursivas--------------------------
// Es una técnica de programación en donde la función se llama así misma.
// Se debe tener precaución de no entrar a un bucle infinito.

/* 
  function funcionRecursiva(valor){
    if (condiciónDeParo){
      
    }
    else{
      // Lamada recursiva.
    }
  }
*/


const factorialConCicloFor = (numero) => {
  let total = numero;
  for (let i = 2; i < numero; i++) {
    total *= i;
  }
  return total;
};

function factorialRecursivo (numero) {
  
  if (numero === 1) {
    return 1;
  } else {
    return numero * factorialRecursivo(numero-1);
  }
}

console.log(`Factorial de 5: ${factorialConCicloFor(5)}`);
console.log(`Factorial de 5: ${factorialRecursivo(5)}`);

