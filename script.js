const  container = document.querySelector('#container')
const btn = document.querySelector("#btn")
// let input = document.querySelector("#inp")


btn.addEventListener('click' , () => {
    let grid;

    do {
        grid = prompt("Enter the number of squares per side for the new grid (maximum 100):");

        if (grid === null) {
            console.log("User canceled the prompt.");
            return; // Exit the function if the user cancels the prompt
        }

        grid = Number(grid);

        if (grid > 0 && grid <= 100) {
            createGrid(grid);
        } else {
            alert("Please enter a number between 1 and 100.");
        }
    } while (grid <= 0 || grid > 100);
})

function createGrid(ratio){
    
    container.innerHTML = "";

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

createGrid(16)