const http = require("http");

var message = ""

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "application/json" });
    if (request.url == "/image") {
      message = "Pagina imagens"
    } else {
      message = "Hello world"
    }
    response.end(JSON.stringify({
      "message": message,
    }))
  })
  .listen(3000, () => {
    console.log("listening on port 3000");
  });
