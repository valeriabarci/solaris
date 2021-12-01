'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('Morador', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      
      qtd: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },

      nome: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },

      rua: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },

      cep: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },

      renda_total: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },

      num_residencial: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },

      email: {
        type: Sequelize.STRING(150),
        allowNull: true,
        unique: true
      },

      bairro: {
        type: Sequelize.STRING(50),
        allowNull: true,
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
    await queryInterface.dropTable('morador');
  }
};