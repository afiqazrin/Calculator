const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equals');
const decimalButton = document.querySelector('.decimal');
const previousDisplay = document.querySelector('.previous');
const currentDisplay = document.querySelector('.current');

let previousNum = '';
let currentNum = '';
let operator = '';

numberButtons.forEach(number => {
    number.addEventListener('click', (e) => {
        handleNum(e.target.textContent);
    })
})

operatorButtons.forEach(operator => {
    operator.addEventListener('click', (e) => {
        handleOperator(e.target.textContent);
    })
})

function handleNum(num) {
    if (currentNum.length < 9) {
        currentNum += num;
        currentDisplay.textContent = currentNum;
    }
    else {
        // this prevent users from inputting more than 9 digits
    }
}

function handleOperator(op) {
    operator = op;
    previousNum = currentNum;
    console.log(previousNum);
    previousDisplay.textContent = previousNum + " " + operator + " ";
    currentNum = '';
}
function operate() {
    let previousNumber = Number(previousNum);
    let currentNumber = Number(currentNum);
    // to be continued
}