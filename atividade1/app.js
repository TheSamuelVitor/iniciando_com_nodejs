const express = require("express");
const crypto = require("crypto");
const axios = require("axios");
const pdfkit = require("pdfkit");
const fs = require("fs");

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

app.get("/cidades/:letra", async (req, res) => {
  const letra = req.params.letra;
  let cidades = [];
  let cidadesNome = [];

  const requisicao = await axios
    .get("https://servicodados.ibge.gov.br/api/v1/localidades/distritos")
    .then((response) => {
      cidades = response.data;
    });

  cidades.forEach((cidade) => {
    if (cidade.nome[0] === letra.toUpperCase()) {
      cidadesNome.push(cidade.nome);
    }
  });

  res.json({
    cidades: cidadesNome,
  });
});

app.get("/estado/:uf/cidades", async (req, res) => {
  const estado = req.params.uf;
  let estados = [];

  const requisicao = await axios
    .get(
      `http://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/distritos`
    )
    .then((response) => {
      estados = response.data;
    });

  const pdf = new pdfkit();
  pdf.text(`Cidades do Estado ${estado}`);

  estados.forEach((estado) => {
    pdf.text(estado.nome);
  });

  pdf.end();
  pdf.pipe(fs.createWriteStream("cidades.pdf")).on("finish", () => {
    res.status(200).download("./cidades.pdf");
  });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
