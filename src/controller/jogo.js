const Jogo = require("../models/Jogo");

module.exports = {

    // Listar todos jogos
    async list(request, response){
        const jogo = await Jogo.findAll()

        response.send(jogo);
    },

    //Criação de jogos
    async store(request, response){
        const { nome } = request.body;
        
        let jogo = await Jogo.create({nome});

        response.status(201).send({
            jogo: {
                nome: jogo.nome
            }
        });
    }
}