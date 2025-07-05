// Try to use object mapping for operate function & test
// Focus on building out frontend

let num = 2;
let num2 = 3;
let operator = '/';

const sub = (num, num2) => {
  total = num - num2;
  console.log('Final:', total);
};

const add = (num, num2) => {
  total = num + num2;
  console.log('Final:', total);
};

const multiply = (num, num2) => {
  total = num * num2;
  console.log('Final:', total);
};

const divide = (num, num2) => {
  total = num / num2;
  console.log('Final:', total);
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

operate(num, num2, operator);

// Create function to create button
// Use function in loop to do 0-9
// Use function to then make the operator buttons as well (+, -, *, /, =, x or back)

const display = document.getElementById('display');
display.style.display = 'inline-block';
display.style.border = 'solid';
display.style.fontSize = '20px';
display.style.padding = '5px';
display.style.margin = '10px';

function button(i) {
  buttonExample = document.createElement('button');
  buttonExample.appendChild(document.createTextNode(i));
  div = document.getElementById('btn');
  div.appendChild(buttonExample);
}

for (let i = 0; i <= 9; i++) {
  button(i);
}

// const operators = ['+', '-', '*', '/', '=', 'x'];
button('+');
button('-');
button('*');
button('/');
button('=');
button('x');
