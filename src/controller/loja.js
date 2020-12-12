const Loja = require("../models/Loja");
const jwt = require("jsonwebtoken");

module.exports ={

    // Listar todas as lojas
    async list(req, res){
        const loja = await Loja.findAll();

        res.send(loja);
    },

    // Criação de loja
    async store(req, res){
        const {nome} = req.body;
        
        let loja = await Loja.create({nome});

        res.status(201).send({
            loja: {
                nome: loja.nome
            }
        });
    }
}