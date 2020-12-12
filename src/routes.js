const express = require("express");

const multer = require("multer");

const Multer = multer({
    storage: multer.memoryStorage(),
    limits: 1024 * 1024,
})


// Criando o roteirizador
const routes = express.Router();

const authorizationMid = require("./middlewares/autorizacao");
const uploadImagem = require("./services/firebase")

const usuarioController = require("./controller/usuario");
const estadoController = require("./controller/estado");
const sexoController = require("./controller/sexo");
const jogoController = require("./controller/jogo");
const generoController = require("./controller/genero");
const plataformaController = require("./controller/plataforma");
const postagemController = require("./controller/postagem");
const comentarioController = require("./controller/comentario");
const lojaController = require("./controller/loja");
const itemController = require("./controller/itens");
const sessaoController = require("./controller/sessao");

// Rotas publicas
routes.post("/usuarios", usuarioController.store);
routes.post("/sessao", sessaoController.store);
routes.get("/estados", estadoController.list);
routes.get("/sexo", sexoController.index);
routes.get("/genero", generoController.list);

// Rota de itens
routes.post("/loja/:itemId/item", Multer.single("imagem"), itemController.store);
routes.get("/loja/:itemId/item", itemController.list);
routes.delete("/loja/:itemId/item/:idItem", itemController.delete);
routes.put("/loja/:itemId/item/:idItem",Multer.single("imagem"), itemController.editar);



// ***** Rotas Privadas ***** //
// Rotas de estados
routes.post("/estados", estadoController.store);

// Rotas de sexo
routes.post("/sexo", sexoController.store);

// middleware de proteção de rotas
routes.use(authorizationMid);
// Rotas de usuarios
routes.get("/usuarios", usuarioController.list);
routes.get("/usuarios/:id", usuarioController.searchById);
routes.put("/usuarios/:id", usuarioController.update);

// Rotas de jogo
routes.post("/jogo", jogoController.store);
routes.get("/jogo", jogoController.list);

// Rota de generos
routes.post("/genero", generoController.store);

// Rotas de plataforma
routes.post("/plataforma", plataformaController.store);
routes.get("/plataforma", plataformaController.list);

// Rotas de postagens
routes.post("/postagens", Multer.single("imagem_video"), uploadImagem, postagemController.store);
routes.get("/postagens", postagemController.index);
routes.delete("/postagens/:id", postagemController.delete);

// Rotas de comentarios
routes.post("/postagens/:postId/comentario", comentarioController.store);
routes.get("/postagens/:postId/comentario", comentarioController.list);
routes.delete("/postagens/:postId/comentario/:idComentario", comentarioController.delete);

// Rota de loja
routes.post("/loja", lojaController.store);
routes.get("/loja", lojaController.list);



module.exports = routes;