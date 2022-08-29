// ---> iniciar minhas variáveis 
let tabela = ["", "", "", "", "", "", "", "", ""];
let vezDoJogador = 0;
let simbolos = ["x", "o"];
let gameOver = false;

// ---> função que vai pegar a posição onde o quadrado foi clicado, e usar para colocar o símbolo no board.
function lidarComJogada(posicao){
    if(gameOver == true){
        return;
    }
    if(tabela[posicao] == ""){

        tabela[posicao] = simbolos[vezDoJogador]; // adicionamos o simbolo na lista...

        gameOver = analiseJogada(); // verificamos se o simbolo/jogada resultou em um vitoria...

        if(gameOver == false){
            if(vezDoJogador == 0){
                vezDoJogador = 1;
            } else {
                vezDoJogador = 0;
            }
        }    
    }
    return gameOver;
}

let combinacoesVitoriosas = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// ---> função para varrer as sequencias possíveis de vitoria, e verificar a compatibilidade na tabela (lista).
function analiseJogada(){
    for(i=0; i<combinacoesVitoriosas.length; i++){
        let sequencia = combinacoesVitoriosas[i];
        let n1 = sequencia[0];
        let n2 = sequencia[1];
        let n3 = sequencia[2];
        if(tabela[n1] == tabela[n2] && tabela[n1] == tabela[n3] && tabela[n1] != ""){
            return true;
        }
    
    }
    return false;
}
