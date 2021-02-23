import "reflect-metadata";
import "./database";

import express from "express";


const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "Hello Word" });
});

app.post("/", (request, response) => {
  return response.json({ message: "Messagem salva com sucesso!" });
})

app.listen(3333, () => console.log("Server is running"));