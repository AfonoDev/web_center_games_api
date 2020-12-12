const Plataforma = require("../models/Plataforma");

module.exports = {

    // Listar todas as plataformas
    async list(request, response){
        const plataforma = await Plataforma.findAll()

        response.send(plataforma);
    },

    //Criação de plataformas
    async store(request, response){
        const { nome } = request.body;
        
        let plataforma = await Plataforma.create({nome});

        response.status(201).send({
            plataforma: {
                nome: plataforma.nome
            }
        });
    }
}