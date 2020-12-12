// const { Op } = require("sequelize");
const Estado = require("../models/Estado");
const jwt = require("jsonwebtoken");

module.exports ={

    // Listar todos estados
    async list(request, response){        
        const estado = await Estado.findAll();

        response.send(estado);
    },

    //Criação de Estados
    async store(request, response){
        const {nome, sigla} = request.body;
        
        let estado = await Estado.create({nome, sigla});

        response.status(201).send({
            estado: {
                nome: estado.nome,
                sigla: estado.sigla
            }
        });
    }
}