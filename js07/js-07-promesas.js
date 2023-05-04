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
  else reject(`La división no se puede realizar debido a que el divisor es 0`);
});

divideAvalibe
  .then((response) => console.log(`El resultado de la division es: ${response}`))
  .catch((error) => console.error(`Tu promesa fue rechazada: ${error}`));

// ---------------------- Haciendo la división con parámetros -------------------

const divisionConParametros = (a, b) => {
  const myPromise = new Promise((resolve, reject) => {
    if (b === 0) reject(`La división no se puede realizar debido a que el divisor es 0`);
    else resolve(a/b);
  });
};

divisionConParametros(3, 4);