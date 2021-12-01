const PainelMorador = require('../models/PainelMoradorModels.js');

module.exports = {

    async index(req, res) {
        const painelmorador = await PainelMorador.findAll();
        return res.json(painelmorador);
    },

    async store(req, res) {
        const { cod_pai, cod_morador } = req.body;
        const painelmorador = await PainelMorador.create({ cod_pai, cod_morador });
        return res.status(200).send({
            status: 1,
            message: "Ligação painel-morador cadastrada com sucesso!!!",
            painelmorador
        })
    },

    async update(req, res) {
        const { cod_pai, cod_morador } = req.body;
        const { codigo } = req.params;

        await PainelMorador.update({
            cod_pai, cod_morador
        }, { where: {
            id: codigo
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Ligação painel-morador atualizada com sucesso!!!",
        })
    },

    async delete(req, res) {
        const { codigo } = req.params;

        await PainelMorador.destroy({
             where: {
                 id: codigo
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Ligação painel-morador excluída com sucesso!!!",
        })
    }
}