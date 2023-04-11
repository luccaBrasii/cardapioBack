const database = require('../models');

class PedidoControler {
    static async pegaTudo(req, res) {
        try {
            const todosOsPedidos = await database.pedidos.findAll();

            return res.status(200).json(todosOsPedidos)
        } catch (erro) {
            res.status(500).json(erro)
        }
    }


    static async criaPedido(req, res) {
        const novoPedido = req.body
        try {
            const newPedido = await database.pedidos.create(novoPedido)
            return res.status(200).json(newPedido)
        } catch (erro) {
            res.status(500).json(erro)
        }
    }

    static async attPedido(req, res) {
        const { id } = req.params
        const att = req.body
        try {
            await database.pedidos.update(att,{
                where: { id: Number(id) }
            })
            return res.status(200).json({ mensagem: `id ${id} atualizado` })
        } catch (erro) {
            res.status(500).json(erro)
        }
    }

    static async deletaPedido(req, res) {
        const { id } = req.params
        try {
            await database.pedidos.destroy({
                where: { id: Number(id) }
            })
            return res.status(200).json({ mensagem: `id ${id} deletado` })
        } catch (erro) {
            res.status(500).json(erro)
        }
    }

}

module.exports = PedidoControler