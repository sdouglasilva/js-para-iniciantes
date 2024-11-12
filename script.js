function mudarCor() {
  // Obtém o valor do input (cor que o usuário digitou)
  let cor = document.getElementById("colorInput").value.toLowerCase();
  let feedback = document.getElementById("feedback");

  // Verifica qual cor o usuário digitou e muda a cor de fundo do site
  if (cor === "azul") {
      document.body.style.backgroundColor = "blue";
      feedback.textContent = "Cor de fundo alterada para Azul!";
  } else if (cor === "vermelho") {
      document.body.style.backgroundColor = "red";
      feedback.textContent = "Cor de fundo alterada para Vermelho!";
  } else if (cor === "verde") {
      document.body.style.backgroundColor = "green";
      feedback.textContent = "Cor de fundo alterada para Verde!";
  } else if (cor === "amarelo") {
      document.body.style.backgroundColor = "yellow";
      feedback.textContent = "Cor de fundo alterada para Amarelo!";
  } else {
      feedback.textContent = "Cor não reconhecida. Tente novamente!";
  }

  // Limpa o campo de entrada para o próximo palpite
  document.getElementById("colorInput").value = "";
}