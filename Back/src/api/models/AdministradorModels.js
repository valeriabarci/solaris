const { Model, DataTypes } = require('sequelize');

class Administrador extends Model {
    static init(sequelize) {
        super.init({
            cod_sis: DataTypes.INTEGER,
            nome: DataTypes.STRING(100) 
        }, {
            sequelize,
            tableName: 'administrador',
        }
        
        );
        return this;
    }
}

module.exports = Administrador;