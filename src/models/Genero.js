const { Model, DataTypes } = require("sequelize");

class Genero extends Model {
    static init (sequelize){
        super.init(
            {
            nome: DataTypes.STRING,
            link: DataTypes.STRING
        },
        {
            timestamps: false,
            sequelize,
            tableName: "tblGenero"
        }
        );
    }

    static associate(models){
        this.belongsToMany(models.Jogo, {through:"tblJogoGenero"});
        this.belongsToMany(models.Usuario, {through:"tblUsuarioGenero"});
    }
}

module.exports = Genero;