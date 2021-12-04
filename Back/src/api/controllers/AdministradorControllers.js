const Administrador = require('../models/AdministradorModels.js');

module.exports = {

    async index(req, res) {
        const administrador = await Administrador.findAll();
        return res.json(administrador);
    },

    async store(req, res) {
        const { cpf_adm, cod_sis } = req.body;
        const administrador = await Administrador.create({ cpf_adm, cod_sis });
        return res.status(200).send({
            status: 1,
            message: "Administrador cadastrado com sucesso!!!",
            administrador
        })
    },

    async update(req, res) {
        const { cpf_adm, cod_sis } = req.body;
        const { codigo } = req.params;

        await Administrador.update({
            cpf_adm, cod_sis
        }, { where: {
            id: codigo
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Administrador atualizado com sucesso!!!",
        })
    },

    async delete(req, res) {
        const { codigo } = req.params;

        await Administrador.destroy({
             where: {
                 id: codigo
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Administrador excluído com sucesso!!!",
        })
    }
}