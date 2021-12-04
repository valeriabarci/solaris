const { Model, DataTypes } = require('sequelize');

class Administrador extends Model {
    static init(sequelize) {
        super.init({
            cpf_adm: DataTypes.STRING(11),
            cod_sis: DataTypes.INTEGER
        }, {
            sequelize,
            tableName: 'administrador',
        }
        
        );
        return this;
    }
}

module.exports = Administrador;