const { Model, DataTypes } = require('sequelize');

class Sistema extends Model {
    static init(sequelize) {
        super.init({
           
        }, {
            sequelize,
            tableName: 'sistema',
        }
        
        );
        return this;
    }
}

module.exports = Sistema;