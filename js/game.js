// vão ser sempre  jogadores 0 e 1
// pensar na variaveis do jogo

let board = ["","","","","","","","",""];
let playerGame = 0;
let simbolos = ["o", "x"];
const emojisPlayer =[ "🏈" ,"⚽"]
let jogadorVencendor = ""
let gamerOver = false;


let posVitoria = [ 
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    ]

function move(position){

    if(gamerOver){
        return;
    }

    if(board[position] == ""){
     // é um array de posicao que coloquei 9 posicoes */ // a posicao inical do simbolo vai ser o player game = 0
    board[position] = simbolos[playerGame];

        gamerOver = esVitorioso();
        jogadorVencendor = playerGame;

       if(gamerOver == false) {
       if(playerGame == 0){
        playerGame = 1;
    }  else {
        playerGame = 0;
    }
   }

}
    return gamerOver;
}


function esVitorioso(){


        for(let i = 0; i < posVitoria.length; i++) {
            let seq = posVitoria[i]

            let pos1 = seq[0];
            let pos2 = seq[1];
            let pos3 = seq[2];

            if(board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1]!= "") {

                return true;
            }

        }
        return false;
}

