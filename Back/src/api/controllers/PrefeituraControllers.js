const Prefeitura = require('../models/PrefeituraModels.js');

module.exports = {

    async index(req, res) {
        const prefeitura = await Prefeitura.findAll();
        return res.json(prefeitura);
    },

    async store(req, res) {
        const { } = req.body;
        const prefeitura = await Prefeitura.create({ });
        return res.status(200).send({
            status: 1,
            message: "Prefeitura cadastrada com sucesso!!!",
            prefeitura
        })
    },

    async update(req, res) {
        const { cnpj } = req.body;
        const { codigo } = req.params;

        await Prefeitura.update({
            cnpj
        }, { where: {
            id: codigo
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Prefeitura atualizada com sucesso!!!",
        })
    },

    async delete(req, res) {
        const { codigo } = req.params;

        await Prefeitura.destroy({
             where: {
                 id: codigo
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Prefeitura excluída com sucesso!!!",
        })
    }
}