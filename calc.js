// Initial Values
let input1 = '';
let num1;
let input2 = '';
let num2;
let operator;

// Operator Functions
const sub = (num, num2) => {
  total = num - num2;
  console.log('Num1:', num, 'Num2:', num2);
  console.log('Final Sub:', total);
  return total;
};

const add = (num, num2) => {
  total = num + num2;
  console.log('Num1:', num, 'Num2:', num2);
  console.log('Final Add:', total);
  return total;
};

const multiply = (num, num2) => {
  total = num * num2;
  console.log('Num1:', num, 'Num2:', num2);
  console.log('Final Multiply:', total);
  return total;
};

const divide = (num, num2) => {
  if (num2 === 0) {
    total = 'Really???';
    return total;
  } else {
    total = num / num2;
    console.log('Num1:', num, 'Num2:', num2);
    console.log('Final Divide:', total);
    return total;
  }
};

const equals = (input1, input2, operator) => {
  num1 = Number(input1);
  num2 = Number(input2);
  if (input1 === '' || input2 === '') {
    message = 'Error';
    currentDisplay.innerHTML = message;
  } else {
    operate(num1, num2, operator);
    currentDisplay.innerHTML = total;
    return total;
  }
};

const operate = function (num, num2, operator) {
  if (operator === '+') {
    add(num, num2);
  } else if (operator === '-') {
    sub(num, num2);
  } else if (operator === '*') {
    multiply(num, num2);
  } else if (operator === '/') {
    divide(num, num2);
  }
};

// operate(num1, num2, operator);

// Front end
const display = document.getElementById('display');
display.style.display = 'flex';
display.style.justifyContent = 'right';
display.style.width = '242px';
display.style.border = 'solid';
display.style.fontSize = '20px';
display.style.padding = '5px';
display.style.margin = '10px';
display.style.backgroundColor = 'white';

function button(i) {
  const buttons = document.createElement('button');
  buttons.appendChild(document.createTextNode(i));
  buttons.id = i;
  buttons.addEventListener('click', input);
  buttons.style.padding = '10px';
  buttons.style.margin = '7px';
  buttons.style.borderRadius = '5px';
  buttons.style.borderColor = 'white';
  div = document.getElementById('btn');
  div.appendChild(buttons);
}

const calculator = document.getElementById('calculator');
calculator.style.display = 'flex';
calculator.style.flexWrap = 'wrap';
calculator.style.justifyContent = 'center';
calculator.style.width = '280px';
calculator.style.maxWidth = '300px';
calculator.style.border = 'solid';
calculator.style.borderRadius = '15px';
calculator.style.padding = '10px';
calculator.style.backgroundColor = '#565656';

const container = document.getElementById('container');
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.alignItems = 'center';

// Generate buttons
for (let i = 0; i <= 9; i++) {
  button(i);
}

button('+');
button('-');
button('*');
button('/');
button('=');
button('x');
button('AC');

// Input Logic
function input(x) {
  let btn = x.target;
  let btnInput = btn.innerText;
  console.info('button:', btn.innerText);
  let currentDisplay = document.getElementById('currentDisplay');

  if (
    btnInput !== '+' &&
    btnInput !== '-' &&
    btnInput !== '*' &&
    btnInput !== '/' &&
    operator === undefined
  ) {
    if (btnInput === 'x') {
      input1 = input1.slice(0, -1);
      currentDisplay.innerHTML = input1;
    } else {
      input1 += btnInput;
      currentDisplay.innerHTML = input1;
      console.log('Number 1:', input1);
    }
  } else if (
    operator !== '' &&
    input1 !== '' &&
    input2 !== '' &&
    (btnInput === '+' ||
      btnInput === '-' ||
      btnInput === '*' ||
      btnInput === '/')
  ) {
    equals(input1, input2, operator);
    input1 = total;
    console.log('Updated num1:', input1);
    num2 = '';
    input2 = '';
    operator = btnInput;
  } else if (
    operator !== '' &&
    (btnInput === '+' ||
      btnInput === '-' ||
      btnInput === '*' ||
      btnInput === '/')
  ) {
    operator = btnInput;
    console.log('Operator: ', operator);
    currentDisplay.innerHTML = operator;
    btnInput = '';
  } else if (
    btnInput !== '+' &&
    btnInput !== '-' &&
    btnInput !== '*' &&
    btnInput !== '/' &&
    btnInput !== '=' &&
    btnInput !== 'AC'
  ) {
    if (btnInput === 'x') {
      input2 = input2.slice(0, -1);
      currentDisplay.innerHTML = input2;
    } else {
      input2 += btnInput;
      currentDisplay.innerHTML = input2;
      console.log('Number 2:', input2);
    }
  } else if (btnInput === '=') {
    equals(input1, input2, operator);
  } else if (btnInput === 'AC') {
    num1 = '';
    num2 = '';
    input1 = '';
    input2 = '';
    operator = undefined;
    currentDisplay.innerHTML = '0';
    console.log(
      'Num1 Value: ',
      num1,
      'Num2 Value: ',
      num2,
      'Operator: ',
      operator
    );
  }
}
