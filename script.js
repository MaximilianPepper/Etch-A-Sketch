const container = document.querySelector(".container");
let side = 20;
let slider = document.querySelector("#range");

function generate(){
    side = slider.value ;
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
    for (let i = 0; i < side; i++){
        let row = document.createElement("div");
        for (let j = 0; j< side; j++){
            let cell = document.createElement("div");
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        container.appendChild(row);
        
    }
}

slider.addEventListener("input", generate);
generate();

document.addEventListener("mouseover", function(event){
    if (event.target.classList.contains('cell')){
        event.target.classList.add('black');
    }
});
