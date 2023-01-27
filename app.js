const { response, json } = require("express");
const express = require("express");
// const { randomUUID } = require("crypto");

const app = express();

app.use(express.json());

var produtos = [
  {
    preco: 4,
    nome: "Boneca",
  },
  {
    preco: 40,
    nome: "Carro",
  },
];

app.get("/produtos", (req, res) => {
  res.statusCode = 201;
  res.json(produtos);
});

app.get("/produto/:id", (req, res) => {
  var id = req.params.id;
  res.json(produtos[id]);
});

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

app.delete("/produto/:id", (req, res) => {
  var id = req.params.id;
  res.json(produtos[id]);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
