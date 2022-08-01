const combinacoes = [
    [0, 1, 2], // linha 1
    [3, 4, 5], // linha 2
    [6, 7, 8], // linha 3
    [0, 3, 6], // coluna 1
    [1, 4, 7], // coluna 2
    [2, 5, 8], // coluna 3
    [0, 4, 8], // diagonal esqueda direita
    [2, 4, 6] // diagonal direita esquerda
]

let player1 = 'X';
let player2 = 'O';


function jogar(event) {
    let targetStore = event.target;

    trocaIdPlayer(targetStore);
}

function criarDiv() {
    const divGrid = document.querySelector('.grid');
    for (let index = 0; index < 9; index++) {
        const div = document.createElement('div');
        div.id = index;
        div.classList.add('celula');
        div.addEventListener('click', jogar);
        divGrid.appendChild(div);

    }
}

function trocaIdPlayer(player) {
    const h2 = document.getElementsByTagName('h2')[0];
    h2.id = player;
    h2.innerText = 'Vez do jogador ' + player;
    let h2Inner = h2.innerText;
    if (h2Inner === 'Vez do jogador X') {
        h2Inner 
    } else {
        
    }
}



trocaIdPlayer('X');
criarDiv();

