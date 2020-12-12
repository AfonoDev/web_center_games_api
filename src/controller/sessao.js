const Usuario = require("../models/Usuario");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");

module.exports = {
    async store(request, response) {
        const { senha, email } = request.body;

        // Verifica se o aluno existe e se a senha esta correta
        const usuario = await Usuario.findOne({
            where: {
                // senha,
                email
            },
        });

        // se não existir retorna erro
        if (!usuario || !(await bcrypt.compare(senha, usuario.senha))) {
            return response.status(403).send({ erro: "Usuário e/ou senha inválidos" });
        }

        const token = jwt.sign({ usuarioId: usuario.id }, authConfig.secret );

        // Se existir e a senha estiver correta retorna ok com o token
        response.status(201).send({
            usuario,
            token
        });
    }
}