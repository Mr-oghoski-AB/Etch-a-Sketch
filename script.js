const  container = document.querySelector('#container')

let grid = 16 ;

for (let i = 0; i < grid * grid ; i++) {
    let box = document.createElement('div')
    box.classList.toggle('box')
    box.addEventListener('mouseover' , () => {
        box.style.backgroundColor = 'green';
    })
    container.appendChild(box);
    
}