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
    var humanchoice, botchoice;

    humanchoice = yourChoice.id;

    botchoice = NumberToChoice(randomToRpsInt());
    console.log('Computer Choice', botchoice);

    result = decideWinner(humanchoice, botchoice);
    console.log(result);
    message = finalmessage(result); //  'message': 'you won', color
    console.log(message);
    rpsFrontEnd(yourChoice, botchoice, message);

}
function randomToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function NumberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
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

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDatabase[humanimagechoice] + "'height = 150 width = 150 style = 'box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);' >"
    messageDiv.innerHTML = "<h1 style= 'color:" + finalmessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalmessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imageDatabase[botimagechoice] + "'height = 150 width = 150 style = 'box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);' >"


    document.getElementById('flex-box-rps div').appendChild(humanDiv);
    document.getElementById('flex-box-rps div').appendChild(messageDiv);
    document.getElementById('flex-box-rps div').appendChild(botDiv);
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