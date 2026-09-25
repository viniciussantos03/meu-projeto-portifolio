// menu hamburguinho

const hamburguinho = document.querySelector('#menu-hamburguinho')
const menu = document.querySelector('#menu')

hamburguinho.addEventListener('click', () => {
    clicou(menu)
})

function clicou(menu) {
    menu.classList.toggle('abrir')
}

const mediaQuery = window.matchMedia('(min-width: 576px)')

function verificarTela(e) {
    if (e.matches) {
        menu.classList.remove('abrir')
    }
}

mediaQuery.addEventListener('change', verificarTela) 

// tema 

const body = document.querySelector('body')

const tema = document.querySelector('#tema')

tema.addEventListener('click', () => {
    body.classList.toggle('dark')
})