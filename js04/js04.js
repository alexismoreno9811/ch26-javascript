console.log("Sesión Js04 Arreglos y ciclos");

// Declarar un array
const nombresCh26 = ["Sofi", "Alejandro", "Ixchel", "Said"];
// Usando el constructor de arreglos
const apellidosCh26 = new Array("Montellano", "Torres", "Vazquez");
const numCajonesEstacionamiento = new Array(4); // [ , , , ]
const numCohortesActivas = new Array(26, 27, 28, 29); // [26 , 27 , 28 , 29 ]


console.log("Apellido de Sergio " + apellidosCh26[1]);

// Agregar un nuevo apellido al final del arreglo apellidos
apellidosCh26.push("Ruiz");
console.log(apellidosCh26);

// Matrices (Arreglos de 2 dimensiones)
// Arrays anidados
// [ [ ], [ ], [ ] ]

const personasEnCohorte = [
/* ch26 */["Arath", "José", "Karen", "Sofi"],
/* ch27 */["Manuel", "María", "Francisco", "Pablo", "Pepe"],
/* ch28 */["Doris", "Brendan", "Lucas"]
];

console.log(`Personas ch27: ${personasEnCohorte[1].join(", ")}`);

// Accediendo a Francisco
console.log(`Personas ch27: ${personasEnCohorte[1][2]}`); //Francisco

console.log(`Lucas de ch28: ${personasEnCohorte[2][2]}`); //Lucas

console.log(`Karen de ch26: ${personasEnCohorte[0][2]}`); //Karen

personasEnCohorte[1][3] = "Juan";
console.log(`Personas ch27: ${personasEnCohorte[1].join(", ")}`);

// myArray3D =[ [ [], [], [] ], [ [], [], [] ] ]; myArray3D [][][];

// Iterar todos los elementos en un arreglo de 2 dimensiones.

/* for (let fila = 0; fila < personasEnCohorte.length; fila++) {
  console.log(`Fila ${fila}: ${personasEnCohorte[fila]}`);
  for (let columna = 0; columna < personasEnCohorte[fila].length; columna++) {
    console.log(`Nombre: ${personasEnCohorte[fila][columna]}`);
  }
} */

// Usando forEach
personasEnCohorte.forEach(fila => fila.forEach(columna => console.log(columna)));

// forOf
// Ejecuta sentencias por cada elemento de un objeto iterable (arrays, strings y objetos)
const myName = "Alexis";
for (let char of myName) {
  console.log(char);
}

for (const fila of personasEnCohorte) {
  for (const columna of fila) {
    console.log(columna);
  }
}

// --------------------- Consideraciones para el ciclo For -------------------------
// No es necesario indicar el inicio, la comparación y la expresión final
/* 
  for (inicio; comparación; expresiónFinal){
    sentencias;
  } 
*/
// break; Rompe con la iteración en curso y sale del ciclo.
let nIteración = 0;
for ( /*inicio*/; /*comparación*/; /*ExpFinal*/){
  console.log(nIteración)
  if (nIteración === 5) break;
  nIteración++;
}

//----------------- Ejercicio -------------------------
// Iterar y mostrar a las personas en personasEnCohorte y detenr cuando se encuentre a María.
// Dejar de iterar.

personas: // Se usa un label para indicar en el brak hacia que ciclo romperá.
for (let fila = 0; fila < personasEnCohorte.length; fila++) {
  for (let columna = 0; columna < personasEnCohorte[fila].length; columna++){
    console.log(personasEnCohorte[fila][columna]);
    if (personasEnCohorte[fila][columna] == "María") break personas; // Se indica el label
  }
}

// Continue
/* 
  termina la ejecución de la sentencia en la iteración actual y continua la ejecución del ciclo
  con la próxima iteración (o en el label que se indique).
*/
// No imprimir María.
console.log("===== uso de continue =======")
personas:
for (let fila = 0; fila < personasEnCohorte.length; fila++) {
  for (let columna = 0; columna < personasEnCohorte[fila].length; columna++){
    if (personasEnCohorte[fila][columna] == "María") continue;
    console.log(personasEnCohorte[fila][columna]);
  }
}

// ------------------------- Ciclo While ----------------------
/* 
  Crea un bucle que ejecuta una sentencia mientras la condición especificada sea verdadera.

  Sintaxis:
  while( Condición )
    Sentencias;
    
let counter = 0;
while (confirm("¿Quieres continuar?")) {
  console.log(`Has continuado ${++counter} ${counter > 1 ? "veces" : "vez" }`);
} */

const numbers = [9, 5, 6, 7];
let i = 0;
while (i < numbers.length) {
  console.log(numbers[i]);
  i++;
}

// --------------------------- Práctica -------------------
/* 


*/

// --------------------------- Ciclo do while ---------------
/* 
  Crea un bucle que ejecuta una sentencia hasta que la condición de comprobación se evalue 
  como falso. La condición se evalua después de ejecutar la sentencia, por lo que la sentencia
  se ejecuta por lo menos una vez.

  Sintaxis

  do{
    sentencias;
  } while( comprobación );
 
*/
/* 
let iteration = 0;
do {
  iteration++;
  console.log(`Número de iteración do-while: ${iteration}`);
} while (confirm(`¿Deseas continuar?`)); 
*/

let valor = -2;
while (valor < 5) {
  console.log(`While ${valor}`);
  valor++;
}
valor = 5;
do {
  console.log(`Do-While ${valor}`);
  valor++;
} while (valor < 5);

/* 
  FIFO: first input first output.
  LIFO: last input first output.
*/

const alimentos = [];

// Usar FIFO:
alimentos.push(`Manzanas del lunes`);
alimentos.push(`Manzanas del miércoles`);

console.log(alimentos);
// Sacar las manzanas
console.log(`Sacando las manzanas antiguas: ${alimentos.shift()}`)
console.log(alimentos);
console.log(`Sacando las manzanas antiguas: ${alimentos.shift()}`)
console.log(alimentos);

// Usar LIFO
const productos = [];
// Temporada navideña
productos.push(`Desarmadores`);
productos.push(`Luces de colores`);
console.log(productos);
console.log(`Sacando el producto reciente: ${productos.pop()}`);
console.log(productos);
console.log(`Sacando el producto reciente: ${productos.pop()}`);
console.log(productos);

