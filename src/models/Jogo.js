const {Model, DataTypes} = require("sequelize");

class Jogo extends Model {
    static init(sequelize){
        super.init(
        {
            nome: DataTypes.STRING,    
        },
        {
            sequelize,
            tableName: "tblJogo"
        }
        );
    }

    static associate(models){
        // this.hasMany(models.Postagem);
        this.belongsToMany(models.Plataforma, {through: "tblJogoPlataforma"});
        this.belongsToMany(models.Genero, {through: "tblJogoGenero"});
        this.belongsToMany(models.Usuario, {through: "tblUsuarioJogo"});
    }
}

module.exports = Jogo;