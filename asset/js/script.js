// Initialisation des scores
let scoreUser  = 0;
let scoreOrdi = 0;

function play(userChoice) {
    const choices = ['pierre', 'papier', 'ciseau'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Mettre à jour les images des choix
    document.getElementById("imgUserChoice").src = `./asset/img/${userChoice}.png`;
    document.getElementById("imgComputerChoice").src = `./asset/img/${computerChoice}.png`;

    // Vérifiez si les images se chargent correctement
    document.getElementById("imgUserChoice").onerror = function() {
        this.src = './asset/img/default.png'; // Remplacez par le chemin de votre image par défaut
    };
    document.getElementById("imgComputerChoice").onerror = function() {
        this.src = './asset/img/default.png'; // Remplacez par le chemin de votre image par défaut
    };

    // Mettre à jour les textes des choix
    document.getElementById("choixJoueur").textContent = `Choix de l'utilisateur: ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)}`;
    document.getElementById("choixOrdinateur").textContent = `Choix de l'ordinateur: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;

    let message = '';
    if (userChoice === computerChoice) {
        message = "Égalité!";
    } else if (
        (userChoice === 'pierre' && computerChoice === 'ciseau') ||
        (userChoice === 'papier' && computerChoice === 'pierre') ||
        (userChoice === 'ciseau' && computerChoice === 'papier')
    ) {
        message = "Tu as gagné!";
        scoreUser  += 1; // Incrémenter le score de l'utilisateur
    } else {
        message = "Tu as perdu!";
        scoreOrdi += 1; // Incrémenter le score de l'ordinateur
    }

    // Mettre à jour les scores
    document.getElementById("ScoreUser").textContent = scoreUser;
    document.getElementById("ScoreOrdi").textContent = scoreOrdi;
    document.getElementById("message").textContent = message;
}

function restart() {
    // Réinitialiser les scores
    scoreUser  = 0;
    scoreOrdi = 0;

    // Mettre à jour l'affichage des scores
    document.getElementById("ScoreUser").textContent = scoreUser;
    document.getElementById("ScoreOrdi").textContent = scoreOrdi;

    // Réinitialiser les choix affichés
    document.getElementById("choixJoueur").textContent = "Choix de l'utilisateur : ";
    document.getElementById("choixOrdinateur").textContent = "Choix de l'ordinateur : ";
    document.getElementById("imgUserChoice").src = './asset/img/depositphotos_21321181-stock-illustration-question-mark.webp'; // Image par défaut
    document.getElementById("imgComputerChoice").src = './asset/img/depositphotos_21321181-stock-illustration-question-mark.webp'; // Image par défaut
    document.getElementById("message").textContent = ""; // Réinitialiser le message
}
