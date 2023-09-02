// Abrir menu
// Chamando as tags com constantes
const menu = document.getElementById('icone-de-menu')
const paginas = document.getElementById('paginas-de-menu')

// Aplicando o abrir menu
menu.addEventListener('click', ()=> {
    if (paginas.style.left = '-80%') {
        paginas.style.left = '0'
        paginas.style.opacity = '100%'
    }
})

// Fechar menu
// Chamando as outras tags com constantes
let pagina = document.querySelector('.pagina')
const logo = document.getElementById('logo')
const nav = document.getElementById('nav')
const conteudo = document.getElementById('conteudo')
const rodape = document.getElementById('rodape')

// Adicionando os eventos em cada uma delas
pagina.addEventListener('click', fecharMenu)
logo.addEventListener('click', fecharMenu)
nav.addEventListener('click', fecharMenu)
conteudo.addEventListener('click', fecharMenu)
rodape.addEventListener('click', fecharMenu)

// Aplicando o fechar menu
function fecharMenu() {
    paginas.style.left = '-80%'
    paginas.style.opacity = '0'
}