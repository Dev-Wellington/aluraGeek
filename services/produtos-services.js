//get

const listaProduto = ()  => {
    return fetch("http://localhost:3000/produto")
        .then((resposta) => resposta.json())
        .catch((error)=>console.log(error))
}

const criarProduto = (name,id,price) => {
    fetch("http://localhost:3000/produto",{
        method:"POST",
        header:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            name,
            imageUrl,
            id,
            price
        })
    }).then(resposta => {
        if(resposta.ok){
            return resposta.body
        }
    })
    throw new Error("Não foi possivel criar o produto")
}



export const produtosServicos = {
    listaProduto,
    criarProduto
}

