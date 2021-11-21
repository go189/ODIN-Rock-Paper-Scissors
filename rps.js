let playerPoints = 0;
let computerPoints = 0;
setClickListeners();

function setClickListeners() {
    
    const imgs = document.querySelectorAll('img');
    imgs.forEach((img) => { 
        img.addEventListener('click', processPlayerInput);
    });

    let quitBtn = document.querySelector('button');
    quitBtn.addEventListener('click', () => {
        tallyResults();
        removeClickListeners();
    });
}

function removeClickListeners() {
    let imgs = document.querySelectorAll('img');
    imgs.forEach((img) => {
        img.removeEventListener('click', processPlayerInput);
    });
}

function getComputerInput() {
    let num = Math.floor(Math.random() * 3) + 1;
    switch(num) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        default:
            return "scissors";
    }
}

function processPlayerInput() {
    let computerInput = getComputerInput();
    let playerSelectionImg = document.getElementById("playerSelectionImg");
    let computerSelectionImg = document.getElementById("computerSelectionImg");
    computerSelectionImg.setAttribute('src', './images/' + computerInput + '.png')

    switch (this.id) {
        case 'rockBtn':
            playerSelectionImg.setAttribute('src', './images/rock.png');
            roundResult("rock", computerInput);
            break;
        case 'paperBtn':
            playerSelectionImg.setAttribute('src', './images/paper.png');
            roundResult("paper", computerInput);
            break;
        case 'scissorsBtn':
            playerSelectionImg.setAttribute('src', './images/scissors.png');
            roundResult("scissors", computerInput);
            break;
    }
}

function roundResult(playerInput, computerInput) {
    let roundWinnerLabel = document.getElementById("roundWinnerLabel");
    let playerPointsLabel = document.getElementById("playerPointsLabel");
    let computerPointsLabel = document.getElementById("computerPointsLabel");

    if((playerInput == "rock" && computerInput == "rock") || (playerInput == "paper" && computerInput == "paper") || (playerInput == "scissors" && computerInput == "scissors")) {
        roundWinnerLabel.textContent = "Tie!";
    } else if((playerInput == "rock" && computerInput == "scissors") || (playerInput == "paper" && computerInput == "rock") || (playerInput == "scissors" && computerInput == "paper")) {
        playerPoints++;
        playerPointsLabel.textContent = playerPoints;
        roundWinnerLabel.textContent = "Player wins the round!";
    } else {
        computerPoints++;
        computerPointsLabel.textContent = computerPoints;
        roundWinnerLabel.textContent = "Computer wins the round!";
    }
}

function tallyResults() {
    if (playerPoints > computerPoints) {
        alert("Player wins the match!");
    } else if (playerPoints < computerPoints) {
        alert("Computer wins the match!");
    } else {
        alert("Tie match!");
    }  
}

