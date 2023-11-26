// Abrir menu
// Chamando as tags com constantes
const menu = document.getElementById('icone-de-menu')
const paginas = document.getElementById('paginas-de-menu')

// Aplicando o abrir menu
menu.addEventListener('click', ()=> {
    if (paginas.style.left = '-80%') {
        paginas.style.left = '0'
        paginas.style.opacity = '100%'
        
        // Nomes das páginas navegáveis por tab
        for (let i = 0 ; i <= 1 ; i++) {
            let pagina = document.getElementsByClassName('pagina')[i]
            pagina.style.display = 'flex'
        }
    }
})

// Acesso ao menu usando o teclado
menu.addEventListener('keypress', (tecla) => {
    if (tecla.key === 'Enter') {
        tecla.target.click()

        // Deixando a primeira opção do menu focalizada ao abrí-lo
        const inicio = document.getElementsByTagName('a')[1]
        inicio.focus()

    }
})

// Fechar menu
// Chamando as outras tags com constantes
const logo = document.getElementById('logo')
const nav = document.getElementById('nav')
const conteudo = document.getElementById('conteudo')
const rodape = document.getElementById('rodape')

// Adicionando o evento em cada uma delas
for (let i = 0 ; i <= 1 ; i++) {
    let pagina = document.getElementsByClassName('pagina')[i]
    pagina.addEventListener('click', fecharMenu)
}
logo.addEventListener('click', fecharMenu)
nav.addEventListener('click', fecharMenu)
conteudo.addEventListener('click', fecharMenu)
rodape.addEventListener('click', fecharMenu)

// Aplicando o fechar menu
function fecharMenu() {
    paginas.style.left = '-80%'
    paginas.style.opacity = '0'

    // Nomes das páginas não navegáveis por tab
    for (let i = 0 ; i <= 1 ; i++) {
        let pagina = document.getElementsByClassName('pagina')[i]
        pagina.style.display = 'none'
    }
}
