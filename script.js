
const monstros = [
    {
        id: 1,
        nome: 'Devinho',
        altura: 2,
        habilidades: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt laudantium minus pariatur quasi facilis minima nobis sequi nesciunt nihil, voluptas assumenda aliquid, temporibus qui laborum harum ab perferendis dolorem expedita!',
        foto: 'https://www.robohash.org/devinho'
    },

    {
        id: 2,
        nome: 'Osvaldo',
        altura: 1.5,
        habilidades: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt laudantium minus pariatur quasi facilis minima nobis sequi nesciunt nihil, voluptas assumenda aliquid, temporibus qui laborum harum ab perferendis dolorem expedita!',
        foto: 'https://www.robohash.org/osvaldo'
    },

    {
        id: 3,
        nome: 'Luigi',
        altura: 5,
        habilidades: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt laudantium minus pariatur quasi facilis minima nobis sequi nesciunt nihil, voluptas assumenda aliquid, temporibus qui laborum harum ab perferendis dolorem expedita!',
        foto: 'https://www.robohash.org/luigi'
    },

    {
        id: 4,
        nome: 'Felix',
        altura: 4,
        habilidades: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt laudantium minus pariatur quasi facilis minima nobis sequi nesciunt nihil, voluptas assumenda aliquid, temporibus qui laborum harum ab perferendis dolorem expedita!',
        foto: 'https://www.robohash.org/felix'
    }
]

const secao = document.querySelector('.monstros')
const botao = document.querySelector('.btn')

botao.addEventListener('click', () =>{
    document.documentElement.classList.toggle('dark')
})

const todosOsMonstros = monstros.map(monstro => {
    return `<div>
        <p>Nome: ${monstro.nome}</p>
        <p>Altura: ${monstro.altura}</p>
        <img src="${monstro.foto}">
        <p class="habilidade">Habilidades: ${monstro.habilidades}</p>
    </div>`
})

secao.innerHTML = todosOsMonstros