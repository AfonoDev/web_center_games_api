const Sexo = require("../models/Sexo");
const jwt = require("jsonwebtoken");

module.exports ={

    // Listar todos os generos sexuais 
    async index(request, response){
        const sexo = await Sexo.findAll();

        response.send(sexo);
    },

    // Criação de generos sexuais
    async store(request, response){
        const nome = request.body;
        
        let sexo = await Sexo.create(nome);

        response.status(201).send(sexo);
    }
}