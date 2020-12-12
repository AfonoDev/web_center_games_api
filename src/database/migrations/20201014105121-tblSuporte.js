'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable("tblSuporte", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: Sequelize.STRING,
                allowNull: false
            },
            senha: {
                type: Sequelize.STRING(100),
                allowNull:false
            },
            email: {
                type: Sequelize.STRING(100),
                allowNull:false,
                unique: true
            },
            senha: {
              type: Sequelize.STRING(100),
              allowNull:false
            },
            telefone: {
                type: Sequelize.INTEGER,
                allowNull:false
            },
            sexo_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model:'tblSexo',
                    key: 'id'
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE"
            },
            loja_id: {
              type: Sequelize.INTEGER,
              allowNull: false,
              references: {
                  model:'tblLoja',
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
        });
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.dropTable("tblSuporte", {})
    }
};