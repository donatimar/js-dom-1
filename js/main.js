// * creo le variabili
const lamp = document.getElementById("lamp");
const button = document.getElementById("toggle-button");

// * variabile per tenere traccia dello stato della lampadina
let lampIsOn = false;

// * event listener per il cambio di stato della lampadina
button.addEventListener("click", () => {
  // Controllo se il testo del bottone include "Accendi"
  if (button.textContent.includes("Accendi")) {
    // Cambia immagine a lampadina accesa
    lamp.src = "./img/yellow_lamp.png";
    // Cambia il testo con "Spegni"
    button.textContent = "Spegni";
    console.log("Lampadina accesa");
  } else {
    // Cambia immagine a lampadina spenta
    lamp.src = "./img/white_lamp.png";
    // Cambia il testo con "Accendi"
    button.textContent = "Accendi";
    console.log("Lampadina spenta");
  }
});
