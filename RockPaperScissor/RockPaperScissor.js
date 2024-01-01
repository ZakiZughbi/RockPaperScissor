/*Variable Elements*/
var userScore = 0;
var compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");


/*Computer Randomizer*/
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    random = Math.floor(Math.random() * 3);
    return  choices[random];
}


/*Element Converter*/
function converter(word) {
    if (word == "rock") return "Rock";
    if (word == "paper") return "Paper";
    return "Scissors";
}


/*End Game*/
function win(user, comp) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    const glow_div = document.getElementById(user);
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = `${converter(user)} ${smallUserWord} beats ${converter(comp)} ${smallCompWord}. You WIN! 🔥 `;
    glow_div.classList.add('green-glow');
    setTimeout(function() {glow_div.classList.remove('green-glow')}, 500);
}

function lose(user, comp) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    const glow_div = document.getElementById(user);
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = `${converter(user)} ${smallUserWord} loses to ${converter(comp)} ${smallCompWord}. You Lose 💩`;
    glow_div.classList.add('red-glow');
    setTimeout(function() {glow_div.classList.remove('red-glow')}, 500);
}

function draw(user, comp) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    const glow_div = document.getElementById(user);
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = `${converter(user)} ${smallUserWord} draws to ${converter(comp)} ${smallCompWord}. It's a Draw 🔫  `;
    glow_div.classList.add('grey-glow');
    setTimeout(function() {glow_div.classList.remove('grey-glow')}, 500);
}


/*Game Funcationalities*/
function game(userChoice) {
    const compChoice = getComputerChoice();
    switch (userChoice + compChoice) {
        case 'rockscissor':
        case 'scissorpaper':
        case 'paperrock':
            win(userChoice, compChoice);
            break;
        case 'scissorrock':
        case 'paperscissor':
        case 'rockpaper':
            lose(userChoice, compChoice);
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorscissor':
            draw(userChoice, compChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click', function() {
        game("rock")
    });

    paper_div.addEventListener('click', function() {
        game("paper")
    });

    scissor_div.addEventListener('click', function() {
        game("scissor")
    });
};

main();
