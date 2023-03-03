const axios = require("axios");
const service = require("../services/services");

jest.setTimeout(20000);
test("should get random numbers", async function () {
  const requisicao = await axios({
    url: "http://localhost:3000/numeros-aleatorios",
    method: "get",
  });

  expect(requisicao.status).toBe(200);
  expect(requisicao.data.numeros).toHaveLength(6);
});

test("should get city names", async function () {
  const cidades = [
    "Abadia de Goiás",
    "Abadia dos Dourados",
    "Abadiânia",
    "Abaeté",
    "Abaetetuba",
    "Abaiara",
    "Abaíra",
    "Abaré",
    "Abatiá",
    "Abdon Batista",
  ];

  const requisicao = await axios({
    url: "http://localhost:3000/cidades/a",
    method: "get",
  });

  const parteRequisicao = requisicao.data.cidades.slice(0, 10);

  expect(requisicao.status).toBe(200);
  expect(parteRequisicao).toStrictEqual(cidades);
});

test("should not get city names", async function () {
  const requisicao = await axios({
    url: "http://localhost:3000/cidades/ab",
    method: "get",
    validateStatus: false,
  });

  expect(requisicao.status).toBe(400);
});

test("should get document with city names", async function () {
  const requisicao = await axios({
    url: "http://localhost:3000/estado/ce/cidades",
    method: "get",
  });

  expect(requisicao.status).toBe(200);
});

test("should get document with city names", async function () {
  const requisicao = await axios({
    url: "http://localhost:3000/estado/ce/cidades",
    method: "get",
  });

  expect(requisicao.status).toBe(200);
});

test("should not get document with city names", async function () {
  const requisicao = await axios({
    url: "http://localhost:3000/estado/ab/cidades",
    method: "get",
    validateStatus: false,
  });

  expect(requisicao.status).toBe(400);
});
