'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable("tblPostagem", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            titulo: {
                type: Sequelize.STRING(200),
                // allowNull: false
            },
            descricao: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            qtd_Curtidas: {
                type: Sequelize.INTEGER,
            },
            imagem_video: {
                type: Sequelize.STRING(500),
            },
            hashtag: {
                type: Sequelize.STRING(50),
                // allowNull: false
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
            // jogo_id: {
            //     type: Sequelize.INTEGER,
            //     references: {
            //         model:'tblJogo',
            //         key: 'id'
            //     },
            //     onUpdate: "CASCADE",
            //     onDelete: "CASCADE"
            // },
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
        return queryInterface.dropTable("tblPostagem", {})
    }
};