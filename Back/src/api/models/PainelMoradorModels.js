const { Model, DataTypes } = require('sequelize');

class PainelMorador extends Model {
    static init(sequelize) {
        super.init({
            cod_morador: DataTypes.INTEGER,
            cod_pai: DataTypes.INTEGER
        }, {
            sequelize,
            tableName: 'painelmorador',
        }
        
        );
        return this;
    }
}

module.exports = PainelMorador;