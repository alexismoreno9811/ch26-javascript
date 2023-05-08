const verifyPalindromo = (phrase) => {
  const verifyPhrase = phrase.toLowerCase().split(" ").join("");
  return verifyPhrase === verifyPhrase.split("").reverse().join("");
};

module.exports = { verifyPalindromo };