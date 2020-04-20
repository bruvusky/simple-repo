//challenge one ypur age in days
function ageIndays() {
    var birthyear = prompt('what year were you born good friend?');
    var ageIndayss = (2020 - birthyear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('you are ' + ageIndayss + 'days old');
    h1.setAttribute('id', 'ageIndays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);


}

function reset() {
    document.getElementById('ageIndays').remove();
}

function generatecat() {
    var image = document.createElement('img');
    var div = document.getElementById("flex-cat-gen");
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small"
    div.appendChild(image);
}

//challenge three rock peper scissor
function rpsGame(yourChoice) {
    console.log(yourChoice);
    console.log(yourChoice.src);

    var humanchoice, botchoice;

    humanchoice = yourChoice.id;

    botchoice = NumberToChoice(randomToRpsInt());
    console.log('Computer Choice', botchoice);

    result = decideWinner(humanchoice, botchoice);
    console.log(result);
    message = finalmessage(result); //  'message': 'you won', color
    console.log(message);
    rpsFrontEnd(yourChoice.id, botchoice, message);

}
function randomToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function NumberToChoice(number) {
    return ['rock', 'paper', 'scissor'][number];
}
function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': { 'scissor': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissor': 0 },
        'scissor': { 'paper': 1, 'scissor': 0.5, 'rock': 0 }
    };

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];
    return [yourScore, computerScore];
}

function finalmessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return { 'message': 'YOU LOST!', 'color': 'red' };
    } else if (yourScore === 0.5) {
        return { 'message': 'YOU TIE!', 'color': 'yellow' };
    } else if (yourScore === 1) {
        return { 'message': 'YOU WON!', 'color': 'green' };
    }
}

function rpsFrontEnd(humanimagechoice, botimagechoice, finalmessage) {
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    }

    //lets remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var hDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    hDiv.innerHTML = "<img src='" + imageDatabase[humanimagechoice] + "'height = 150 width = 150 style = 'box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);' >"
    messageDiv.innerHTML = "<h1 style= 'color:" + finalmessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalmessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imageDatabase[botimagechoice] + "'height = 150 width = 150 style = 'box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);' >"


    document.getElementById('flex-box-rps-div').appendChild(hDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

//challenge 4: change the color of all buttons.
var all_buttons = document.getElementsByTagName('button');
//console.log(all_buttons);
var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1])
}
console.log(copyAllButtons);

function buttonColorChange(buttonThingy) {
    if (buttonThingy.value === 'red') {
        buttonsRed();
    } else if (buttonThingy.value === 'green') {
        buttonsGreen();
    } else if (buttonThingy.value === 'reset') {
        buttonColorReset();
    } else if (buttonThingy.value === 'random') {
        randomColors();
    }
}

function buttonsRed() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsGreen() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}
function buttonColorReset() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}
function randomColors() {
    let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning',]
    for (let i = 0; i < all_buttons.length; i++) {
        let randomNumber = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}

//challenge  5 BLACKJACK
let BlackJackGame = {
    'you': { 'scorespan': '#your-blackjack-result', 'div': '#your-box', 'score': 0 },
    'dealer': { 'scorespan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0 },
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
    'cardsMap': { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'J': 10, 'Q': 10, 'A': [1, 11] },
    'wins': 0,
    'draws': 0,
    'losses': 0,
    'isStand': false,
    'turnsover': false,
};
const YOU = BlackJackGame['you']
const DEALER = BlackJackGame['dealer']
const HitSound = new Audio('static/images/sounds/swish.m4a')
const WinSound = new Audio('static/images/sounds/cash.mp3')
const LossSound = new Audio('static/images/sounds/aww.mp3')
document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);
document.querySelector('#blackjack-deal-button').addEventListener('click', blackJackDeal);

function blackjackHit() {
    if (BlackJackGame['isStand'] === false) {
        let card = randomCard();
        console.log(card);
        showcard(card, YOU);
        updateScore(card, YOU);
        showScore(YOU);

    }
}

function randomCard() {
    let randomIndex = Math.floor(Math.random() * 13);
    return BlackJackGame['cards'][randomIndex];
}

function showcard(card, activeplayer) {
    if (activeplayer['score'] <= 21) {
        let cardImage = document.createElement('img');
        cardImage.src = `static/images/images/${card}.png`
        document.querySelector(activeplayer['div']).appendChild(cardImage);
        HitSound.play();
    }
}

function blackJackDeal() {
    if (BlackJackGame['turnsover'] === true) {
        //showResult(computeWinner());
        BlackJackGame['isStand'] = false;
        let yourImages = document.querySelector('#your-box').querySelectorAll('img');
        console.log(yourImages);
        let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
        console.log(dealerImages);
        for (let i = 0; i < yourImages.length; i++) {
            yourImages[i].remove();
        }
        for (let i = 0; i < dealerImages.length; i++) {
            dealerImages[i].remove();
        }
        YOU['score'] = 0;
        DEALER['score'] = 0;

        document.querySelector('#your-blackjack-result').textContent = 0;
        document.querySelector('#dealer-blackjack-result').textContent = 0;

        document.querySelector('#your-blackjack-result').style.color = '#ffffff';
        document.querySelector('#dealer-blackjack-result').style.color = '#ffffff';

        document.querySelector('#blackjack-result').textContent = "Let's play";
        document.querySelector('#blackjack-result').style.color = 'black'

        BlackJackGame['turnsover'] = true;
    }
}
function updateScore(card, activeplayer) {
    if (card === 'A') {
        // If adding 11 keeps me below 21, add 11, otherwise add 1
        if (activeplayer['score'] + BlackJackGame['cardsMap'][card][1] <= 21) {
            activeplayer['score'] += BlackJackGame['cardsMap'][card][1];
        } else {
            activeplayer['score'] += BlackJackGame['cardsMap'][card][0];
        }
    } else {
        activeplayer['score'] += BlackJackGame['cardsMap'][card];
    }
}

function showScore(activeplayer) {

    if (activeplayer['score'] > 21) {
        document.querySelector(activeplayer['scorespan']).textContent = 'BURST!';
        document.querySelector(activeplayer['scorespan']).style.color = 'red';
    }
    else {
        document.querySelector(activeplayer['scorespan']).textContent = activeplayer['score'];
    }
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function dealerLogic() {
    BlackJackGame['isStand'] = true;
    while (DEALER['score'] < 16 && BlackJackGame['isStand'] === true) {
        let card = randomCard();
        showcard(card, DEALER);
        updateScore(card, DEALER);
        showScore(DEALER);
        showResult();
        await sleep(1500);
    }
    if (DEALER['score'] > 15) {
        BlackJackGame['turnsover'] = true;
        showResult(computeWinner());
        // console.log(BlackJackGame['turnsover']);
    }
}

//compute winner and return who just won:
function computeWinner() {
    let winner;
    if (YOU['score'] <= 21) {
        //condition when your score is higher than dealer's or yours is lower than 21 and dealer bursts
        if (YOU['score'] > DEALER['score'] || (DEALER['score'] > 21)) {
            BlackJackGame['wins']++
            winner = YOU;
        } else if (YOU['score'] < DEALER['score']) {
            BlackJackGame['losses']++
            winner = DEALER;
        } else if (YOU['score'] === DEALER['score']) {
            BlackJackGame['draws']++
        }
        //condition when you burst but dealer doesnt!
    } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
        BlackJackGame['losses']++
        winner = DEALER;
        //condition when you and the dealer burst!
    } else if (YOU['score'] > 21 && DEALER['score'] > 21) {
        BlackJackGame['draws']++
    }
    console.log(BlackJackGame);
    return winner;
}


function showResult(winner) {

    let message, messageColor

    if (BlackJackGame['turnsover'] === true) {
        if (winner === YOU) {
            document.querySelector('#wins').textContent = BlackJackGame['wins'];
            message = 'YOU WON!';
            messageColor = 'green'
            WinSound.play();
        } else if (winner === DEALER) {
            document.querySelector('#losses').textContent = BlackJackGame['losses'];
            message = 'YOU LOST!';
            messageColor = 'red'
            LossSound.play();
        } else {
            document.querySelector('#draws').textContent = BlackJackGame['draws'];
            message = 'YOU DREW!';
            messageColor = 'black'

        }
        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messageColor;
    }
}
/*function yob() {
 var birthyear = prompt('what year were you born?');
 var ageindays = ((2020 - birthyear) * 365);
 var h1 = document.createElement('h1');
 var textanswer = document.createTextNode('you are ' + ageindays + 'days old.');
 h1.setAttribute("id", "age");
 h1.appendChild(textanswer);
 document.getElementById('flex-box-result').appendChild(h1);
}

function yob1() {

 document.getElementById("age").remove;
}*/