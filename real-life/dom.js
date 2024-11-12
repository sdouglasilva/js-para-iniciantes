let produtos = [
  { nome: "Camiseta", preco: 29.99 },
  { nome: "Calça", preco: 79.99 },
  { nome: "Tênis", preco: 120.00 }
];

let listaProdutos = document.getElementById("produtos");

for (let i = 0; i < produtos.length; i++) {
  let item = produtos[i];
  listaProdutos.innerHTML += `<li>${item.nome} - R$ ${item.preco}</li>`;
}