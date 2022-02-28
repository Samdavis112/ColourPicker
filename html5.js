const colourPicker = document.getElementById("html5ColourPicker");
const backgroundText = document.getElementById("background-text");
const button = document.getElementById("submit");
const hexBox = document.getElementById("hex-in");
const acceptableHexValues = ['#', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F'];


function clickColour(){
    const colour = colourPicker.value;
    document.body.style.backgroundColor = colour;
    backgroundText.textContent = colour;
}

function buttonClicked(){
    const input = hexBox.value;

    let check = 0;
    for(i = 0; i < input.length; i++){
        if(acceptableHexValues.includes(input[i])){
            check++;
        }
    }
    //console.log(check);
    if(check != input.length){
        alert("Please format input to be a valid hex colour code. \n\nE.g #f12345");
        return;
    }
    
    document.body.style.backgroundColor = input;
    backgroundText.textContent  = input;
}

function main(){
    colourPicker.addEventListener("input", clickColour);
    button.addEventListener("click", buttonClicked)
}

main();