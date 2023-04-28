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