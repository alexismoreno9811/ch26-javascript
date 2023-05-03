console.log(`Sesion JS06-Formulario`);

const refForm = document.forms[`registro`];

refForm.addEventListener(`submit`, (event) => {
  event.preventDefault(); // Omite las acciones por default
  user = {
    email: refForm.elements[`inputEmail4`].value,
    password: refForm.elements[`inputPassword4`].value,
    address: refForm.elements[`inputAddress`].value,
    city: refForm.elements[`inputCity`].value,
    state: refForm.elements[`inputState`].value,
    zip: refForm.elements[`inputZip`].value,
    checkbox: refForm.elements[`gridCheck`].checked // Para checkbox
  };
  console.log(user);
});