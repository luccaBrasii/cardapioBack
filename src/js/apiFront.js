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
            if (e.status != 'concluido' && e.status == 'andamento') {
                criaPedido(e, imgPrato(e.nomePrato))
            }
        })
    })






function criaPedido(val, prato) {
    const container = document.querySelector('.pedidos')


    container.innerHTML += `
    <div class="pedido-only">
            <div>
                <img class="prato" src=`+ prato + `>
            </div>
            <div class="info-pedido">
                <h1>Pedido <span class='idPedido'>`+ val.id + `</span> | ` + val.nomePrato + `</h1>
                <h3>Nome</h3>
                <p>`+ val.nome + `</p>
                <h3>Telefone</h3>
                <p>`+ val.telefone + `</p>
                <h3>Para viagem</h3>
                <p>`+ val.viagem + `</p>
            </div>
            <div class="verificado">
                <img class="ok" src="./img/ampulheta.png">
                <h3 style="margin-right: 10px;">Pedido em andamento</h3>
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
            //atualizarPagina()
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
            status: 'concluido'
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

function atualizarPagina() {
    location.reload();
}


function imgPrato(val) {
    if (val == 'Strogonoff de frango') {
        return './img/img1.avif'
    } else if (val == 'Escondidinho de carne') {
        return './img/escondidinho.jpg'
    } else if (val == 'Galinhada') {
        return './img/galinhada.jpg'
    }
}