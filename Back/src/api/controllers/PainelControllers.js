const Painel = require('../models/PainelModels.js');

module.exports = {

    async index(req, res) {
        const painel = await Painel.findAll();
        return res.json(painel);
    },

    async store(req, res) {
        const { potencia, cnpj } = req.body;
        const painel = await Painel.create({ potencia, cnpj});
        return res.status(200).send({
            status: 1,
            message: "Painel cadastrado com sucesso!!!",
            painel
        })
    },

    async update(req, res) {
        const { potencia, cnpj } = req.body;
        const { codigo } = req.params;

        await Painel.update({
            potencia, cnpj
        }, { where: {
            id: codigo
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Painel atualizado com sucesso!!!",
        })
    },

    async delete(req, res) {
        const { codigo } = req.params;

        await Painel.destroy({
             where: {
                 id: codigo
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Painel excluído com sucesso!!!",
        })
    }
}