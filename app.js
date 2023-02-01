

var numeroSecreto = parseInt(Math.random() * 11);

let errou=document.getElementById("audioErrou");
let quePena=document.getElementById("audioErrou2");
let acertou=document.getElementById("audioAcertou");
let gameOver=document.getElementById("gameOver");
let alerta=document.getElementById("alerta");

var tentativas = 1;
const totalTentativas = 3;

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou!";
    //inserir um gif/imagem
    acertou.play();
    setTimeout(() => {
      window.location.reload ()
    }, 3000);
    
  } else if (chute < 0 || chute > 10) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10.";
    alerta.play();

  } else if (tentativas >= totalTentativas) {
    elementoResultado.innerHTML = "Game Over. As tentativas acabaram. O número secreto era " + numeroSecreto + ".";
    gameOver.play();
    setTimeout(() => {
      window.location.reload ()
    }, 5000);

  } else {
    if (chute < numeroSecreto){
    elementoResultado.innerHTML =
      "errouuuuuu! O nº SECRETO é maior."
      tentativas++
    errou.play();
    } else {
      elementoResultado.innerHTML =
        "errouuuuuu! O nº SECRETO é menor."
        tentativas++
    quePena.play();
    }
  }
}
