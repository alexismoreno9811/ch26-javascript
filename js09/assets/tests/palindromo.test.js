// toBe hace la importación

/* 
  Hacer pruebas unitarias a una función que
  verifique si una palabra es palíndromo

  Palíndromo: La palabra se lee igual de izquierda a derecha
  y de izquierda a derecha.

  "Ana" -> true
  "Bob" -> true
  "Radar" -> true
  "Saoko" -> false
  "Palabra" -> false
  "Somos o no somos" -> true
*/

const { verifyPalindromo } = require('../scripts/palindromo');

test("Prueba de Ana = true", () => {
  expect(verifyPalindromo("Ana")).toBe(true);
});

test("Prueba de Bob = true", () => {
  expect(verifyPalindromo("Bob")).toBe(true);
});

test("Prueba de Radar = true", () => {
  expect(verifyPalindromo("Radar")).toBe(true);
});

test("Prueba de Saoko = false", () => {
  expect(verifyPalindromo("Saoko")).toBe(false);
});

test("Prueba de Palabra = false", () => {
  expect(verifyPalindromo("Palabra")).toBe(false);
});

test("Prueba de Somos o no somos = true", () => {
  expect(verifyPalindromo("Somos o no somos")).toBe(true);
});