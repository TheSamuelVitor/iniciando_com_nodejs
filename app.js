const { response, json } = require("express");
const express = require("express");

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
  {
    preco: 20,
    nome: "Moto",
  },
  {
    preco: 40,
    nome: "Casa",
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
  var { nome, preco } = req.body;

  produtos.push({
    nome,
    preco,
  });

  return (res.statusCode = 200);
});

app.delete("/produto/:id", (req, res) => {
  var id = req.params.id;
  res.json(produtos[id]);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
