let scoreUser = 0;
let scoreOrdi = 0;

function play(userChoice) {
    const choices = ['pierre', 'papier', 'ciseau'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Affichage des images
    document.getElementById("imgUserChoice").src = `./asset/img/${userChoice}.png`;
    document.getElementById("imgComputerChoice").src = `./asset/img/${computerChoice}.png`;

    // Affichage des choix
    document.getElementById("choixJoueur").textContent = `Choix de l'utilisateur: ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)}`;
    document.getElementById("choixOrdinateur").textContent = `Choix de l'ordinateur: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;

    let message = '';
    let messageColor = ''; // Variable pour stocker la couleur du message

    if (userChoice === computerChoice) {
        message = "Égalité !";
        messageColor = "black"; // Noir pour égalité
    } else if (
        (userChoice === 'pierre' && computerChoice === 'ciseau') ||
        (userChoice === 'papier' && computerChoice === 'pierre') ||
        (userChoice === 'ciseau' && computerChoice === 'papier')
    ) {
        message = "Tu as gagné !";
        messageColor = "green"; // Vert pour victoire
        scoreUser += 1;
    } else {
        message = "Tu as perdu !";
        messageColor = "red"; // Rouge pour défaite
        scoreOrdi += 1;
    }

    // Mise à jour des scores
    document.getElementById("scoreUser").textContent = `${scoreUser}`;
    document.getElementById("scoreOrdi").textContent = `${scoreOrdi}`;
    
    // Affichage du message de résultat avec la couleur appropriée
    const messageElement = document.getElementById("message");
    messageElement.textContent = message;
    messageElement.style.color = messageColor; // Applique la couleur

    // Vérification si un joueur a gagné
    if (scoreUser === 3) {
        alert("Félicitations, tu as gagné !");
        resetGame();  // Réinitialise le jeu après une victoire
    } else if (scoreOrdi === 3) {
        alert("Dommage, l'ordinateur a gagné !");
        resetGame();  // Réinitialise le jeu après une défaite
    }
}

// Fonction pour réinitialiser les scores et recommencer la partie
function resetGame() {
    scoreUser = 0;
    scoreOrdi = 0;

    // Réinitialiser l'affichage des scores
    document.getElementById("scoreUser").textContent = `${scoreUser}`;
    document.getElementById("scoreOrdi").textContent = `${scoreOrdi}`;

    // Réinitialiser les images des choix
    document.getElementById("imgUserChoice").src = "./asset/img/depositphotos_21321181-stock-illustration-question-mark.webp";
    document.getElementById("imgComputerChoice").src = "./asset/img/depositphotos_21321181-stock-illustration-question-mark.webp";

    // Réinitialiser les textes des choix
    document.getElementById("choixJoueur").textContent = "Choix de l'utilisateur : ";
    document.getElementById("choixOrdinateur").textContent = "Choix de l'ordinateur : ";

    // Effacer le message
    document.getElementById("message").textContent = "";
}
