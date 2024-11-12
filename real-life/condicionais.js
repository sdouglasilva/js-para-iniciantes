let usuarioLogado = false;
let senhaCorreta = false;

if (usuarioLogado && senhaCorreta) {
  alert("Bem-vindo, você está logado!");
} else if (usuarioLogado && !senhaCorreta) {
  alert("Senha incorreta! Tente novamente.");
} else {
  alert("Você precisa fazer login primeiro.");
}