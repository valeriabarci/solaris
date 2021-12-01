const { Model, DataTypes } = require('sequelize');

class Prefeitura extends Model {
    static init(sequelize) {
        super.init({
           
        }, {
            sequelize,
            tableName: 'prefeitura',
        }
        
        );
        return this;
    }
}

module.exports = Prefeitura;