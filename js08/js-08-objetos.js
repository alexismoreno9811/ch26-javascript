console.log("Js 08 objetos");

// -------------- Crear un objeto en js -----------------
const frutasColores = {
  // clave: valor
  fresa: ["rojo"],
  pepino: ["verde"],
  mango: ["amarillo"],
  naranja: ["anaranjado", "amarillo"],
  mandarina: ["anaranjado"],
  mora: ["morado"],
  pitaya: ["rosa", "rojo", "blanco", "amarillo"]
};

// ---------------- Formas de leer un objeto -----------------
// Leer el color del pepino
console.log("El pepino es: " + frutasColores.pepino);
console.log("La pitaya es: " + frutasColores.pitaya[1]);
console.log("La pitaya es: " + frutasColores.pitaya.join("-"));

// Modificamos un valor
// agregar el color verde al mango
frutasColores.mango.push("verde");
console.log("El mango es: " + frutasColores.mango);

// ------------------ Iterando los objetos --------------
// Iterar los valores con for-in
// Iterar sobre todas las claves (keys) de un objeto

for (let fruta in frutasColores) {
  console.log(fruta + " tiene los colores: " + frutasColores[fruta]);
};

// -------------- Uso de symbol ---------------------------
/* 
  Se utiliza para añadir claves de propiedades únicas y que estén ocultas
  a otros mecanismos como la iteración y stringify.

  Esto nos sirve para realizar el concepto de encapsulación 
*/

const sueldoOculto = Symbol();

const datosEmpleado = {
  nombre: "El kesa",
  apellido: "Britas",
  [sueldoOculto]: 50_000
};

for (let dato in datosEmpleado) {
  console.log(`${dato}: ${datosEmpleado[dato]}`);
}
console.log(datosEmpleado[sueldoOculto]);

//localStorage.setItem("datos-empleado", JSON.stringify(datosEmpleado));
//sessionStorage.setItem("datos-empleado", JSON.stringify(datosEmpleado));

const boteLunetas = {
  gramaje: 20,
  sabor: "chocolate",
  costo: 35,

  abrir: () => "Depachar producto", // se pueden usar funciones flecha siempre y cuando no se use .this dentro de la función.

  comer: function (gramosComidos) {
    return this.gramaje -= gramosComidos;
  }
};

console.log("Mi bote de lunetas tiene: " + boteLunetas.comer(5) + " g.");