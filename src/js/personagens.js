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
            let personagem = document.getElementsByClassName('personagem')[i - 1]
            personagem.innerHTML += `<p> <img src="../image/personagem-${i}.jpeg" /> </p>`
            personagem.innerHTML += `Nome: ${data.name} <br>`
            personagem.innerHTML += `Massa: ${data.mass} <br>`
            personagem.innerHTML += `Cor do cabelo: ${data.hair_color} <br>`
            personagem.innerHTML += `Cor da pele: ${data.skin_color} <br>`
            personagem.innerHTML += `Cor dos olhos: ${data.eye_color} <br>`
            personagem.innerHTML += `Ano de nascimento: ${data.birth_year} <br>`
            personagem.innerHTML += `Identidade de gênero: ${data.gender} <br>`
        })

        // Prevendo erros de aplicação
        .catch(error => personagem.innerHTML = '<strong> Erro nos códigos aplicados. </strong>')
    }
}

// Chamando a função para o funcionamento
mostrarPersonagens()