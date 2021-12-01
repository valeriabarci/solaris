const Sistema = require('../models/SistemaModels.js');

module.exports = {

    async index(req, res) {
        const sistema = await Sistema.findAll();
        return res.json(sistema);
    },

    async store(req, res) {
        const {  } = req.body;
        const sistema = await Sistema.create({  });
        return res.status(200).send({
            status: 1,
            message: "Sistema cadastrado com sucesso!!!",
            sistema
        })
    },

    async update(req, res) {
        const {  } = req.body;
        const { codigo } = req.params;

        await Sistema.update({
            
        }, { where: {
            id: codigo
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Sistema atualizado com sucesso!!!",
        })
    },

    async delete(req, res) {
        const { codigo } = req.params;

        await Sistema.destroy({
             where: {
                 id: codigo
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Sistema excluído com sucesso!!!",
        })
    }
}