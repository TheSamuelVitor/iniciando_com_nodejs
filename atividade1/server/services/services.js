const crypto = require("crypto");
const axios = require("axios");
const pdfkit = require("pdfkit");
const fs = require("fs");

exports.numerosAleatorios = function () {
  let numeros = [];

  for (let index = 0; index < 6; index++) {
    let numero = crypto.randomInt(60);
    numeros.push(numero);
  }

  return numeros;
};

exports.cidadesPorLetra = async function (letra) {
  let cidades = [];
  let cidadesNome = [];

  const requisicao = await axios
    .get("http://servicodados.ibge.gov.br/api/v1/localidades/distritos")
    .then((response) => {
      cidades = response.data;
    });

  cidades.forEach((cidade) => {
    if (cidade.nome[0] === letra.toUpperCase()) {
      cidadesNome.push(cidade.nome);
    }
  });

  return cidadesNome;
};

exports.cidadesEstado = async function (estado, res) {
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
    res.download("./cidades.pdf");
  });
};
