const { Router } = require('express')
const PedidoControler = require('../controller/PedidoController')
const router = Router()

router.get('/api', PedidoControler.pegaTudo)
module.exports = router