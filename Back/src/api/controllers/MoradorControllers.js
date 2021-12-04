const Morador = require('../models/MoradorModels.js');

module.exports = {

    async index(req, res) {
        const morador = await Morador.findAll();
        return res.json(morador);
    },

    async store(req, res) {
        const { qtd, nome, mor_cpf, rua, cep, renda_total, num_residencial, email, bairro } = req.body;
        const morador = await Morador.create({ qtd, nome, mor_cpf, rua, cep, renda_total, num_residencial, email, bairro });
        return res.status(200).send({
            status: 1,
            message: "Morador cadastrado com sucesso!!!",
            morador
        });
    },

    async update(req, res) {
        const { qtd, nome, mor_cpf, rua, cep, renda_total, num_residencial, email, bairro } = req.body;
        const { codigo } = req.params;

        await Morador.update({
            qtd, nome, mor_cpf, rua, cep, renda_total, num_residencial, email, bairro
        }, { where: {
            id: codigo
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Morador atualizado com sucesso!!!",
        })
    },

    async delete(req, res) {
        const { codigo } = req.params;

        await Morador.destroy({
             where: {
                 id: codigo
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Morador excluído com sucesso!!!",
        })
    }
}