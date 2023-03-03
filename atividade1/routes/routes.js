const express = require("express");
const service = require("../services/services");

const routes = express.Router();

routes.get("/numeros-aleatorios", (req, res) => {
  const numeros = service.numerosAleatorios();
  res.status(200).json({
    numeros: numeros,
  });
});

routes.get("/cidades/:letra", async (req, res) => {
  const letra = req.params.letra;
  const cidadesNome = await service.cidadesPorLetra(letra);
  res.status(200).json({
    cidades: cidadesNome,
  });
});

routes.get("/estado/:uf/cidades", async (req, res) => {
  const estado = req.params.uf;
  await service.cidadesEstado(estado, res);
  res.status(200);
});

module.exports = routes;
