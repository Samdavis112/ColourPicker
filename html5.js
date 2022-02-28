const colourPicker = document.getElementById("html5ColourPicker");

function clickColour(){
    const colour = colourPicker.value;
    document.body.style.backgroundColor = colour;
    document.getElementById("background-text").textContent = colour;
}

function main(){
    colourPicker.addEventListener("input", clickColour);
}

main();
