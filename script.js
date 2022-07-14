// /querySelector

const startBtn = document.querySelector('.btnStart');
const modalWindow = document.querySelector('.modal');
const newGameBtn = document.querySelector('.modal .input_btn');
const input = document.querySelector('.modal .inputcell');
const gameArea = document.querySelector('.game')
const title = document.querySelector('.area .game .title')
const controlBtn = document.querySelector('.control')
const restartBtn = document.querySelector('.btn_restart')
const quitGame = document.querySelector('.btn_quit')
const winnerWindow = document.querySelector('.winner')
const winnerText = document.querySelector('.winner h2')


//EventListeners

startBtn.addEventListener('click', openModal);
newGameBtn.addEventListener('click', createBlock);
restartBtn.addEventListener('click', restartGame);
quitGame.addEventListener('click', gameQuit);
controlBtn.style.display = 'none';



function openModal() {
    input.focus()
    modalWindow.classList.add('active')
    startBtn.style.display = 'none';
}


function createBlock(e) {
    e.preventDefault();
    var n = input.value;
    result = [];
    if (n > 7 || n < 3) return;
    for (var i = 0; i < n; i++) {
        result[i] = [];
        for (var j = 0; j < input.value; j++) {

            var div = document.createElement('div');
            div.classList.add('block');
            result[i].push(div);

            gameArea.appendChild(div);

            gameArea.style.width = `${input.value * 50}px`;
            gameArea.style.heigh = `${input.value * 50}px`;

        }
    }

    modalWindow.style.display = 'none';
    input.value = '';
    title.innerHTML = `Player X's Start`;
    title.style.fontSize = '1.2rem';
    controlBtn.style.display = 'initial';
}


var qayl = 0;

gameArea.onclick = function (e) {
    if (e.target.innerHTML) return;
    document.innerHTML = 'X START'
    if (e.target.classList == "block") {
        if (qayl % 2 == 0) {
            e.target.innerHTML = 'X';
            title.innerHTML = `Player 0's turn`;
        } else {
            e.target.innerHTML = '0'
            title.innerHTML = `Player X's turn`;
        }
        qayl++;

    }
    checkWinner();
}



function checkWinner() {
    console.log(qayl);
    console.log(result.length);

    if (qayl == result.length ** 2) {
        winnerWindow.classList.add('active');
        winnerText.innerHTML = ' Draw ';
        winnerText.innerHTML += ' <i class="fa-solid fa-face-smile"></i> '

    }

    for (var i = 0; i < result.length; i++) {
        var countX = 0, countY = 0;
        for (var j = 0; j < result.length; j++) {
            if (result[i][j].innerHTML == 'X') {
                countX++;
                if (result.length == countX) {
                    winnerWindow.classList.add('active');
                    winnerText.innerHTML = ` <i class="fa-solid fa-trophy"></i> Winner is X `;
                }
            } else if (result[i][j].innerHTML == '0') {
                countY++;
                if (result.length == countY) {
                    winnerWindow.classList.add('active');
                    winnerText.innerHTML = ` <i class="fa-solid fa-trophy"></i> Winner is 0 `;
                }
            }
        }
    }

    for (var j = 0; j < result.length; j++) {
        var countX = 0, countY = 0;
        for (var i = 0; i < result.length; i++) {
            if (result[i][j].innerHTML == 'X') {
                countX++;
                if (result.length == countX) {
                    winnerWindow.classList.add('active');
                    winnerText.innerHTML = ` <i class="fa-solid fa-trophy"></i> Winner is X `;
                }
            } else if (result[i][j].innerHTML == '0') {
                countY++;
                if (result.length == countY) {
                    winnerWindow.classList.add('active');
                    winnerText.innerHTML = ` <i class="fa-solid fa-trophy"></i> Winner is 0 `;
                }
            }
        }
    }



    var countX = 0, countY = 0;
    for (var i = 0; i < result.length; i++) {
        if (result[i][i].innerHTML == 'X') {
            countX++;
            if (result.length == countX) {
                winnerWindow.classList.add('active');
                winnerText.innerHTML = ` <i class="fa-solid fa-trophy"></i> Winner is X `;
            }
        } else if (result[i][i].innerHTML == '0') {
            countY++;
            if (result.length == countY) {
                winnerWindow.classList.add('active');
                winnerText.innerHTML = ` <i class="fa-solid fa-trophy"></i> Winner is 0 `;
            }
        }
    }

}

var countX = 0, countY = 0;
for (var j = 0; j < result.length; j++) {
    if (result[j][result.length - 1 - j].innerHTML == 'X') {
        countX++;
        if (result.length == countX) {
            winnerWindow.classList.add('active');
            winnerText.innerHTML = ` <i class="fa-solid fa-trophy"></i> Winner is X `;
        }
    } else if (result[j][result.length - 1 - j].innerHTML == '0') {
        countY++;
        if (result.length == countY) {
            winnerWindow.classList.add('active');
            winnerText.innerHTML = ` <i class="fa-solid fa-trophy"></i> Winner is 0 `;
        }
    }
}
function restartGame() {
    location.reload()
    }
    
    function gameQuit() {
    window.close()
    location.reload()
    }



