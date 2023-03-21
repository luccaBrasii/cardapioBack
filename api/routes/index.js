const bodyParser = require('body-parser')
const pedidos = require('./PedidoRoute')

module.exports = app => {
    app.use(bodyParser.json(),
        pedidos)


}