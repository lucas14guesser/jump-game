const mario = document.querySelector('.mario')
const tubo = document.querySelector('.tubo')
const nuvens = document.querySelector('.nuvens')

const pulo = () => {
    mario.classList.add('pulo')

    setTimeout(() => {
        mario.classList.remove('pulo')
    }, 500)
}

const loop = setInterval(() => {
    const posicaoTubo = tubo.offsetLeft
    const posicaoNuvens = nuvens.offsetLeft
    const posicaoMario = +window.getComputedStyle(mario).bottom.replace('px', '')

    if(posicaoTubo <= 120 && posicaoTubo > 0 && posicaoMario < 80) {
        tubo.style.animation = 'none'
        tubo.style.left = `${posicaoTubo}px`

        nuvens.style.animation = 'none'
        nuvens.style.left = `${posicaoNuvens}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${posicaoMario}px`

        mario.src = "../img/game-over.png"
        mario.style.width = "75px"
        mario.style.marginLeft = "50px"


        clearInterval(loop)
    }
}, 10)

document.addEventListener('keydown', pulo)