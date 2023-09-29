//get teste

const listaProduto = () => {
  return fetch("https://65132ba08e505cebc2e9a843.mockapi.io/produto")
    .then((resposta) => resposta.json())
    .catch((error) => console.log(error));
};

const criarProduto = (name, imageUrl, price, type, description) => {
  return fetch("https://65132ba08e505cebc2e9a843.mockapi.io/produto", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name,
      imageUrl,
      price,
      type,
      description,
    }),
  }).then((resposta) => {
    if (resposta.ok) {
      return resposta.json;
    }
    throw new Error("Não foi possivel criar o produto");
  });
};
const deletarProdutos = (id) => {
  return  fetch(
    `https://65132ba08e505cebc2e9a843.mockapi.io/produto/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    }
  );
};

export const produtosServicos = {
  listaProduto,
  criarProduto,
  deletarProdutos,
};
