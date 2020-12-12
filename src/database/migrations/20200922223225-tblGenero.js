'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable("tblGenero", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: Sequelize.STRING(40),
                allowNull: false
            },
            link: {
                type: Sequelize.STRING,
                allowNull: false
            },
        })
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.dropTable("tblGenero", {})
    }
};