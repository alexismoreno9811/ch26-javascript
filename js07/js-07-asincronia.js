
// --------------- Desarrollo sincrónico -------------

const primerPaso = () => {
  console.log(`01 - Inicio de mi programa JS07`);
};

const segundoPaso = () => {
  console.log(`02 - Desarrollo mi programa`);
};

const tercerPaso = () => {
  console.log(`03 - Fin de mi programa`);
};

primerPaso();
segundoPaso();
tercerPaso();

// ---------------- Programación Asíncrona --------------
// setTimeout()
// etablece un temporizador que ejecuta una función
// una vez que expire el temporizador.

const desarrolloAsincrono = (saludo) => {
  console.log(`Hola ${saludo}`);
};

const segundoPasoAsincrono = (saludo) => {
  setTimeout(() => console.log(`Hola ${saludo}`), 4000);
};

console.log(`--------------------------------`);
primerPaso();
segundoPasoAsincrono(`ch26 con 4 s. de retardo`);
//setTimeout(desarrolloAsincrono, 3000, `ch26`);
tercerPaso();

// -------------- setInterval -----------
// Ejecuta una función de manera reiterada con un tiempo de retardo
// fijo entre cada llamada.

const segundoPasoConIntervalo = (saludo) => {
  setInterval(() => console.log(`La banda malandra es ${saludo}`), 2000);
};

console.log(`-------------setIngterval-------------------`);
primerPaso();
//segundoPasoConIntervalo(`ch26 wu, wu`);
tercerPaso();

// ---------------- Iniciar y detener setInterval -----------

const refStartInterval = document.getElementById(`iniciar`);
const refStopInterval = document.getElementById(`detener`);
const refDateH2 = document.getElementById(`fecha`);
let idInterval;

refStartInterval.addEventListener(`click`, () => {
  //console.log(`Se pulso iniciar`);
  idInterval = setInterval(() => {
    refDateH2.innerHTML = new Date().toLocaleString();
  }, 1000);
  refStartInterval.disabled = true;
  refStopInterval.disabled = false;
});

refStopInterval.addEventListener(`click`, () => {
  //console.log(`Se pulso detener`);
  //detener mi intervalo
  clearInterval(idInterval);
  refStartInterval.disabled = false;
  refStopInterval.disabled = true;
});
