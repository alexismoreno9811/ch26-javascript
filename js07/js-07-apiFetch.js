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

//getProducts(url);

// ------------------ Consumir Fecth Async y Await -----------------

const printTitle = async (httpUrl) => {
  try {
    const productObj = await fetch(httpUrl);
    const jsonObj = await productObj.json();

    sessionStorage.setItem(`mis-productos`, JSON.stringify(jsonObj));

    console.log(`---------- Await ------------`);
    jsonObj.forEach((element) => console.log(element.title));
  } catch (error) {
    console.log(error);
  }
};

//printTitle(url);

// ---------------- Realizar una solicitud POST --------------------

const postUser = (url, userData) => {
  //fecth().then(()=>{}).catch(()=>{});
  fetch(url, {
    method: "POST",  // PUT or DELETE
    body: JSON.stringify(userData), // los datos del usuario, conversión Obj->JSON
    headers: { "Content-Type": "application/json" }
  })
    .then((response) => response.json())
    .then((register) => console.log(register))
    .catch((error) => console.log(error));
};

const user = {
  name: "The Alex",
  job: "Cholo mayor"
};

const urlPost = "https://reqres.in/api/users";

postUser(urlPost, user);
