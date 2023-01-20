const http = require("http");

http
  .createServer((request, response) => {})
  .listen(3000, () => {
    console.log("listening on port 3000");
  });

olaMundo = JSON.stringify({
  data: "Hello, world",
});
