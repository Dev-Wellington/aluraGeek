import { produtosServicos } from "../services/produtos-services.js";




async function atualizar() {
  try {
    const listaProduto = await produtosServicos.listaProduto();
    const formAtualizar = document.querySelector("[data-form-att]");

    

    const botoesEdicao = document.querySelectorAll("[data-edit]");
    botoesEdicao.forEach((botao) => {
      botao.addEventListener("click", (evento) => {
        evento.preventDefault();
        const IDP = botao.getAttribute("data-id"); 
        
        for (let i = 0; i < listaProduto.length; i++) {
            const produto = listaProduto[i];
            const produtoID = produto.id;
            
      
            if (produtoID == IDP) {
              formAtualizar.addEventListener("submit", (x) => {
                x.preventDefault();
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
              break;
            }
          }
      })
      
      });
    
    
  } catch (error) {
    console.log(error);
  }
}

atualizar();
