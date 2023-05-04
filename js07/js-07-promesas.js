console.log(`Js07 - promesas`);

/* 
  una promesa (promise) es un objeto que representa la terminación o fracaso
  de una operación asíncrona.

  Para crear una promesa se usa el constructor new Promise( Función de callback );
*/

const pinkiPromise = new Promise((resolve, reject) => {
  const menorEdad = false;

  if (menorEdad) {
    resolve(`Hay que estar siempre juntos`);
  } else {
    reject(`No te conozco`);
  }
});

// Consumir las promesas
// función then, catch y finally.

console.log(`Antes de consumir la promesa`);
// pinkiPromise.then(fncCallBack).catch(fncCallBack);
pinkiPromise
  .then((response) => console.log(`Promesa resuelta: ${response}`))
  .catch((error) => console.error(`Tu promesa fue rechazada: ${error}`));

console.log(`Despues de consumir la promesa`);

// --------------- Una promesa que reciba dos números a y b y los divida
// en caso de que b sea cero, me envíe un rechazo diciéndome por que no se
// puede realizar la división.

const divideAvalibe = new Promise((resolve, reject) => {
  const a = 5;
  const b = 0;
  if (b != 0) resolve(a/b);
  else reject(`La división no se puede realizar debido a que el divisor es cero`);
});

divideAvalibe
  .then((response) => console.log(`El resultado de la division es: ${response}`))
  .catch((error) => console.error(`Tu promesa fue rechazada: ${error}`));

// ---------------------- Haciendo la división con parámetros -------------------

const divisionConParametros = (a, b) => {
  const myPromise = new Promise((resolve, reject) => {
    if (b === 0) reject(`No se puede realizar una división por cero`);
    else resolve(a/b);
  });
  return myPromise;
};

divisionConParametros(3, 4)
  .then((response) => console.log(response))
  .catch((error) => console.error(error))
  .finally(() => console.log(`Se termino la división`));

divisionConParametros(3, 0)
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

// ------------------- Consumir las promesas con async y await ------------


const realizarDivisionSincrona = async() => {
  console.log(`<---Resolviendo divisiones--->`);
  const resultado = await (divisionConParametros(20, 4));
  console.log(resultado);
  console.log(resultado + 100);
  //const resultadoErroneo = await (divisionConParametros(20, 0));
  //console.log(resultadoErroneo);
  console.log(`<---Terminando divisiones--->`);
}
realizarDivisionSincrona();

// ----------------- Manejo de exepciones con try y catch ----------------
/* 
  Sintaxis
  try{
  
  } catch (error){
  
  }
*/

const manejoDeExepciones = async () =>{
  console.log("<----Resolviendo divisiones usando try y catch---->");  
  try {
    const resultadoErroneo = await divisionConParametros(20,0) ;
    console.log(resultadoErroneo);
  } catch (error) {
    console.error(`Asyn-Await ${error}`);
  }
  console.log("<----Terminando divisiones usando try y catch-----");
};
manejoDeExepciones();

// -----------------------------------------------------
// Promise.resolve();

const promesaRapida = Promise.resolve(123);

// ---------- Resuelvan con .then -----------
const consumirConThen = () => {
  promesaRapida.then((resolve) => console.log(`consumir con then: ${resolve}`));
  console.log(456);
};
consumirConThen();

// ---------- Resolver con Async-Await -------
const consumirConAwait = async () => {
  console.log(`consumir con await: ${await promesaRapida}`);
  console.log(789);
};
consumirConAwait();
