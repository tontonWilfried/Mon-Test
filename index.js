// Initialiser le compteur à 0
let count = 0;

// Obtenir les éléments du DOM
const counterDisplay = document.getElementById('counter');
const incrementButton = document.getElementById('incrementButton');

// Fonction pour incrémenter le compteur
function incrementCounter() {
    count++; // Incrémenter le compteur
    counterDisplay.textContent = count; // Mettre à jour l'affichage
}

// Ajouter un écouteur d'événement au bouton
incrementButton.addEventListener('click', incrementCounter);
