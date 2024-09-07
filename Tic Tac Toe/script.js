// Background music
let background_music = new Audio("music.mp3");
// background_music.play();
// Sound when gave is over
let game_over_sound = new Audio("gameover.mp3");
// Sound when click to a cell
let click_sound = new Audio("ting.mp3");

// Shows which turn
let turn = "X";
let textboxes = document.getElementsByClassName("textbox");
let win_game = false;

function reset() {
    turn = "X";
    document.querySelector(".for-game").children[0].innerText = "Turn for";
    document.querySelector(".victory").style.width = "0";
    win_game = false;

    for (let textbox of textboxes) {
        textbox.innerText = "";
        textbox.style.backgroundColor = "white";
    }
}

function isTie() {
    for (textbox of textboxes) {
        if (textbox.innerText === "") {
            return false;
        }
    }

    return true;
}

function isWin() {
    if ((textboxes[0].innerText !== "" && textboxes[0].innerText === textboxes[1].innerText && textboxes[0].innerText === textboxes[2].innerText) || (textboxes[3].innerText !== "" && textboxes[3].innerText === textboxes[4].innerText && textboxes[3].innerText === textboxes[5].innerText) || (textboxes[6].innerText !== "" && textboxes[6].innerText === textboxes[7].innerText && textboxes[6].innerText === textboxes[8].innerText) || (textboxes[0].innerText !== "" && textboxes[0].innerText === textboxes[3].innerText && textboxes[0].innerText === textboxes[6].innerText) || (textboxes[1].innerText !== "" && textboxes[1].innerText === textboxes[4].innerText && textboxes[1].innerText === textboxes[7].innerText) || (textboxes[2].innerText !== "" && textboxes[2].innerText === textboxes[5].innerText && textboxes[2].innerText === textboxes[8].innerText) || (textboxes[0].innerText !== "" && textboxes[0].innerText === textboxes[4].innerText && textboxes[0].innerText === textboxes[8].innerText) || (textboxes[6].innerText !== "" && textboxes[6].innerText === textboxes[4].innerText && textboxes[6].innerText === textboxes[2].innerText)) {
        return 1;
    }

    if (isTie()) {
        return -1;
    }

    return 0;
}

function makeMove(textbox) {
    if (!win_game) {
        if (textbox.innerText === "") {
            click_sound.play();
            textbox.innerText = turn;
            textbox.style.backgroundColor = "#e8e8ff";

            let win = isWin();

            if (win === - 1) {
                game_over_sound.play();
                document.querySelector(".for-game").children[0].innerText = "Tie";
            }
            else if (win === 1) {
                document.querySelector(".for-game").children[0].innerText = `${turn} Won!`;
                document.querySelector(".victory").style.width = "20vw";
                win_game = true;
            }
            else {
                if (turn === "X") {
                    turn = "O";
                }
                else {
                    turn = "X";
                }

                document.querySelector(".for-game").children[0].innerText = `Turn for ${turn}`;
            }
        }
    }
}

for (let textbox of textboxes) {
    textbox.addEventListener("click", () => {
        makeMove(textbox);
    })
}

let resetButton = document.getElementById("reset");
resetButton.addEventListener("click", ()=>{
    reset();
})