//querySelector

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
    var result = [];
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