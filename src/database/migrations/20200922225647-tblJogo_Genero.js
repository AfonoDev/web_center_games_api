'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable("tblJogo_Genero", {
          id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            id_jogo: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model:'tblJogo',
                    key: 'id'
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE"
            },
            id_genero: {
              type: Sequelize.INTEGER,
              allowNull: false,
              references: {
                  model:'tblGenero',
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
        return queryInterface.dropTable("tblJogo_Genero", {})
    }
};