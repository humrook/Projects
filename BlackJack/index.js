let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

var winAudio = new Audio("win.mp3");
var loseAudio = new Audio("lose.mp3");

let player = {
    name: "Nathan",
    chips: 145
}

playerEl.textContent= player.name + ': $'+ player.chips;

function getRandomCard() { 
    let randomValue =  Math.floor(Math.random() * 13) + 1; //generate random numbers between 1 and 13
    if (randomValue > 10)      // value of king,queen and jack=10
        return 10;
    else if (randomValue === 1)
        return 11;           // value of Ace = 11
    else
        return randomValue;
}

function startGame() { 
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    isAlive = true;

    renderGame();
}
function renderGame()
{
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent  = "Sum: "+ sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    }
    else if (sum === 21) {
        message = "Congrats! You have won blackjack!";
        hasBlackJack = true;
        winAudio.play();
    }
    else {
        message = "Oops! You're out of the game!";
        isAlive = false;
        loseAudio.play();
    }

        messageEl.textContent = message;
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
    else 
        alert("Click start game to begin!")
    
}