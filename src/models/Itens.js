const { Model, DataTypes } = require("sequelize");

class Itens extends Model {
    static init (sequelize){
        super.init(
            {
            nome: DataTypes.STRING,
            imagem: DataTypes.STRING,
            descricao: DataTypes.TEXT,
            valor: DataTypes.INTEGER,
            quantidade_de_item: DataTypes.INTEGER
        },
        {
            sequelize,
            tableName: "tblItens"
        }
        );
    }

    static associate(models){
        this.belongsTo(models.Loja, {foreignKey: "loja_id" })
    }
}

module.exports = Itens;