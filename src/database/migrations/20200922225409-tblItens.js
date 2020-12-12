'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable("tblItens", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: Sequelize.STRING,
                allowNull: false
            },
            imagem: {
                type: Sequelize.STRING,
                allowNull: true
            },
            descricao:{
                type: Sequelize.TEXT,
                allowNull:false
            },
            valor:{
                type: Sequelize.INTEGER,
                allowNull:false
            },
            quantidade_de_item: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            loja_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "tblLoja",
                    key: "id"
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE"
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false
            }
        })
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.dropTable("tblItens", {})
    }
};