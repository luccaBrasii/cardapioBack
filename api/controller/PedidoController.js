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
}

module.exports = PedidoControler