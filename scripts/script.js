// menu hamburguinho

const hamburguinho = document.querySelector('#menu-hamburguinho')
const menu = document.querySelector('#menu')

hamburguinho.addEventListener('click', () => {
    clicou(menu)
})

function clicou(menu) {
    menu.classList.toggle('abrir')
}