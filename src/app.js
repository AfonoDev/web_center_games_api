const express = require("express");
const rotas = require("./routes");
const cors = require("cors");
require("./database");

// iniciando a aplicação
const app =  express();

// Habilitar o cors para qualquer origem
app.use(cors());

// Nas requisições pode ter corpos em formato json
app.use(express.json());

// Cadastrando as rotas 
app.use(rotas);

module.exports = app;