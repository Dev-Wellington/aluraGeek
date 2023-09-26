import { produtosServicos } from "../services/produtos-services.js";


const todosOsProdutos = document.querySelector("[data-produto]");

const novoProduto = (name, imageUrl, price) => {
  const card = document.createElement("div");
  const conteudo = `
    <div class="produto ">
        <div class="produto-itens">
        <img
        src="${imageUrl}"
        alt=""
        width="174px"
        height="176px"/>
        <div>        <button class="delete"><img src="../assets/img/editDeleteImg/deletar.svg"/></button>
        <button class="edit"><img src="../assets/img/editDeleteImg/editar.svg"/></button></div>
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
        elemento.price
      );
      todosOsProdutos.appendChild(card);
    });
  } catch (error) {
    console.log("Erro ao procurar produtos disponiveis", error);
  }
}

buscarTodosProdutos();
