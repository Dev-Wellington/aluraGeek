import { produtosServicos } from "../services/produtos-services.js";

const consoles = document.querySelector("[data-console]");
//renderiza os consoles
const notebook = document.querySelector("[data-notebook]");
//renderiza os note
const eletronicos = document.querySelector("[data-eletronicos]");
//renderiza os eletronicos em geral


const novoProduto = (name, imageUrl, price) => {
  const card = document.createElement("div");
  const conteudo = `
    <div class="produto">
        <div class="produto-itens">
        <img
        src="${imageUrl}"
        alt=""
        width="145px"
        height="145px"
    />
    <h1 class="product-name">${name}</h1>
    <p class="preco">R$${price}</p>
    <a href="{}" class="ver-produto">Ver produto</a>
        </div>
        
    </div>`;
  card.innerHTML = conteudo;

  return card;
};

async function buscarProdutos() {
  try {
    const produtosa = await produtosServicos.listaProduto();

    produtosa.forEach((elemento) => {
      const card = novoProduto(
        elemento.name,
        elemento.imageUrl,
        elemento.price
      );

      if (elemento.type === "console") {
        consoles.appendChild(card);
      } else if (elemento.type === "notebook") {
        notebook.appendChild(card);
      } else {
        eletronicos.appendChild(card);
      }
    });
  } catch (error) {
    console.log("Erro ao procurar produtos disponiveis", error);
  }
}

buscarProdutos();
