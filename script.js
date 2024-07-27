const  container = document.querySelector('#container')
const btn = document.querySelector("#btn")
const randomColour = document.querySelector("#Ran")
const grayColour = document.querySelector("#gray")
const clear = document.querySelector("#clear")
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



//get random rgb colours
function getRandomRgbColor() {
    const r = Math.floor(Math.random() * 256); // Random value between 0 and 255
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}


//get gray shade
function getGrayShade(){
    const gray = Math.floor(Math.random() * 256); // Random value between 0 and 255
    return `rgb(${gray}, ${gray}, ${gray})`;
}

function createGrid(ratio){
    
    container.innerHTML = "";

    for (let i = 0; i < ratio * ratio ; i++) {
        let box = document.createElement('div')
        box.classList.toggle('box')
        box.style.width = `calc(100%/${ratio})`
        box.style.height = `calc(100%/${ratio})`
        box.addEventListener('mouseover' , () => {
            box.style.backgroundColor = getRandomRgbColor();
        })
        container.appendChild(box);


        //add shades of gray
        grayColour.addEventListener('click' , () => {
            box.addEventListener('mouseover' , () => {
                box.style.backgroundColor = getGrayShade();
            })
        })

        //add random colours
        Ran.addEventListener('click' , () => {
            box.addEventListener('mouseover' , () => {
                box.style.backgroundColor = getRandomRgbColor();
            })
        })
        
        // clear the sketch pad
        clear.addEventListener ('click', () =>{
            box.style.backgroundColor = "white";
        })
        
    }
}

createGrid(16)