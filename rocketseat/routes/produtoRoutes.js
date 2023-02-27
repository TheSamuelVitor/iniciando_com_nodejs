const { response, json } = require("express");
const express = require('express')
const fs = require("fs");
const { randomUUID } = require("crypto");

const produtosRouter = express.Router()
produtosRouter.use(express.json());

let produtos = [];


fs.readFile("../products.json", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    produtos = JSON.parse(data);
  }
});

// rota de retorno de todos os produtos existentes
produtosRouter.get("/produtos", (req, res) => {
  res.json(produtos);
});

// rota de retorno de um produto com o id especifico
produtosRouter.get("/produto/:id", (req, res) => {
  var { id } = req.params;
  const productIndex = produtos.findIndex((produto) => produto.id === id);

  res.json(produtos[productIndex]);
});

// rota de retorno de produtos filtrados pelo preco
produtosRouter.get("/produtos/:preco", (req, res) => {
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
produtosRouter.post("/produtos", (req, res) => {
  var { nome, preco } = req.body;

  var produto = {
    id: randomUUID(),
    nome: nome,
    preco: preco,
  };

  produtos.push(produto);

  createProductFile();
  return res.json(produto);
});

produtosRouter.put("/produtos/:id", (request, response) => {
  const { id } = request.params;
  const { nome, preco } = request.body;

  const productIndex = produtos.findIndex((produto) => produto.id === id);
  produtos[productIndex] = {
    ...produtos[productIndex],
    nome,
    preco,
  };
  createProductFile()

  return response.json({
    message: "Produto alterado com sucesso",
  });
});

// rota de deletar produto
produtosRouter.delete("/produto/:id", (req, res) => {
  var { id } = req.params.id;

  const productIndex = produtos.findIndex((produto) => produto.id === id);
  produtos.splice(productIndex, 1);
  createProductFile()

  return res.json({ message: "Produto removido com sucesso" });
});

function createProductFile() {
  fs.writeFile("products.json", JSON.stringify(produtos), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("produto inserido");
    }
  });
}

module.exports = produtosRouter
