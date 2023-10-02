import { produtosServicos } from "../services/produtos-services.js";
const form = document.querySelector("[data-form]");
form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const url = document.querySelector("[data-url]").value;
  const nome = document.querySelector("[data-nome]").value;
  const preco = document.querySelector("[data-preco]").value;
  const categoria = document.querySelector("[data-categoria]").value;
  const descricao = document.querySelector("[data-descricao]").value;

  produtosServicos
    .criarProduto(nome, url, preco, categoria, descricao)
    .then((resposta) => {
      window.location.href = "../index.html";
    })
    .catch((error) => {
      console.log(error);
    });
});
