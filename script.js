let screen = document.querySelector('.screen');
let numbersButtons = document.querySelectorAll('.gray');
let actionsButtons = document.querySelectorAll('.black');
let equallyButton = document.querySelector('.orange');
let clearButton = document.getElementById('clearButton');

let num1 = null;
let num2 = null;
let action = null;

numbersButtons.forEach(element => {
    element.addEventListener('click', () => {
        if(screen.innerText.length <= 11){
            screen.innerText += element.innerText;
        }
    });
});

actionsButtons.forEach(element => {
    element.addEventListener('click', () => {
        num1 = screen.innerText;
        action = element.innerText;
        if(action == "+"){
            action = "addition";
        }
        else if(action == "-"){
            action = "deduction";
        }
        else if(action == "x"){
            action = "multiply";
        }
        else if(action == "÷"){
            action = "division";
        }
        screen.innerText = "";
    });
});

clearButton.addEventListener('click', () => {
    screen.innerText = "";
    num1 = null;
    num2 = null;
    action = null;
});

equallyButton.addEventListener('click', () => {
    num2 = screen.innerText;
    screen.innerText = "";
    count(num1, num2, action);
});

function count(num1, num2, action){
    let params = "?num1=" + num1 + "&num2=" + num2 + "&action=" + action;
    let XML = new XMLHttpRequest();
    XML.open('GET', './calc.php' + params);
    XML.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    XML.send();
    XML.addEventListener('load', () => {
        let answer = XML.responseText;
        screen.innerText = answer.slice(0, 12);
    });
    XML.addEventListener('error', () => {
        screen.innerText = "Error";
    });
}