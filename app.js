var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou!";
  } else if (chute < 0 || chute > 10) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10.";
  } else {
    elementoResultado.innerHTML =
      "errouuuuuu. O número secreto é " + numeroSecreto;
  }
}