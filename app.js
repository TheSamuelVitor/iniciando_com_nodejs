const { response, json } = require("express");
const express = require("express");
// const { randomUUID } = require("crypto");

const app = express();

app.use(express.json());

var produtos = [];

// rota de retorno de todos os produtos existentes
app.get("/produtos", (req, res) => {
  res.statusCode = 201;
  res.json(produtos);
});

// rota de retorno de um produto com o id especifico
app.get("/produto/:id", (req, res) => {
  var id = req.params.id;
  res.json(produtos[id]);
});

// rota de retorno de produtos filtrados pelo preco
app.get("/produtos/:preco", (req, res) => {
  var preco = req.params.preco;
  var listaProdutos = [];

  produtos.forEach((produto) => {
    if (produto.preco === parseInt(preco)) {
      listaProdutos.push(produto);
    }
  });

  res.json(listaProdutos);
});

// rota de adicionar produto
app.post("/produtos", (req, res) => {
  console.log("acessou essa rota");
  var { nome, preco } = req.body;

  var produto = {
    nome,
    preco,
    id: randomUUID(),
  };

  produtos.push(produto);

  return res.json(produto);
});

// rota de deletar produto
app.delete("/produto/:id", (req, res) => {
  var id = req.params.id;
  res.json(produtos[id]);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
