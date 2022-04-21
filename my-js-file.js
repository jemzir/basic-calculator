const numpad = document.querySelector('#numpad');

for (let i = 0; i < 20; i +=1) {
    const btn = document.createElement('div');
    numpad.appendChild(btn);
    btn.classList.add('btn')
};

let calculatorItems ="()% 789÷456x123-0.=+";
let operators ="%÷x-+";

numpad.childNodes[3].textContent = 'AC';

for (i = 0; i < 20; i +=1) {
    if (!numpad.childNodes[i].textContent) {
        numpad.childNodes[i].textContent = calculatorItems[i];
    }
}

const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.textContent === 'AC') {
            display.textContent = '';
            return
        }
        display.textContent += e.target.textContent;
    })
})

const display = document.querySelector('#display');
display.textContent = '';

numpad.childNodes[0].classList.add('parenthesis');
numpad.childNodes[1].classList.add('parenthesis');

btns.forEach((btn) => {
    for (i = 0; i <= operators.length; i +=1)
    if (btn.textContent === "=") {
        btn.classList.add('equalsign')
    } else if (btn.textContent === operators[i]) {
        btn.classList.add('operator')
    }
})

let displayValue ='';

function operate(num1, num2, operator) {
    switch(operator) {
        case "+":
            return num1 + num2
        case "-":
            return num1 - num2
        case "÷":
            return num1 / num2
        case "x":
            return num1 * num2
        case "%":
            return num1 * 0.01
    }
}