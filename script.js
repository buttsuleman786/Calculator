const calculatorScreen = document.querySelector(".calculator-screen");
const buttons = document.querySelectorAll(".button")

buttons.forEach(button => {
    button.addEventListener("click", function()
    {
       if(button.innerText == 0 || button.innerText == 1|| button.innerText == 2|| button.innerText == 3|| button.innerText == 4|| button.innerText == 5|| button.innerText == 6|| button.innerText == 7|| button.innerText == 8|| button.innerText == 9) {
            console.log("You pressed " + button.innerText);
            calculatorScreen.innerText += button.innerText;
       }
       else if(button.innerText == "+") {
            console.log("You pressed " + button.innerText);
            calculatorScreen.innerText += button.innerText;
        }
        else if(button.innerText == "-") {
            console.log("You pressed " + button.innerText);
            calculatorScreen.innerText += button.innerText;
        }
        else if(button.innerText == "*") {
            console.log("You pressed " + button.innerText);
            calculatorScreen.innerText += button.innerText;
        }
        else if(button.innerText == "/") {
            console.log("You pressed " + button.innerText);
            calculatorScreen.innerText += button.innerText;
        }
        else if(button.innerText == "=") {
            console.log("You pressed " + button.innerText);
            calculatorScreen.innerText = eval(calculatorScreen.innerText);
        }
    })
    
});

document.addEventListener("keydown", function(event){
    if (event.key === 'Backspace') {
        calculatorScreen.innerText = calculatorScreen.innerText.slice(0, -1);
    }
    else if (event.keyCode >= 48 && event.keyCode <= 57) {
        calculatorScreen.innerText += event.key;
    }
});