import { produtosServicos } from "../services/produtos-services.js";


async function atualizar() {
  try {
    const listaProduto = await produtosServicos.listaProduto();
    listaProduto.forEach((produto) => {
      const produtoID = produto.id;

      const formAtualizar = document.querySelector("[data-form-att]");

      formAtualizar.addEventListener("submit", (evento) => {
        evento.preventDefault();
        const nome = formAtualizar.querySelector("[data-nome-att]");
        const url = formAtualizar.querySelector("[data-url-att]");
        const descricao = formAtualizar.querySelector("[data-descricao-att]");
        const preco = formAtualizar.querySelector("[data-preco-att]");
        const lista = {
          name: nome.value,
          imageUrl: url.value,
          description: descricao.value,
          price: preco.value,
        };
      
        produtosServicos
          .editarProdutos(produtoID, lista)
          .then((resposta) => {
            window.location.href = "../index.html";
            return resposta.json();
          })
          .then((dados) => {
            console.log(dados);
          })
          .catch((error) => {
            console.error("Erro na edição do produto:", error);
            throw error;
          });
      });
    });
  } catch (error) {
    console.log(error);
  }
}

atualizar();
