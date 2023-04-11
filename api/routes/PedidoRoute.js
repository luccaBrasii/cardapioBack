const { Router } = require('express')
const PedidoControler = require('../controller/PedidoController')
const router = Router()

router.get('/api', PedidoControler.pegaTudo)
router.post('/api', PedidoControler.criaPedido)
router.put('/api/:id', PedidoControler.attPedido)
router.delete('/api/registros/:id', PedidoControler.deletaPedido)


module.exports = router