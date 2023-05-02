console.log(`Sesion js05 operadores`);

// --------------- Operadores aritmeticos -----------
// Adición +
// Multiplicación *
// Substracción -
// División /
// Exponencial **
// Resto %

// Ejemplo
let dinero = 20 + 10; // 30

// --------------- Operadores de asignación -----------
// Asigna un valor a su operando izquierdo basandose en el valor de
// su operando derecho
// Asignación =
// Asignación de adición +=
dinero += 15; // dinero = dinero + 15;
// Asignación de multiplicación *=
// Asignación de substracción -=
// Asignación de división /=
// Asignación de exponencial **=
// Asignación de resto %=
12 + 7 + 12 + 4 + 1;

2 ** 3 ** 2;

// --------------- Operadores Unarios ------------------
// un operador unario realiza una operación en un solo operando.
// Negación -
dinero = -3;
console.log(dinero);
// a Numérico +
dinero = +dinero; // Sigue siendo -3
dinero = + `200`; // 200 numérico
console.log(dinero);
// typeof
// Operador lógico not
let valorBooleano = !true;
console.log(valorBooleano);

// Operadores de incremento y decremento
// Operador de pre-incremento y pre-decremento
// pre-incremento ++valor
// pre-decremento --valor

// operador de post-incremento y post-decremento
// post-incremento valor++
// post-decremento valor--

let numero = 10;
numero++; // 11
++numero; // 12
console.log(numero); // 12

let nuevoValor = numero++;
console.log(`nuevoValor ${nuevoValor}`);
console.log(`número ${numero}`);

nuevoValor = ++numero;
console.log(`nuevoValor ${nuevoValor}`);
console.log(`número ${numero}`);

let x = 3;
let y = ++x;
console.log(`x: ${x++} y: ${++y}`); // 4 - 5
console.log(`x: ${x} y: ${y}`);     // 5 - 5

// ----------------------- Operadores lógicos AND && y OR || -------

const a = true;
const b = false;
const c = true;
console.log(a || b && c); // true

// Operadores de corto circuito
// Cuando los operadores logicos AND y OR actuan sobre operandos diferentes a Booleanos.

// OP1 && OP2 si OP1 es verdadero, se realiza el resultado de OP2
console.log(a && `Holi crayoli`);
console.log(b && `Holi crayoli`);
console.log(NaN && `El valor es un número que se puede procesar`); // NaN
console.log(`false` && `El valor es false`); // EL valor es false
console.log(`` && `No hay dato`); // ``

// OP1 || OP2 si OP1 es verdadero, se realiza el resultado de OP1

console.log(a || `Holi crayoli`); // true
console.log(b || `Holi crayoli`); // `Holi crayoli`
console.log(NaN || `El valor es un número que se puede procesar`); // `El valor es un número que se puede procesar`
console.log(`false` || `El valor es false`); // `false`
console.log(`` || `No hay dato`); // `No hay dato`

const noDefinido = true;
console.log(noDefinido || theBigBang);

// Quiero imprimir "Estás Autorizado" si la variable isOnline y isActive son true.
const isOnline = true;
const isActive = true;
if (isOnline)
  if (isActive)
    console.log(`Estas autorizado`);
    
if (isOnline && isActive)
  console.log(`Estas autorizado`);

console.log(isOnline && isActive ? `Estas autorizado` : `No estas autorizado`);

console.log(isActive && isOnline && `Estás Autorizado`)

//----------------------------- Operadores relacionales --------------------
/* 
  Un operador de comparación compara sus operandos y devuelve un valor lógico en función de si la
  comparación es verdadera (true) o falsa (false). Los operandos pueden ser valores numéricos, de
  cadena, lógicos u objetos. Las cadenas se comparan según el orden lexicográfico estándar,
  utilizando valores Unicode. En la mayoría de los casos, si los dos operandos no son del mismo
  tipo, JavaScript intenta convertirlos a un tipo apropiado para la comparación.
  Este comportamiento generalmente resulta en comparar los operandos numéricamente.

  < menor que
  > mayor que
  <= menor o igual que
  >= mayor o igual que
  == igual que

*/

console.log(true == `true`); // false
console.log(23 < `40`); // true

console.log(`b` < `A`); // false

console.log(`Hola` < `HOLA`); // false

console.log(`Hola` < `123`); // false

console.log(`Hola` < `KeHace` + 1000); // true

console.log(`23` == 23); // true

// ------------------- Comparación estricta ------------------
/*
 === estrictamente igual, debe ser igual en el valor y tipo
 !== estrictamente diferente, debe ser difente en valor y tipo

*/

console.log(`23` === 23); // false
console.log(`true` === true); // false
console.log(`45` !== 45); // true

// Operador de asignación
const myNumber = 34;

// Desestructuración (Destructuring)
/* 
  Es una expresión en JS que hace posible extraer datos de arreglos u objetos y nos
  ayuda a realizar asignaciones más complejas.
*/
let dataA = 10;
let dataB = 20;
console.log(`a: ${dataA} , b:${dataB} `);
// Quiero intercambiar los datos
/* 
let temporal;
temporal = dataA;
dataA = dataB;
dataB = temporal;
*/
[dataA, dataB] = [dataB, dataA];
console.log(`a: ${dataA} , b:${dataB} `); 

const calificaciones = [50, 80, 100, 30, 60, 99];
let resto;
[dataA, , ,dataB, ...resto] = calificaciones; // aqui se asginan el orden que se indico.
console.log(`a: ${dataA} , b:${dataB} , resto:${resto}`); 

const primerAnio = {
  dataA: `43 alumnos`,
  dataB: `50 alumnos`,
  dataC: `20 alumnos`
};

console.log(`a: ${dataA} , b:${dataB} `);

({ dataA, dataB } = primerAnio); // aqui se asginan por su nombre no por el orden.

console.log(`a: ${dataA} , b:${dataB} `);

const auto = {
  model: `Chevrolet`,
  year: 2023,
  color: `red`,
  motor: `2.0`
};

console.log(`Modelo: ${auto.model}`);

// asignando el valor model del objeto auto a la constante model
                  // inicializar con valor por default
//const { model, colorAuto = `Pistache` } = auto;
                // Asignar un nuevo nombre al atributo
const { model, color: colorAuto } = auto;
console.log(`Modelo: ${model} color: ${colorAuto}`);

// ------------------- ejercicio --------------------------------
/* 
    Hacer una función que realice la división de 2 números
    y me entregue (return) en entero el cociente y residuo
*/

const division = (a, b) => {
  const cociente = parseInt(a / b);
  const residuo = (a % b);
  return { cociente, residuo };
};

const { cociente, residuo } = division(9, 5);
console.log(`El resultado de 9/5, cociente: ${cociente}, residuo ${residuo}. `);
// fin de la sesion.