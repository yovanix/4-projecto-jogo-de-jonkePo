
const result = document.querySelector('.result');
const buttons = document.querySelectorAll('.choices button');

const playhuman = (humanChoice) => {
    const machineChoice = playmachine();
    highlightMachineChoice(machineChoice);
    disableButtons(true);
    playTheGame(humanChoice, machineChoice);

    setTimeout(() => {
        disableButtons(false);
        clearMachineHighlight();
        result.innerHTML = 'Listo para jugar otra vez';
    }, 5000);
}

const disableButtons = (disabled) => {
    buttons.forEach(btn => {
        btn.disabled = disabled;
        btn.classList.toggle('disabled', disabled);
    });
}

const confettiColors = ['#f94144', '#f3722c', '#f9c74f', '#90be6d', '#43aa8b', '#577590'];

const showConfetti = () => {
    const existing = document.querySelector('.confetti-container');
    if (existing) existing.remove();

    const container = document.createElement('div');
    container.className = 'confetti-container';
    const pieces = 80;

    for (let i = 0; i < pieces; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        const left = Math.random() * 100;
        const size = 10 + Math.random() * 18;
        const delay = Math.random() * 0.8;
        const drift = (Math.random() * 60 - 30) + 'vw';

        piece.style.left = `${left}vw`;
        piece.style.width = `${size}px`;
        piece.style.height = `${size * 1.4}px`;
        piece.style.setProperty('--drift', drift);
        piece.style.animation = `confetti-fall 3s ease-out forwards ${delay}s`;

        container.appendChild(piece);
    }

    document.body.appendChild(container);
    setTimeout(() => {
        container.remove();
    }, 3000);
}

const highlightMachineChoice = (choice) => {
    buttons.forEach(btn => {
        btn.classList.toggle('machine-choice', btn.id === choice);
    });
}

const clearMachineHighlight = () => {
    buttons.forEach(btn => btn.classList.remove('machine-choice'));
}

const playmachine = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);

    return choices[randomNumber];

}
const myScore = document.querySelector('.scoreIam');
const machineScore = document.querySelector('.scoreAlexa');
let humanScore = 0;
let alexaScore = 0;

const playTheGame = (human, machine) => {

    console.log(`Hummano:` + human + ` Maquina:` + machine);
    if (human === machine) {
        result.innerHTML = `Empate. Alexa eligió ${machine}`;

    }
    else if ((human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')) {
        result.innerHTML = `Você ganhou! Alexa eligió ${machine}`;
        humanScore++;
        myScore.innerHTML = humanScore;
        showConfetti();

    }
    else {
        result.innerHTML = `Você perdeu para a máquina Alexa. Alexa eligió ${machine}`;
        alexaScore++;
        machineScore.innerHTML = alexaScore;


    }




}