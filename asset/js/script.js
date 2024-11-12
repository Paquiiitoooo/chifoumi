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
    if (userChoice === computerChoice) {
        message = "Égalité !";
    } else if (
        (userChoice === 'pierre' && computerChoice === 'ciseau') ||
        (userChoice === 'papier' && computerChoice === 'pierre') ||
        (userChoice === 'ciseau' && computerChoice === 'papier')
    ) {
        message = "Tu as gagné !";
        scoreUser += 1;
    } else {
        message = "Tu as perdu !";
        scoreOrdi += 1;
    }

    // Affichage du message de résultat
    document.getElementById("message").textContent = message;

    // Mise à jour des scores
    document.getElementById("scoreUser").textContent = `${scoreUser}`;
    document.getElementById("scoreOrdi").textContent = `${scoreOrdi}`;
}
