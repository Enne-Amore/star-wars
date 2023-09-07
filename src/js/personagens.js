// Formando a funcionalidade da API
function mostrarPersonagens() {
    // Criando a variável para a URL
    let url = 'https://swapi.dev/api/people/'
    
    // Acessando cada info de cada personagem
    for (let i = 1 ; i <= 10 ; i++) {
        fetch(url + i + '/')
        .then(res => { return res.json() } )
        .then(data => {
            // Adicionando cada info na tela
            let foto = document.getElementsByClassName('foto')[i - 1]
            foto.innerHTML += `<img src="../image/personagem-${i}.jpeg" />`
        })
    }
    for (let n = 1 ; n <= 10 ; n++) {
            fetch(url + n + '/')
            .then(res => { return res.json() } )
            .then(data => {
                // Adicionando cada info na tela
                let nome = document.getElementsByClassName('nome')[n - 1]
                nome.innerHTML += data.name
        })
    }
    for (let a = 1 ; a <= 10 ; a++) {
            fetch(url + a + '/')
            .then(res => { return res.json() } )
            .then(data => {
                // Adicionando cada info na tela
                let aspecto = document.getElementsByClassName('aspecto')[a - 1]
                aspecto.innerHTML += `Massa: ${data.mass} <br>`
                aspecto.innerHTML += `Cor do cabelo: ${data.hair_color} <br>`
                aspecto.innerHTML += `Cor da pele: ${data.skin_color} <br>`
                aspecto.innerHTML += `Cor dos olhos: ${data.eye_color} <br>`
                aspecto.innerHTML += `Ano de nascimento: ${data.birth_year} <br>`
                aspecto.innerHTML += `Identidade de gênero: ${data.gender} <br>`
        })
    }

        // Prevendo erros de aplicação
        let erro = document.getElementsByClassName('personagem')[0]
        .catch(error => erro.innerHTML = '<strong> Erro nos códigos aplicados. </strong>')
}

// Chamando a função para o funcionamento
mostrarPersonagens()