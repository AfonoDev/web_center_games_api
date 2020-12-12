const Comentario = require("../models/Comentario");
const Postagem = require("../models/Postagem");
const Usuario = require("../models/Usuario");

module.exports = {

    async list( request, response ) {
        const {postId} = request.params;

        const postagem = await Postagem.findByPk(postId);

        if(!postagem){
            return response.status(404).send("Postagem não encontrada");
        }

        const comentarios = await postagem.getComentarios({
            include: {
                association: "Usuario",
                as: "usuario",
                attributes: ["id", "nickname"]
            },
            attributes: ["id", "descricao", "created_at"],
            order: [["created_at", "DESC"]]
        });

        response.send(comentarios);
    },

    // Criação e comentario
    async store(request, response){
        const usuario_id = request.usuarioId;
        //  const usuario_id = request.usuarioId;

         // Recuperar o id da postagem
         const {postId} = request.params;
 
         // Recuperar a descrição do comentário
         const {descricao} = request.body;
 
         // Procurar postagem pelo id
         const postagem = await Postagem.findByPk(postId);
 
         // Se não existir, retornar o erro
         if(!postagem){
             return response.status(404).send({erro: "Postagem não encontrada."})
         }
 
         // Criar o comentário usando o createComentario passamdo o id do usuario
         let comentario = await postagem.createComentario(
             {
             descricao,
             usuario_id: usuario_id,
             }
             
         );
 
         comentario = comentario.dataValues;
         comentario.id_postagem = comentario.IdPostagem;
         delete comentario.PostagemId;
         delete comentario.UsuarioId;
 
        //  // Responder com status de criado
         response.status(201).send(comentario);
    },

    async delete(request, response){
        const usuario_id = request.usuarioId;

        // // Pegando o id do post apagar
        // const {postId} = request.params;

        // // Procura o post pelo id
        // let postagem = await Postagem.findByPk( postId );
        
        const {idComentario} = request.params;
        let comentario = await Comentario.findByPk( idComentario );

        if(!comentario){
            return response.status(404).send({erro: "Comentario não encontrada."})
        }

        if(comentario.usuario_id != usuario_id){
            return response.status(401).send({erro: "Você não tem permissão para excluir este comentario"})
        }
        
        await comentario.destroy();

        response.status(204)
    }
    
}