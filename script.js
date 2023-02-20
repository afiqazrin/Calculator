// const numberButtons = document.querySelectorAll('.number');
// const operatorButtons = document.querySelectorAll('.operator');
// const equalButton = document.querySelector('.equals');
// const decimalButton = document.querySelector('.decimal');
// const previousDisplay = document.querySelector('.previous');
// const currentDisplay = document.querySelector('.current');
// const clearButton = document.querySelector('.clear');
// const percentageButton = document.querySelector('.percentage');
// const reverseButton = document.querySelector('.plus-minus');

// let previousNum = '';
// let currentNum = '';
// let operator = '';
// let justCalculated = false; // initialize justCalculated flag to false

// numberButtons.forEach(number => {
//     number.addEventListener('click', (e) => {
//         handleNum(e.target.textContent);
//         justCalculated = false; // reset justCalculated flag when user enters a number
//     })
// })

// operatorButtons.forEach(operator => {
//     operator.addEventListener('click', (e) => {
//         handleOperator(e.target.textContent);
//         justCalculated = false; // reset justCalculated flag when user enters an operator
//     })
// })

// function handleNum(num) {
//     if (num === '0' && currentNum === '0') { // check if current number is already 0
//         return;
//     }
//     if (currentNum.length < 9) {
//         currentNum += num;
//         currentDisplay.textContent = currentNum;
//     }
//     else {
//         // this prevent users from inputting more than 9 digits
//     }
// }

// equalButton.addEventListener('click', () =>{
//     operate();
//     justCalculated = true; // set justCalculated flag to true after performing a calculation
// });

// reverseButton.addEventListener('click', () => {
//     currentNum = Number(currentDisplay.textContent);
//     currentNum *= -1;
//     currentDisplay.textContent = currentNum.toString();
//   });
// clearButton.addEventListener('click', () => {
//     previousNum = '';
//     currentNum = '';
//     operator = '';
//     currentDisplay.textContent = '0';
//     previousDisplay.textContent = '';//
//     justCalculated = false; // reset justCalculated flag when user clears the display
// })

// percentageButton.addEventListener('click', ()=>{
//     currentNum = Number(currentDisplay.textContent)/100
//     currentDisplay.textContent = currentNum;
// })

// decimalButton.addEventListener('click', () => {
//     if (currentNum === '' || currentNum === '0') {
//       currentNum = '0.';
//     } else if (!currentNum.includes('.')) {
//       currentNum += '.';
//     }
//     currentDisplay.textContent = currentNum;
// });

// function handleOperator(op) {
//     if (operator !== '') {
//         result = operate(); // perform the previous calculation
//         currentDisplay.textContent = result;
//         previousNum = result;
//     }
//     operator = op;
//     previousNum = currentNum;
//     currentDisplay.textContent = '';
//     previousDisplay.textContent = previousNum + " " + operator + " ";
//     justCalculated = false;
//     currentNum = '';
// }
// function operate() {
//     let previousNumber = Number(previousNum);
//     let currentNumber = Number(currentNum);
//     if(operator == '+') {
//         currentNum = previousNumber + currentNumber;
//     }
//     else if(operator == '-') {
//         currentNum = previousNumber - currentNumber;
//     }
//     else if(operator == 'x') {
//         currentNum = previousNumber * currentNumber;
//     }
//     else if(operator == '/') {
//         currentNum = previousNumber / currentNumber;
//     }
//     currentDisplay.textContent = currentNum;
// }

const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equals');
const decimalButton = document.querySelector('.decimal');
const previousDisplay = document.querySelector('.previous');
const currentDisplay = document.querySelector('.current');
const clearButton = document.querySelector('.clear');
const percentageButton = document.querySelector('.percentage');
const reverseButton = document.querySelector('.plus-minus');

let previousNum = '';
let currentNum = '0'; // set currentNum to '0' by default
let operator = '';
let justCalculated = false;


numberButtons.forEach(number => {
    number.addEventListener('click', (e) => {
        console.log(previousNum);
        handleNum(e.target.textContent);
        justCalculated = false;
    })
})

operatorButtons.forEach(operator => {
    operator.addEventListener('click', (e) => {
        handleOperator(e.target.textContent);
        justCalculated = false;
    })
})

function handleNum(num) {
    if (currentNum === '0' && !currentNum.includes('.')) { // check if current number is '0'
        currentNum = num; // replace '0' with the new number
    }
    else if (currentNum.length < 9) {
        currentNum += num;
    }
    currentDisplay.textContent = currentNum;
}

equalButton.addEventListener('click', () =>{
    operate();
    previousDisplay.textContent = '';
    justCalculated = true;
});

reverseButton.addEventListener('click', () => {
    currentNum = Number(currentDisplay.textContent);
    currentNum *= -1;
    currentDisplay.textContent = currentNum;
});

clearButton.addEventListener('click', () => {
    previousNum = '';
    currentNum = '0'; // reset currentNum to '0'
    operator = '';
    currentDisplay.textContent = '0';
    previousDisplay.textContent = '';
    justCalculated = false;
});

percentageButton.addEventListener('click', ()=>{
    currentNum = Number(currentDisplay.textContent)/100;
    currentDisplay.textContent = currentNum;
});

decimalButton.addEventListener('click', () => {
    if (!currentNum.includes('.')) {
        currentNum += '.';
    }
    currentDisplay.textContent = currentNum;
});

function handleOperator(op) {
    if (operator !== '') {
        result = operate(); // perform the previous calculation
        currentDisplay.textContent = result;
        previousNum = result;
    }
    operator = op;
    previousNum = currentNum;
    currentDisplay.textContent = '';
    previousDisplay.textContent = previousNum + " " + operator + " ";
    justCalculated = false;
    currentNum = '0'; // reset currentNum to '0' after handling the operator
}

function operate() {
    let previousNumber = parseFloat(previousNum);
    let currentNumber = parseFloat(currentNum);
    if(operator == '+') {
        currentNum = previousNumber + currentNumber;
    }
    else if(operator == '-') {
        currentNum = previousNumber - currentNumber;
    }
    else if(operator == 'x') {
        currentNum = previousNumber * currentNumber;
    }
    else if(operator == '/') {
        if(currentNumber == 0){
            alert("Don't ever try that again pal.")
            previousNum = '';
            currentNum = '0'; // reset currentNum to '0'
            operator = '';
            currentDisplay.textContent = '0';
            previousDisplay.textContent = '';
            justCalculated = false;
        }
        else{
        currentNum = previousNumber / currentNumber;
    }
    }
    const result = round(currentNum, 2); // round the result to 2 decimal places
    currentDisplay.textContent = result; // display the result on the current display
    return result; // return the result
}
function round(num, places) {
    return Math.round(num * (10 ** places)) / (10 ** places);
}