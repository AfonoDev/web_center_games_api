const Postagem = require("../models/Postagem");

module.exports = {


    // Criação da postagem
    async store(request, response){
        const usuario_id = request.usuarioId;

        const {firebaseUrl} = request.file ? request.file: "";

        const {titulo, descricao, hashtag} = request.body;

        let postagem = await Postagem.create({titulo, descricao, imagem_video: firebaseUrl, hashtag, usuario_id});

        response.status(201).send(postagem);
    },

    // Listagem de postagem
    async index(request, response){
        let postagens = await Postagem.findAll({
            include:{
                association: "Usuario",
                attributes: [ "id", "primeiro_nome", "nickname" ]
            },
            order:[
                ["created_at", "DESC"]
            ]
        });

        setTimeout(() => {
            response.send(postagens);    
        }, 2000);

        
    },

    async delete(request, response){
        const usuario_id = request.usuarioId;
        // const id_usuario = request.

        // Pegando o id do post apagar
        const {id} = request.params;

        // Procura o post pelo id
        let postagem = await Postagem.findByPk( id );
        
        // Se a postagem não existir retorna not found
        if(!postagem){
            return response.status(404).send({erro: "Postagem não encontrada."})
        }

        if(postagem.usuario_id != usuario_id){
            return response.status(401).send({erro: "Você não tem permissão para excluir está postagem"})
        }
        
        await postagem.destroy();

        response.status(204);
    }
}