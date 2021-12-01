'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('Painel', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      
      potencia: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },

      cnpj: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Prefeitura',
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
    await queryInterface.dropTable('painel');
  }
};