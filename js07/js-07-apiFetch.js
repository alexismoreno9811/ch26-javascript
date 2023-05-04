console.log(`js 07 Api Fetch`);

/*
  La Api Fetch nos ayuda a acceder y manipular peticiones HTTP. Proporciona
  una forma lógica y fácil de obtener recursos de la red de manera ASÍNCRONA.

  Sintaxis:
    Solicitud get

    fetch( url )
      .then()
      .catch();

*/

const url = `https://fakestoreapi.com/products`;

const getProducts = (httpUrl) => {
  fetch(httpUrl)
    .then((result) => {
      console.log(`Respuesta ${result.status}`);
      return result.json(); // Conversión de JSON a objeto
    })
    .then((productsObj) => {
      console.log(productsObj);
      productsObj.forEach(element => {
        console.log(element.title);
      });
    })
    .catch((error)=>console.log(error));
};

getProducts(url);

// ------------------ Consumir Fecth Async y Await -----------------

const printTitle = async (httpUrl) => {
  const productObj = await fetch(httpUrl);
  const jsonObj = await productObj.json();
  console.log(`---------- Await ------------`);
  jsonObj.forEach((element) => console.log(element.title));
};
printTitle(url);