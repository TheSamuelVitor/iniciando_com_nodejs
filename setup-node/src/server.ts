import Express from "express";
import "./controllers/UserController";

const app = Express();

app.get("/", (req, res) => {
  res.status(200).json({
    mensagem: "pagina principal",
  });
});

app.listen(3000, () => {
  console.log("rodando na porta 3000");
});
