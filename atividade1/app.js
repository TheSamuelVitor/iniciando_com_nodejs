const express = require("express");
const crypto = require("crypto");
const axios = require("axios");

const app = express();

app.get("/numeros-aleatorios", (req, res) => {
  let numeros = [];

  for (let index = 0; index < 6; index++) {
    let numero = crypto.randomInt(60);
    numeros.push(numero);
  }

  res.status(200).json({
    numeros: numeros,
  });
});

app.get("/cidades/:uf", async (req, res) => {
  const estado = req.params.uf;
  let estados = [];
  let estadosNome = [];

  const requisicao = await axios
    .get(
      `http://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/distritos`
    )
    .then((response) => {
      estados = response.data;
    });

  estados.forEach((estado) => {
    console.log(estado.nome);
    estadosNome.push = estado.nome;
  });

  console.log(estadosNome);
  res.status(200).json({
    estados: estadosNome,
  });
});


app.listen(3000, () => {
  console.log("listening on port 3000");
});
