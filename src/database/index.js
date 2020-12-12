const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Estado = require("../models/Estado");
const Sexo = require("../models/Sexo");
const Usuario = require("../models/Usuario");
const Jogo = require("../models/Jogo");
const Genero = require("../models/Genero");
const Plataforma = require("../models/Plataforma");
const Postagem = require("../models/Postagem");
const Comentario = require("../models/Comentario");
const Loja = require("../models/Loja");
const Item = require("../models/Itens");
const Identificacao = require("../models/Identificacao");

// Criamo a conexão com os dados da configuração
const conexao = new Sequelize(dbConfig.url, dbConfig.config); 

// Inicializando as models
Estado.init(conexao);
Sexo.init(conexao);
Usuario.init(conexao);
Jogo.init(conexao);
Genero.init(conexao);
Plataforma.init(conexao);
Postagem.init(conexao);
Comentario.init(conexao);
Loja.init(conexao);
Item.init(conexao);
Identificacao.init(conexao);

// Inicializando as associações
Usuario.associate(conexao.models);
Estado.associate(conexao.models);
Sexo.associate(conexao.models);
Jogo.associate(conexao.models);
Genero.associate(conexao.models);
Plataforma.associate(conexao.models);
Postagem.associate(conexao.models);
Comentario.associate(conexao.models);
Loja.associate(conexao.models);
Item.associate(conexao.models);
Identificacao.associate(conexao.models);

// Exportamos a conexão
module.exports = conexao;