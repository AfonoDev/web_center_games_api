const { Model, DataTypes } = require("sequelize");

class Postagem extends Model {
    static init (sequelize){
        super.init(
            {
            titulo: DataTypes.STRING,
            descricao: DataTypes.TEXT,
            imagem_video: DataTypes.STRING,
            hashtag: DataTypes.STRING,
        },
        {
            sequelize,
            tableName: "tblPostagem",
        }
        );
    }

    static associate(models){
        this.belongsTo(models.Usuario);
        // this.belongsTo(models.Jogo, {foreignKey: "idJogo" });
        this.hasMany(models.Comentario);
    }
}

module.exports = Postagem;