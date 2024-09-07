let step = 100;
enemy.classList.add("move");
let gameOver = false;
let currScore = 0;
let score = document.querySelector(".score");
let music = new Audio("music.mp3");
music.loop = true;
// music.play();
let gameOverSound = new Audio("gameover.mp3");
let message = document.querySelector(".message");

function detectKeys(e) {
    if (!gameOver) {
        let dinoX = parseInt(window.getComputedStyle(dino, null).left.slice(0, -2));

        if (e.key === 'w') {
            dino.classList.add("jump");
            setTimeout(() => {
                dino.classList.remove("jump");
            }, 1000);
        }
        else if (e.key === 'a') {
            dinoX = Math.max(dinoX - step, 0);
            dino.style.left = `${dinoX}px`;
        }
        else if (e.key === 'd') {
            dinoX = dinoX + step;
            dino.style.left = `${dinoX}px`;
        }
    }
}

document.onkeydown = (e) => {
    detectKeys(e);
}

let id1 = setInterval(() => {
    let dinoX = dino.getBoundingClientRect().x;
    let dinoY = dino.getBoundingClientRect().y;
    let enemyX = enemy.getBoundingClientRect().x;
    let enemyY = enemy.getBoundingClientRect().y;
    let offsetX = Math.abs(dinoX - enemyX);
    let offsetY = Math.abs(dinoY - enemyY);

    if (offsetX <= 100 && offsetY <= 100) {
        gameOver = true;
        enemy.classList.remove("move");
        music.pause();
        message.innerHTML = "Game Over - Reload page to Play Again";
        gameOverSound.play();
        setTimeout(() => {
            gameOverSound.pause();
        }, 100)
        clearInterval(id2);
        clearInterval(id1);
    }

    currScore++;
    score.innerHTML = `Your score: ${currScore}`;
}, 100);

let id2 = setInterval(() => {
    let enemySpeed = parseFloat(window.getComputedStyle(enemy, null).getPropertyValue("animation-duration"));
    let newEnemySpeed = Math.max(2, enemySpeed - .1);
    enemy.style.animationDuration = `${newEnemySpeed}s`;
}, 10000)