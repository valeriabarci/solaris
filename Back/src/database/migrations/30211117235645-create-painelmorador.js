'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('PainelMorador', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      
      cpf_morador: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Morador',
          key: 'id'
        },
      },

      cod_pai: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Painel',
          key: 'id'
        },
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
    await queryInterface.dropTable('painelmorador');
  }
};