const pessoas = []


/*setInterval(() => {
    atualizarPagina()
}, 15000)
*/
fetch('http://localhost:3000/api', {
    method: 'GET'
})
    .then(response => response.json())
    .then(function (json) {

        json.map(e => {
            pessoas.push(e)
        })


        pessoas.map(e => {
            if (e.status == 'concluido' && e.status != 'andamento' && e.status != 'entregue') {
                criaPedido(e)
            }
        })
    })

function criaPedido(val) {
    const container = document.querySelector('.pedidos')


    container.innerHTML += `
        <div class="pedido-only">
            <div class="verificado">
                <img class="ok" src="./img/verificado.png">

            </div>
            <div class="info-pedido">
                <h1>Pedido <span class='idPedido'>`+ val.id + `</span> | ` + val.nomePrato + `</h1>
                <h2>`+ val.nome + `</h2>
            </div>

        </div>
        
        `

    pegaID()

}

function pegaID() {
    const elementos = document.querySelectorAll('.verificado')
    elementos.forEach(elemento => {
        elemento.addEventListener('click', () => {
            const idPedido = elemento.closest('.pedido-only').querySelector('.idPedido').textContent;

            attPedido(idPedido)
            location.reload();
        });
    });
}

function attPedido(id) {
    fetch('/api/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            status: 'entregue'
        }),
    })
        .then(response => {
            if (response.ok) {
                console.log('Registro atualizado com sucesso.');
            } else {
                console.error('Erro ao att registro.');
            }
        })
        .catch(error => console.error('Erro ao fazer a requisição DELETE:', error));
}