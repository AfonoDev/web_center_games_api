const { Model, DataTypes } = require("sequelize");

class Plataforma extends Model {
    static init (sequelize){
        super.init(
            {
            nome: DataTypes.STRING,
        },
        {
            sequelize,
            tableName: "tblPlataforma"
        }
        );
    }

    static associate(models){
        // this.belongsToMany(models.Jogo, {through:"tblJogoPlataforma"});
    }
}

module.exports = Plataforma;