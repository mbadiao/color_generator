const box = document.getElementById("color-box");
const changeColorBtn = document.getElementById("change-color-btn");
const hex = document.querySelector(".code");
function getRandomHexColor() {
  // Générer trois valeurs de couleur rouge, verte et bleue (RGB)
  const red = Math.floor(Math.random() * 256); // Valeur de rouge entre 0 et 255
  const green = Math.floor(Math.random() * 256); // Valeur de vert entre 0 et 255
  const blue = Math.floor(Math.random() * 256); // Valeur de bleu entre 0 et 255

  // Convertir les valeurs RGB en format hexadécimal
  const redHex = red.toString(16).padStart(2, "0"); // Convertir la valeur de rouge en hexadécimal
  const greenHex = green.toString(16).padStart(2, "0"); // Convertir la valeur de vert en hexadécimal
  const blueHex = blue.toString(16).padStart(2, "0"); // Convertir la valeur de bleu en hexadécimal

  // Concaténer et Retourner les valeurs hexadécimales pour former le code couleur hexadécimal
  return `#${redHex}${greenHex}${blueHex}`;
}

changeColorBtn.addEventListener("click", () => {
  let color = getRandomHexColor();
  hex.textContent = color;
  box.style.backgroundColor = color;
});
