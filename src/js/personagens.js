let personagens = document.getElementById('personagens')
console.log(personagens)

function mostrarPersonagens() {
    
    // personagens.innerHTML = ''
    fetch('https://swapi.dev/api/people/')
    .then(res => {return res.json() } )
    .then(data => { personagens.innerHTML = `<p> ${data.results.name} </p><p> ${data.result.name} </p><p> ${data.name} </p>`
    data.results.map( (atributo) => {
        personagens.innerHTML += ` <p> ${atributo.mass} - ${atributo.result.hair_color} - ${atributo.results.skin_color} - ${atributo.results.eye_color} - ${atributo.results.birth_year} - ${atributo.results.gender} </p>` } )
    })
    .catch(error => personagens.innerHTML = '<strong> Erro na consulta. </strong>')

}
mostrarPersonagens()