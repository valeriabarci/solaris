const { Model, DataTypes } = require('sequelize');

class Administrador extends Model {
    static init(sequelize) {
        super.init({
<<<<<<< HEAD
            cod_sis: DataTypes.INTEGER,
            nome: DataTypes.STRING(100) 
=======
            cpf_adm: DataTypes.STRING(11),
            cod_sis: DataTypes.INTEGER
>>>>>>> 91f73dc5989f188b19ee23dcada0d3373822cba8
        }, {
            sequelize,
            tableName: 'administrador',
        }
        
        );
        return this;
    }
}

module.exports = Administrador;