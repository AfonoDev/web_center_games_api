'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable("tblEstado", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },

            nome: {
                type: Sequelize.STRING(25),
                allowNull: false
            },
            sigla: {
                type: Sequelize.STRING(2),
                allowNull: false
            }
        })
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.dropTable("tblEstado", {})
    }
};