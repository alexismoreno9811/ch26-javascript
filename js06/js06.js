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

const changeEmphasis = (newTxt, url) => {
  const emphasisRef = document.getElementsByTagName(`em`);
  for (element of emphasisRef) {
    element.innerHTML = `<a href="${url}" target="_blank" rel="definición de friki">${newTxt}</a>`;
  }
};
changeEmphasis(`Viernes friki`, `https://definicion.de/friki/`);

// -------------- Selector universal -------------
// querySelector()

const findElementsByQuerySelector = () => {
  const refElements = document.querySelector(`p em`);
  refElements.innerHTML = `La Ch 26 es bien <strong>chida</strong> y les gusta el 11:11`;
}
findElementsByQuerySelector();

// ----------------- Crear nuevos elementos ------------------------
// appendChild()

const newElement = () => {
  const newElementRef = document.createElement(`p`);
  newElementRef.innerHTML = `La Ch 26 le gusta:
  <ul>
    <li>El pan de muerto</li>
    <li>El chismesito</li>
    <li>El pozole</li>
    <li>La pizza</li>
    <li>El pulque</li>
  </ul>
  `;
  const articleRef = document.querySelector(`article`);
  articleRef.appendChild(newElementRef);
  // Clonar el nodo anterior
  const nodoClonado = newElementRef.cloneNode(true);
  document.getElementById(`article-news`).appendChild(nodoClonado);
};
newElement();

const changeColor = (color) => {
  const refIntro = document.getElementById(`intro`);
  refIntro.style.color = color;
};
changeColor(`#FF0000`);

// Agregar a un elemento un border
// .style.border

const changeBorder = (color) => {
  const refNews = document.getElementById(`article-news`);
  refNews.style.border = `thick solid ${color}`;
};
changeBorder(`#FF0000`);

// --------------- Propiedades de visualización (desaparecer elementos) -------------
// display: none (Quitar el elemento del DOM).
// visibility: hidden (Ocultar el elemento).

const quitarBoton = () => {
  const buutonRef = document.getElementById(`button-B`);
  buutonRef.style.display = "none";
};

const ocultarBoton = () => {
  const buutonRef = document.getElementById(`button-B`);
  buutonRef.style.visibility = "hidden";
};

const reestablecerBoton = () => {
  const buutonRef = document.getElementById(`button-B`);
  buutonRef.style.display = "inline";
  buutonRef.style.visibility = "visible";
};