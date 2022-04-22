const numpad = document.querySelector('#numpad');

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}

for (let i = 0; i < 20; i +=1) {
    const btn = document.createElement('div');
    numpad.appendChild(btn);
    btn.classList.add('btn')

    if (!isPrime(i) && i > 3 && i < 15 || i === 5 || i === 13 || i === 16) {
        btn.classList.add('number');
    }
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
            valuePreOp ='';
            valuePostOp ='';
            operatorValue='';
            displayValue='';
            display.textContent = '';
            return
        } else if (!e.target.classList.contains("operator") &&
                    !e.target.classList.contains("equalsign")) {
        display.textContent += e.target.textContent;
        } else if (displayValue) {
            display.textContent = '';
            display.textContent += e.target.textContent;
        }
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

let valuePreOp ='';
let valuePostOp ='';
let operatorValue ='';
let displayValue ='';

const equalsign = document.querySelector('.equalsign');

const btnOperators = document.querySelectorAll('.operator')

btnOperators.forEach((operator) => {
    operator.addEventListener('click', (e) => {
       
        if (!display.textContent) {
            display.textContent = 'Error';
        } else if (e.target.textContent === "%") {
            display.textContent = `${operate(display.textContent, 1, e.target.textContent)}`;
        } else if (!valuePreOp) {
            valuePreOp = display.textContent;
            display.textContent = '';
            operatorValue = e.target.textContent;
        } else if (valuePreOp && operatorValue) {
            valuePostOp = display.textContent;
            display.textContent = `${operate(valuePreOp, valuePostOp, operatorValue)}`;
            operatorValue ='';
            valuePreOp = display.textContent;
            valuePostOp='';
        }
        if (valuePostOp) {
        displayValue = display.textContent;
        }
    })
})

equalsign.addEventListener('click', () => {
    valuePostOp = display.textContent;
    display.textContent = `${operate(valuePreOp, valuePostOp, operatorValue)}`;
    valuePreOp = display.textContent;
})

function operate(num1, num2, operator) {
    switch(operator) {
        case "+":
            return +num1 + +num2
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