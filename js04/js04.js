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
/* ch26 */  ["Arath"  , "José"    , "Karen"    , "Sofi"         ],
/* ch27 */  ["Manuel" , "María"   , "Francisco", "Pablo", "Pepe"],
/* ch28 */  ["Doris"  , "Brendan" , "Lucas"                     ]
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
personasEnCohorte.forEach(fila => fila.forEach(columna => console.log(columna) ) );
