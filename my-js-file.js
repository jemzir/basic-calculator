const numpad = document.querySelector('#numpad');

for (let i = 0; i < 20; i +=1) {
    const btn = document.createElement('div');
    numpad.appendChild(btn);
    btn.classList.add('btn')
};

let calculatorItems ="()% 789+456x123-0.=+";

numpad.childNodes[3].textContent = 'AC';

console.log(numpad.childNodes[1]);

for (i = 0; i < 20; i +=1) {
    if (!numpad.childNodes[i].textContent) {
        numpad.childNodes[i].textContent = calculatorItems[i];
    }
}

const display = document.querySelector('#display');
