'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable("tblComentario", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            descricao: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            usuario_id: {
                type: Sequelize.INTEGER,
                references: {
                    model:'tblUsuario',
                    key: 'id'
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE"
            },
            postagem_id: {
                type: Sequelize.INTEGER,
                references: {
                    model:'tblPostagem',
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
        return queryInterface.dropTable("tblComentario", {})
    }
};