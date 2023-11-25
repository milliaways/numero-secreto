let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
let chute;
exibeMensagemInicial();

function exibeTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
        campo.innerHTML = texto;
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = " "
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibeMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

function exibeMensagemInicial() {
    exibeTextoNaTela("h1", "O Jogo");
    exibeTextoNaTela("p", "Escolha um número entre 1 e 10");
}

function verificarChute() {
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto) {
        exibeTextoNaTela("h1", "Acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`; 
        exibeTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else {
        tentativas++;
        limparCampo();
        if (chute > numeroSecreto) {
            exibeTextoNaTela("p", "O número secreto é menor que o chute.")
        }
        else {
            exibeTextoNaTela("p", "O número secreto é maior que o chute.")
        }

    };
}

function gerarNumeroAleatorio() {
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);

    if (listaDeNumerosSorteados == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }
    else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}