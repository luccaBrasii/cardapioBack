fetch('http://localhost:3000/api', {
    method: 'GET'
})
    .then(response => response.json())
    .then(function (json) {

        document.querySelector('#nome').textContent = json[0].nome
        document.querySelector('#telefone').textContent = json[0].telefone
        document.querySelector('#id').textContent = json[0].id
        console.log(json.length);

    })