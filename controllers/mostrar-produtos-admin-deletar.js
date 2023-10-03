import { produtosServicos } from "../services/produtos-services.js";

const todosOsProdutos = document.querySelector("[data-produto]");

const novoProduto = (name, imageUrl, price, id) => {
  const card = document.createElement("div");
  const conteudo = `
    <div class="produto ">
        <div class="produto-itens">
        <img
        src="${imageUrl}"
        alt=""
        width="174px"
        height="176px"/>
        <div>        <button data-delete  class="delete" data-produto-id="${id}"><img src="../assets/img/editDeleteImg/deletar.svg"/></button>
        <button data-id=${id} data-edit class="edit"><img src="../assets/img/editDeleteImg/editar.svg"/></button></div>
    <h1 class="product-name">${name}</h1>
    <p class="preco">R$${price}</p>
    <a href="{}" class="ver-produto">Ver produto</a>
        </div>
        
    </div>`;
  card.innerHTML = conteudo;

  return card;
};

async function buscarTodosProdutos() {
  try {
    const produtosa = await produtosServicos.listaProduto();

    produtosa.forEach((elemento) => {
      const card = novoProduto(
        elemento.name,
        elemento.imageUrl,
        elemento.price,
        elemento.id
      );
      

      const botaoDelete = card.querySelector("[data-delete]");
      botaoDelete.addEventListener("click", () => {
        produtosServicos
          .deletarProdutos(elemento.id)
          .then(() => {
            window.location.href = "../telas/admin.html";
          })
          .catch((error) => {
            console.log(error);
          });
      });

      
      







      const botaoEditar = card.querySelector("[data-edit]");

      const mudarModal = () => {
        const modal = document.querySelector(".modal");
        const estiloAplicadoModal = modal.style.display;
        if (estiloAplicadoModal == "block") {
          modal.style.display = "none";
        } else {
          modal.style.display = "block";
        }
      };
      botaoEditar.addEventListener("click", () => {
        mudarModal();
      });

      const botoesEditar = card.querySelectorAll("[data-edit]");

      if (botoesEditar) {
        botoesEditar.forEach((botao) => {
          botao.addEventListener("click", () => {
            fetch(
              `https://65132ba08e505cebc2e9a843.mockapi.io/produto/${elemento.id}`
            )
              .then((response) => response.json())
              .then((data) => {
                document.querySelector("[data-nome-att]").value = data.name;
                document.querySelector("[data-url-att]").value = data.imageUrl;
                document.querySelector("[data-preco-att]").value = data.price;
                document.querySelector("[data-descricao-att]").value =
                  data.description;
              })
              .catch((error) => {
                console.error("Erro ao obter dados do item: " + error);
              });
          });
        });
      }

      // Selecione o botão pelo seletor (você pode usar qualquer seletor que seja apropriado)
    
      todosOsProdutos.appendChild(card);
    });
  } catch (error) {
    console.log("Erro ao procurar produtos disponiveis", error);
  }
}

buscarTodosProdutos();
