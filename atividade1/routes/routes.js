const express = require("express");
const crypto = require("crypto");

const routes = express.Router();

console.log("entrou aqui")
routes.get("/numeros-aleatorios", (req, res) => {
  let numeros = [];

  for (let index = 0; index < 6; index++) {
    let numero = crypto.randomInt(60);
    numeros.push(numero);
  }

  console.log("acessou rota de numeros aleatorios");
  console.log(numeros);

  res.status(200).json({
    numeros: numeros,
  });
});

module.exports = routes;
