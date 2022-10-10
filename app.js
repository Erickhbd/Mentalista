var numeroSecreto = parseInt(Math.random() * 11);

let errou=document.getElementById("audioErrou");
let acertou=document.getElementById("audioAcertou");
let gameOver=document.getElementById("gameOver");

var tentativas = 1;
const totalTentativas = 3;

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);

  console.log(chute);

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou!";
    document.getElementById('gifSilvio').style.display = "block";
    acertou.play();
    
  } else if (chute < 0 || chute > 10) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10.";
  } else if (tentativas >= totalTentativas) {
    elementoResultado.innerHTML = "Game Over. As tentativas acabaram. O número secreto era " + numeroSecreto + ".";
    gameOver.play();
  } else {
    if (chute < numeroSecreto){
    elementoResultado.innerHTML =
      "errouuuuuu! O nº SECRETO é maior."
      tentativas++
      document.getElementById('gifFausto').style.display = "block";
    errou.play();
    } else {
      elementoResultado.innerHTML =
        "errouuuuuu! O nº SECRETO é menor."
        tentativas++
    }
}
}
