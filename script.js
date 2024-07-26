const  container = document.querySelector('#container')
const btn = document.querySelector("#btn")
// let input = document.querySelector("#inp")


btn.addEventListener('click' , () => {
    let grid;

})

function createGrid(ratio){
    
    for (let i = 0; i < ratio * ratio ; i++) {
        let box = document.createElement('div')
        box.classList.toggle('box')
        box.style.width = `calc(100%/${ratio})`
        box.style.height = `calc(100%/${ratio})`
        box.addEventListener('mouseover' , () => {
            box.style.backgroundColor = 'green';
        })
        container.appendChild(box);
        
    }
}

createGrid(100)