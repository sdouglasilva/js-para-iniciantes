let temaEscolhido = "escuro"; // Pode ser "claro" ou "escuro"

switch (temaEscolhido) {
  case "claro":
    document.body.classList.add("tema-claro");
    document.body.classList.remove("tema-escuro");
    break;
  case "escuro":
    document.body.classList.add("tema-escuro");
    document.body.classList.remove("tema-claro");
    break;
  default:
    console.log("Tema inválido");
    break;
}