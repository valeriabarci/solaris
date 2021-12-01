const { Model, DataTypes } = require('sequelize');

class Painel extends Model {
    static init(sequelize) {
        super.init({
            potencia: DataTypes.FLOAT,
            cnpj: DataTypes.INTEGER
        }, {
            sequelize,
            tableName: 'painel',
        }
        
        );
        return this;
    }
}

module.exports = Painel;