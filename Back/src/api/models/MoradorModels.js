const { Model, DataTypes } = require('sequelize');

class Morador extends Model {
    static init(sequelize) {
        super.init({
            qtd: DataTypes.INTEGER,
            nome: DataTypes.STRING(100),
            rua: DataTypes.STRING(200),
            cep: DataTypes.INTEGER,
            renda_total: DataTypes.INTEGER,
            num_residencial: DataTypes.INTEGER,
            email: DataTypes.STRING(150),
            bairro: DataTypes.STRING(50)
        }, {
            sequelize,
            tableName: 'morador',
        }
        
        );
        return this;
    }
}

module.exports = Morador;