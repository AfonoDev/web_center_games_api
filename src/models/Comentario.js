const { Model, DataTypes } = require("sequelize");

class Comentario extends Model{
    static init(sequelize){
        super.init({
            descricao: DataTypes.TEXT
        },
        {
            sequelize,
            tableName: "tblComentario"
        }
        );
    }
    static associate(models){
        this.belongsTo(models.Postagem);
        this.belongsTo(models.Usuario, {foreignKey: "usuario_id"});
    }
}

module.exports = Comentario;