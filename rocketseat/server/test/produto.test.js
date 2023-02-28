const axios = require("axios");
const crypto = require("crypto");

let produtoId = "";

test("should get products", async function () {
  const request = await axios({
    url: "http://localhost:3000/produtos",
    method: "get",
  });

  const produtos = request.data;

  expect(produtos).toHaveLength(2);
  expect(request.status).toBe(200);
});

test("should save product", async function () {
  const produto = {
    nome: crypto.randomBytes(10).toString("hex"),
    preco: crypto.randomInt(100),
  };

  const request = await axios({
    url: "http://localhost:3000/produtos",
    method: "post",
    data: produto,
  });

  expect(request.status).toBe(201);
  expect(request.data.nome).toBe(produto.nome);
  expect(request.data.preco).toBe(produto.preco);

  produtoId = request.data.id;
});

test("should update product", async function () {
  const produto = {
    nome: crypto.randomBytes(10).toString("hex"),
    preco: crypto.randomInt(100),
  };

  const request = await axios({
    url: `http://localhost:3000/produtos/${produtoId}`,
    method: "put",
    data: produto,
  });

  expect(request.status).toBe(204);
});

test("should delete product", async function () {
  const request = await axios({
    url: `http://localhost:3000/produtos/${produtoId}`,
    method: "delete",
  });

  expect(request.status).toBe(204);
});
