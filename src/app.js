const express = require('express')
const app = express()
const routes = require('../api/routes')



routes(app)

app.use('/css', express.static(__dirname + '/css'))
app.use('/js', express.static(__dirname + '/js'))
app.use('/img', express.static(__dirname + '/img'))

app.listen(3000, function () {
    console.log('http://localhost:3000/');
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/pedidos.html', function (req, res) {
    res.sendFile(__dirname + '/pedidos.html');
});

app.get('/pedidosProntos.html', function (req, res) {
    res.sendFile(__dirname + '/pedidosProntos.html');
});