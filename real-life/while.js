let carregando = true;
let resultados = 10;

while (carregando) {
  // Simula a busca de novos resultados
  let novosResultados = buscarMaisResultados(resultados);
  
  if (novosResultados.length > 0) {
    resultados += novosResultados.length;
    renderizarResultados(novosResultados);
  } else {
    carregando = false; // Não há mais resultados para carregar
  }
}