function getRandom(low, high)
{
    return Math.trunc(Math.random() * (high - low) + low);
}

function play()
{
    submit.play();

    if (isWin || guess.value.length == 0 || !attempts)
    {
        return;
    }

    let userGuess = parseInt(guess.value);

    if (userGuess < low || userGuess > high)
    {
        return;
    }

    attempts--;
    prevGuesses.innerText += userGuess;
    prevGuesses.innerText += "\xa0";
    remChances.innerText = "Your remaining chances: " + attempts;

    if (userGuess === answer)
    {
        isWin = true;
        hint.innerText = "You win! To play again reload the page";
        victory.play();
        return;
    }
    else if (userGuess > answer)
    {
        hint.innerText = "Hint: Less";
    }
    else
    {
        hint.innerText = "Hint: More";
    }

    if (!attempts)
    {
        hint.innerText = "You lost! To play again reload the page";
        loss.play();
    }
}

const submit = new Audio("sounds/submit.wav");
const victory = new Audio("sounds/win.wav");
const loss = new Audio("sounds/lose.wav");
const prevGuesses = document.querySelector(".prev");
const remChances = document.querySelector(".rem");
const hint = document.querySelector(".hint");
const guess = document.getElementById("guess");
const btn = document.getElementById("submit");
btn.addEventListener("click", play);

let attempts = 10;
const low = 1;
const high = 100;
let answer = getRandom(low, high);
console.log(answer);
let isWin = false;
