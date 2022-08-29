// ---> garantindo que o conteudo dos quadrados foi carregado para adicionar um evento a todos eles.
document.addEventListener("DOMContentLoaded", () => {
    let quadrados = document.querySelectorAll(".quadrado");
    quadrados.forEach((quadradox) => {
        quadradox.addEventListener("click", lidarComClick);
    });
});

// ---> função para lidar com o click no quadrado.
function lidarComClick(evento){
    let posicao = evento.target.id;
    if(lidarComJogada(posicao) == true){
        setTimeout(() => {
            let tagIcone = document.getElementById(posicao.toString()).children[0];
            let icone = tagIcone.className == "x" ? "❌" : "🔴";
            alert("O JOGO ACABOU! -> O vencedor foi o jogador " + (vezDoJogador + 1) + " que usou o icone " + icone);

            apagarQuadrados();
        }, 20);
    } else {
        setTimeout(() => {
            if(tabela[0] != "" && tabela[1] != "" && tabela[2] != "" && tabela[3] != "" && tabela[4] != "" && tabela[5] != "" && tabela[6] != "" && tabela[7] != "" && tabela[8] != ""){
                combinacoesVitoriosas.forEach((possibilidade) => {
                    let n1 = possibilidade[0];
                    let n2 = possibilidade[1];
                    let n3 = possibilidade[2];
                    if(tabela[n1] != tabela[n2] || tabela[n1] != tabela[n3] || tabela[n2] != tabela[n3]){ 
                        alert("HOUVE UM EMPATE! - Clique em 'ok' para continuar");
                        apagarQuadrados();
                    }  
                });
            }
        }, 20);
    }
    atualizarQuadrado(posicao);
}   

// ---> função para atualizar o quadrado clicado adicionando uma div com a class que ira ativar o css com o icone.
function atualizarQuadrado(posicao){
    let quadrado = document.getElementById(posicao.toString()); 
    let simbolo = tabela[posicao];
    quadrado.innerHTML = `<div class='${simbolo}'></div>`;
}

// ---> função para recomeçar jogo (adicionando ação a um botão).
let botao = document.getElementById("reset");
botao.addEventListener("click", apagarQuadrados);
function apagarQuadrados(){
    tabela = ["", "", "", "", "", "", "", "", ""];
    vezDoJogador = 0;
    gameOver = false;

    let quadrados = document.querySelectorAll(".quadrado");
    quadrados.forEach((quadrado) => {
        quadrado.innerHTML = "";
    });
}
