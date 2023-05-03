console.log(`Sesion js06 Manipulación del DOM`);

const findElementById = (nameOfDeveloper) => {
  const tituloRef = document.getElementById(`titulo`);
  tituloRef.innerHTML += `, ${nameOfDeveloper}`;
};
findElementById(`Alexis`);

const changeSubtitleById = (newTxt) => {
  const subtituleRef = document.getElementById(`subtitulo`);
  subtituleRef.innerHTML = `${subtituleRef.innerText}, <em>${newTxt}</em>`;
};
changeSubtitleById(`Viernes de cholos`);

// ----------------------- Encontrar elementos por su tag -------------------
// getElementsByTagName()

const changeEmphasis = (newTxt) => {
  

};
changeEmphasis(`Viernes friki`);