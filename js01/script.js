console.log("Sesion JS01");

// son 7 datos primitivos
// String: "hola"
console.log("tipo de dato String: ", "Hola");

// Number: 12, -45, 367.12, +Infinity, -Infinity, Nan
// Los numéricos usan 64 bits para almacenar, pero solo se usan 53 bits
// para representar el número.
console.log("Tipo de dato Number: ", 12, -45, 367.12, 45/0, -56/0, 56*"hola");
console.log("Valor máximo: ", Number.MAX_VALUE);
console.log("Valor seguro: ", Number.MAX_SAFE_INTEGER);

// BigInt
// Sirven para representar valores numéricos enteros de los que el tipo number
// no puede representar o no es seguro.
console.log("MAX_SAFE_INTEGER + 1 : ", Number.MAX_SAFE_INTEGER + 1);
console.log("MAX_SAFE_INTEGER + 2 : ", Number.MAX_SAFE_INTEGER + 2);
let myBigInt = 9007199254740991n; // Se agrega la letra n al final.
console.log("Valor de dato BigInt: ", myBigInt);
console.log("Valor de dato BigInt + 1n: ", myBigInt + 1n);
console.log("Valor de dato BigInt + 2n: ", myBigInt + 2n);

// Boolean
// Un dato que es declarado, pero no definido en el tipo
let myVar; // solo se declara
console.log("Tipo de dato undefained: ", myVar);
// null
// Intensionalmente se borra el tipo de dato
let myVarNull; // solo se declara
console.log("Tipo de dato myVarNull: ", typeof(myVarNull));
myVarNull = "Saludos Sr. PP"; // se asigna un dato string
console.log("Tipo de dato myVarNull: ", typeof(myVarNull)); // string
myVarNull = null;
console.log("Tipo de dato myVarNull: ", typeof(myVarNull)); // object

// symbol
// Crea propiedades privadas en los objetos.
//---------------------------------------------------------------------------
// Tipos de datos Object
// Objetc:
const misDatosDePerfil = {
  // clave: valor
  nombre: "Alexis",
  apellido: "Moreno",
  edad: 24,
  isBelicoso: true,
  musicaPreferidaPorGenero: {
    rock: "La celula que explota",
    corridosTumbados: "Ella baila sola"
  },
  nombreCompleto: function fullName(){
    return `${this.nombre} ${this.apellido}, soy el belicón`;
  }
};

const misDatosDeInstagram = {
  nombre: "El Belicoso",
  apellido: "666",
  edad: 24,
  isBelicoso: true,
  musicaPreferidaPorGenero: {
    corridosTumbados: "Ella baila sola"
  },
  nombreCompleto: function fullName(){
    return `${this.nombre} ${this.apellido}, soy el belicón`;
  }
};

console.log("Datos completos: ", misDatosDePerfil);
console.log("Nombre: ", misDatosDePerfil.nombre);
console.log("Música de fin de semana: ", misDatosDePerfil.musicaPreferidaPorGenero.corridosTumbados);
console.log("Nombre completo: ", misDatosDePerfil.nombreCompleto());
console.log("Nombre completo: ", misDatosDeInstagram.nombreCompleto());

// Array
// Almacena diferentes tipos de datos, su primer elemento es el indice 0
const cancionesPP = [
  "Soy el belicón", "El azul", "El Tsurito", "AMG",
  {
    2020: 5,
    2021: 30,
    2022: 56,
    total: 91
  }
];

console.log(`Canción con color: ${cancionesPP[1]}`);
console.log(`Canciones hechas en el año 2021: ${cancionesPP[4][2021]}`);

console.log(`Num total de elementos: ${cancionesPP.length}`);
console.log(`Contiene la canción AMG: ${cancionesPP.includes("AMG")}`);

// ------------------------------------------------------------------------------------------
// Conversión de datos
const myNumber = 420; // Minutos de la sesión JS 01
console.log(`Num. minutos en la sesión ${myNumber}`);

// toNumber
const myString = "420";
const sumatoria = 80 + Number(myString);
console.log(`Valor de la sumatoria ${sumatoria}`);

//toParseInt
const myStringInteger = "420.2020";
const sumatoriaEntera = 80 + parseInt(myStringInteger);
console.log(`Valor de la sumatoria ${sumatoriaEntera}`);

//toParseFloat
const myStringFloat = "420.2020";
const sumatoriaDecimal = 80 + parseFloat(myStringFloat);
console.log(`Valor de la sumatoria ${sumatoriaDecimal}`);

// toBoolean
const isBelicoso = "false";
if(isBelicoso)
  console.log(`Denle su belikin`);
else
  console.log(`Abra paso a la barredora`);
