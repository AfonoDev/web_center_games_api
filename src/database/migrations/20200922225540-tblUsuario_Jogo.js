'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable("tblUsuario_Jogo", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            jogo_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model:'tblJogo',
                    key: 'id'
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE"
            },
            usuario_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model:'tblUsuario',
                    key: 'id'
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
        return queryInterface.dropTable("tblUsuario_Jogo", {})
    }
};