const { Model, DataTypes } = require('sequelize');

class Prefeitura extends Model {
    static init(sequelize) {
        super.init({
            cnpj: DataTypes.STRING(14)
        }, {
            sequelize,
            tableName: 'prefeitura',
        }
        
        );
        return this;
    }
}

module.exports = Prefeitura;