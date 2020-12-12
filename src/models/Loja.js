const { Model, DataTypes } = require("sequelize");

class Loja extends Model {
    static init(sequelize) {
        super.init(
            {
                nome: DataTypes.STRING,
            },
            {
                sequelize,
                tableName: "tblLoja"
            }
        );
    }

    static associate(models) {
        this.hasMany(models.Itens, { as: "Item" })
    }
}

module.exports = Loja;