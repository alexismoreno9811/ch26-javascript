import { Car, ElectricCar } from "./js-08-clase-auto.js";

console.log("Usar importar y exportar clases");

const elantra = new Car("Elantra","Hyundai", 410_000);

console.log(elantra.getDescription());
console.log(elantra);
console.log(elantra.brand);

const electricElantra = new ElectricCar("Elantra Electric","Hyundai", 810_000, 5);
const electricAveo = new ElectricCar("Aveo Electric","Chevrolet", 610_000, 4);
console.log(electricElantra.getDescription());
console.log(electricAveo.getDescription());