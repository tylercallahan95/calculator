let input1 = '';
let num1;
let input2 = '';
let num2;
let operator;

const sub = (num, num2) => {
  total = num - num2;
  console.log('Final Sub:', total);
  return total;
};

const add = (num, num2) => {
  total = num + num2;
  console.log('Final Add:', total);
  return total;
};

const multiply = (num, num2) => {
  total = num * num2;
  console.log('Final Multiply:', total);
  return total;
};

const divide = (num, num2) => {
  if (num2 === 0) {
    total = 'Really???';
    return total;
  } else {
    total = num / num2;
    console.log('Final Divide:', total);
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

operate(num1, num2, operator);

// Create function to create button
// Use function in loop to do 0-9
// Use function to then make the operator buttons as well (+, -, *, /, =, x or back)

const display = document.getElementById('display');
display.style.display = 'inline-block';
display.style.border = 'solid';
display.style.fontSize = '20px';
display.style.padding = '5px';
display.style.margin = '10px';

// const operators = ['+', '-', '*', '/', '=', 'x'];

function input(x) {
  let btn = x.target;
  let btnInput = btn.innerText;
  console.info('button:', btn.innerText);
  let currentDisplay = document.getElementById('currentDisplay');
  currentDisplay.innerHTML = btnInput;

  if (
    btnInput !== '+' &&
    btnInput !== '-' &&
    btnInput !== '*' &&
    btnInput !== '/' &&
    operator === undefined
  ) {
    input1 += btnInput;
    num1 = Number(input1);
    console.log('Number 1:', num1);
  } else if (
    btnInput === '+' ||
    btnInput === '-' ||
    btnInput === '*' ||
    btnInput === '/'
  ) {
    operator = btnInput;
    console.log('Operator: ', operator);
    btnInput = '';
  } else if (
    btnInput !== '+' &&
    btnInput !== '-' &&
    btnInput !== '*' &&
    btnInput !== '/' &&
    btnInput !== '=' &&
    btnInput !== 'AC'
  ) {
    input2 += btnInput;
    num2 = Number(input2);
    console.log('Number 2:', num2);
  } else if (btnInput === '=') {
    if (input1 === '' || input2 === '') {
      message = 'Error';
      currentDisplay.innerHTML = message;
    } else {
      operate(num1, num2, operator);
      currentDisplay.innerHTML = total;
      num1 = total;
    }
  } else if (btnInput === 'AC') {
    num1 = '';
    num2 = '';
    input1 = '';
    input2 = '';
    operator = undefined;
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

function button(i) {
  buttonExample = document.createElement('button');
  buttonExample.appendChild(document.createTextNode(i));
  buttonExample.id = i;
  buttonExample.addEventListener('click', input);
  div = document.getElementById('btn');
  div.appendChild(buttonExample);
  // console.log(buttonExample.textContent);
}

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
