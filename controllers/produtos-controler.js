import { produtosServicos } from "../services/produtos-services.js"

const produtos = document.querySelector('[data-product]');

const novoProduto = (name, imageUrl, price) => {
    const card = document.createElement("div")
    const conteudo = `
    <div class="produto">
            <img
              src="${imageUrl}"
              alt=""
              width="156px"
              height="154px"
            />
            <h1 class="product-name">${name}</h1>
            <p class="preco">${price}</p>
            <a href="{}" class="ver-produto">Ver produto</a>
          </div>`
    card.innerHTML = conteudo

    return card
}

async function buscarProdutos() {
    try {
        const produtosa = await produtosServicos.listaProduto();
        produtosa.forEach(elemento => produtos.appendChild(novoProduto(elemento.name, elemento.imageUrl, elemento.price)));
    } catch (error) {
        console.log("Erro ao buscar produtos:", error);
    }
}

buscarProdutos();
