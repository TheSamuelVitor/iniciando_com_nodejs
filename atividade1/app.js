const express = require("express");
const crypto = require("crypto");

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



app.listen(3000, () => {
  console.log("listening on port 3000");
});
