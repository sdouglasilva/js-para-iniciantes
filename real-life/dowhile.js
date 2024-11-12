do {
  let nome = prompt("Qual o seu nome?");
  let idade = prompt("Qual a sua idade?");

  if (nome && idade) {
    formularioValido = true;
    alert("Formulário enviado com sucesso!");
  } else {
    alert("Por favor, preencha todos os campos.");
  }
} while (!formularioValido);