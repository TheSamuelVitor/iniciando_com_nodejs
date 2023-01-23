const http = require("http");

var message = "";
var produto = {
  preco: Number,
  nome: String,
};

var produtos = [
  {
    preco: 4,
    nome: "Boneca",
  },
  {
    preco: 40,
    nome: "Carro",
  },
];

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "application/json" });

    if (request.url === "/produtos") {
      response.end(
        JSON.stringify({
          produtos: produtos,
          quantidade: produtos.length,
        })
      );
    } else if (request.url === "/usuario") {
      response.end(
        JSON.stringify({
          usuario: "Samuel Vitor",
          email: "samuel.vitor@gmail.com",
        })
      );
    }

    response.end(
      JSON.stringify({
        message: "Welcome stranger",
      })
    );
  })

  .listen(3000, () => {
    console.log("listening on port 3000");
  });
