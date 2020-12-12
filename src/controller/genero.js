const Genero = require("../models/Genero");

module.exports = {

    // Listar todos generos
    async list(request, response){
        const genero = await Genero.findAll()

        response.send(genero);
    },

    //Criação de genero
    async store(request, response){
        const { nome, link } = request.body;
        
        let genero = await Genero.create({nome, link});

        response.status(201).send({
            genero: {
                nome: genero.nome,
                link: genero.link
            }
        });
    }
}