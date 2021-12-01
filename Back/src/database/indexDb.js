const Sequelize = require('sequelize');
const dbConfig = require('../config/database.js');
const conexao = new Sequelize(dbConfig);
const morador = require('../api/models/MoradorModels.js');
const painel = require('../api/models/PainelModels.js');
const painelmorador = require('../api/models/PainelMoradorModels.js');
const administrador = require('../api/models/AdministradorModels.js');
const sistema = require('../api/models/SistemaModels.js');
const prefeitura = require('../api/models/PrefeituraModels.js');

try {
    conexao.authenticate();
    console.log('Conexão estabelecida!!!');
} catch (error) {
    console.log('Conexão não estabelecida!!!', error);
}

morador.init(conexao);
painel.init(conexao);
painelmorador.init(conexao);
administrador.init(conexao);
sistema.init(conexao);
prefeitura.init(conexao);



module.exports = conexao;