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
