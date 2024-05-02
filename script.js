const container = document.querySelector(".container");
var colors = ['red', 'green', 'blue', 'orange', 'yellow'];
let side = 40;
let slider = document.querySelector("#range");
let active = "black";
let size = document.querySelector(".square-size");


//buttons init
const black = document.querySelector("#black");
const random = document.querySelector("#random");
const eraser = document.querySelector("#eraser");
const reset = document.querySelector("#reset");
const grey = document.querySelector("#grey");


function generate(){
    side = slider.value ;
    size.textContent = `${side}x${side}`;
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
    for (let i = 0; i < side; i++){
        let row = document.createElement("div");
        for (let j = 0; j< side; j++){
            let cell = document.createElement("div");
            cell.classList.add('cell');
            cell.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
            row.appendChild(cell);
        }
        container.appendChild(row);
        
    }
}
generate();
black.classList.add("active");

slider.addEventListener("input", generate);

function alpha(target){
    let style = getComputedStyle(target);
            let bgColor = style.getPropertyValue('background-color');
            let colors = bgColor.split(', ');
            if (parseFloat(colors[3]) < 1) colors[3] = parseFloat(colors[3]) + 0.1;
            target.style.backgroundColor = colors.join(', ');
}
document.addEventListener("mouseover", function(event){
    if (event.target.classList.contains('cell')){
        if (active==="black") event.target.style.backgroundColor = "black"; 
        if (active==="random") event.target.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        if (active==="eraser") event.target.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
        if (active==="grey") event.target.style.backgroundColor = alpha(event.target);
    }
});

//buttons logic
black.addEventListener("click", ()=>
{
    active="black"
    black.classList.add("active");
    random.classList.remove("active");
    eraser.classList.remove("active");
    grey.classList.remove("active");
});
eraser.addEventListener("click", ()=>
{
    active="eraser";
    eraser.classList.add("active");
    random.classList.remove("active");
    black.classList.remove("active");
    grey.classList.remove("active");
});
random.addEventListener("click", ()=>
{
    active="random";
    random.classList.add("active");
    eraser.classList.remove("active");
    black.classList.remove("active");
    grey.classList.remove("active");
});
grey.addEventListener("click",()=>
{
    active="grey";
    grey.classList.add("active");
    random.classList.remove("active");
    eraser.classList.remove("active");
    black.classList.remove("active");
})
reset.addEventListener("click",generate);
