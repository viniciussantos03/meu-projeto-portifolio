// menu hamburguinho

const hamburguinho = document.querySelector('#menu-hamburguinho')
const menu = document.querySelector('#menu')
const hamburguinhoLinks = document.querySelectorAll('#menu a')

function fecharMenu() {
    menu.classList.remove('abrir')
}

const mediaQuery = window.matchMedia('(min-width: 576px)')

function verificarTela(e) {
    if (e.matches) {
        menu.classList.remove('abrir')
    }
}

mediaQuery.addEventListener('change', verificarTela) 

hamburguinho.addEventListener('click', () => {
    menu.classList.toggle('abrir')
})

hamburguinhoLinks.forEach((a)=>  {
    a.addEventListener('click', () => {
        fecharMenu()
    })
})

hamburguinho.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') {
        fecharMenu()
    }
})

// tema 

const body = document.querySelector('body')

const tema = document.querySelector('#tema')

function verificarTema() {
    if(body.classList.contains('dark')) {
        localStorage.setItem('tema', 'dark')
    } else {
        localStorage.setItem('tema', 'light')
    }
}

function aplicarTema() {
    const temaSalvo = localStorage.getItem('tema')

    if(temaSalvo === 'dark') {
        body.classList.add('dark')
    } else {
        body.classList.remove('dark')
    }
}

tema.addEventListener('click', (e) => {
    e.preventDefault()
    body.classList.toggle('dark')

    verificarTema()
})

aplicarTema()