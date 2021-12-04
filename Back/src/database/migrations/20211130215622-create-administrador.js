'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('Administrador', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      cod_sis: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Sistema',
          key: 'id'
        },
      },

      cpf_adm: {
        type: Sequelize.STRING(11),
        allowNull: false,
        unique: true,
      },

      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },

      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('administrador');
  }
};