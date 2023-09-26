//get

const listaProduto = () => {
  return fetch("https://65132ba08e505cebc2e9a843.mockapi.io/produto")
    .then((resposta) => resposta.json())
    .catch((error) => console.log(error));
};

const criarProduto = (name, imageUrl, id, price) => {
  fetch("https://65132ba08e505cebc2e9a843.mockapi.io/produto", {
    method: "POST",
    header: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name,
      imageUrl,
      id,
      price,
    }),
  }).then((resposta) => {
    if (resposta.ok) {
      return resposta.body;
    }
  });
  throw new Error("Não foi possivel criar o produto");
};

export const produtosServicos = {
  listaProduto,
  criarProduto,
};
