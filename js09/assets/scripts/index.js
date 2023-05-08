console.log("J09 uso de axios");

const url = "https://reqres.in/api/users?page=2";

const getUsersFetch = () => {
  fetch(url)
    .then(response => response.json())
    .then(users => console.log(users.data))
    .catch(error => console.log(error));
};

const getUsersAxios = () => {
  axios.get(url)
    .then(users => console.log(users.data.data))
    .catch(error => console.log(error));
};

// ------------- Usar Axios Asyn-Await ----------

const getUsersAxiosAsync = async () => {
  try {
    const users = await axios.get(url);
    console.log(users.data.data);
  } catch (error) {
    console.log(error);
  };
};

// ---------- solicitud post con Axios. ------------------

const userData = {
  "name": "Carlos",
  "lastName": "Santana",
  "id": "999"
};

const postUserAxios = async () => {
  try {
    const newUser = await axios.post('https://reqres.in/api/users', userData);
    console.log(newUser.data);
  } catch (error) {
    console.log(error);
  };
};
