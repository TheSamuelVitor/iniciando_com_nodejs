const express = require("express");
const service = require("../services/services");

const routes = express.Router();

routes.get("/numeros-aleatorios", (req, res) => {
  try {
    const numeros = service.numerosAleatorios();
    res.status(200).json({
      numeros: numeros,
    });
  } catch (err) {
    res.status(500).json({
      err: err.error,
    });
  }
});

routes.get("/cidades/:letra", async (req, res) => {
  const letra = req.params.letra;
  if (letra.length > 1) {
    res.status(400).json({
      erro: "o parametro letra deve ter apenas um caracter",
    });
  } else {
    try {
      const cidadesNome = await service.cidadesPorLetra(letra);
      res.status(200).json({
        cidades: cidadesNome,
      });
    } catch (err) {
      res.status(500).json({
        erro: err.error,
      });
    }
  }
});

routes.get("/estado/:uf/cidades", async (req, res) => {
  const estado = req.params.uf;
  const id = verificaEstado(estado.toUpperCase());
  if (id == -1) {
    res.status(400).json({
      erro: "UF do estado passado é inexistente",
    });
  } else {
    try {
      await service.cidadesEstado(estado, res);
      res.status(200);
    } catch (err) {
      res.status(400).json({
        err: err.error,
      });
    }
  }
});

module.exports = routes;

function verificaEstado(uf) {
  const estados = [
    "AC",
    "AL",
    "AM",
    "AP",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MG",
    "MS",
    "MT",
    "PA",
    "PB",
    "PE",
    "PR",
    "PI",
    "RO",
    "RJ",
    "RN",
    "RR",
    "RS",
    "SC",
    "SE",
    "SP",
    "TO",
  ];

  return estados.indexOf(uf);
}
