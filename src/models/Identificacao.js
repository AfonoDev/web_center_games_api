const { Model, DataTypes } = require("sequelize");

class Identificacao extends Model{
    static init(sequelize){
        super.init({
            identificacao: DataTypes.STRING
        },
        {
            sequelize,
            tableName: "tblIdentificacao"
        }
        );
    }
    static associate(models){
        this.belongsTo(models.Usuario,  {foreignKey: "usuario_id" });
    }
}

module.exports = Identificacao;