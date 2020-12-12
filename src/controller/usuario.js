const { Op } = require("sequelize");
const Usuario = require("../models/Usuario");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");
const Identificacao = require("../models/Identificacao");

module.exports = {

    // Listar todos os usuarios
    async list(request, response) {
        const usuario = await Usuario.findAll();

        response.send(usuario);
    },

    //Criação de usuarios
    async store(request, response) {

        const { primeiro_nome, ultimo_nome, data_de_nascimento, senha, email, nickname, sexo_id, estado_id } = request.body;
        // Verificar se o usuario já existe
        let usuario = await Usuario.findOne({

            where: {
                [Op.or]: [
                    { email: email },
                    { nickname: nickname }
                ]
            }
        });

        if (usuario) {
            return response.status(400).send({ erro: "Usuario já cadastrado" })
        }

        const senhaCripto = await bcrypt.hash(senha, 10);

        usuario = await Usuario.create({
            primeiro_nome,
            ultimo_nome,
            data_de_nascimento,
            senha: senhaCripto,
            email,
            nickname,
            sexo_id,
            estado_id
        });

        const identificacao = nickname;
        const usuario_id = usuario.id
        seguir = await Identificacao.create({
            identificacao,
            usuario_id
        });

        const token = jwt.sign({ usuarioId: usuario.id }, authConfig.secret);

        response.status(201).send({
            usuario: {
                usuarioId: usuario.id,
                primeiro_nome: usuario.primeiro_nome,
                ultimo_nome: usuario.ultimo_nome,
                email: usuario.email,
                nickname: usuario.nickname,
            },
            token
        });


    },

    //Buscar usuário pelo id
    async searchById(request, response) {
        const { id } = request.params;

        let usuario = await Usuario.findByPk(id, { raw: true });

        if (!usuario) {
            return response.status(400).send({ erro: "Usuário não encontrado" });
        }

        delete usuario.senha;

        response.send(usuario);
    },

    async update(request, response) {
        const {primeiro_nome, ultimo_nome, data_de_nascimento, senha, email, nickname, sexo_id, estado_id} = request.body;
        const { id } = request.params;
        let usuario = await Usuario.findByPk(id);

        // if (usuario.email != email || usuario.nickname != nickname) {
        //     // Verificar se o usuario já existe
        //     usuario = await Usuario.findOne({

        //         where: {
        //             [Op.or]: [
        //                 { email: email },
        //                 { nickname: nickname }
        //             ]
        //         }


        //     });

        //     if (usuario.email != email && usuario.nickname != nickname) {
        //         return response.status(400).send({ erro: "Nickname ou email já está sendo utilizado" })
        //     }

        // }

        const senhaCripto = await bcrypt.hash(senha, 10);

        // if(usuario.id != id){
        //     return response.status(401).send({erro: "Você não tem permissão para alterar"});
        // }

        usuario = await usuario.update({ primeiro_nome, ultimo_nome, data_de_nascimento, senha: senhaCripto, email, nickname, sexo_id, estado_id });

        response.status(201).send({
            usuario: {
                primeiro_nome: usuario.primeiro_nome,
                data_de_nascimento: usuario.data_de_nascimento,
                email: usuario.email,
                nickname: usuario.nickname
            }
        });
    }
}