const add = function (firstNumber, secondNumber) {
  return firstNumber + secondNumber;
};

const subtract = function (firstNumber, secondNumber) {
  return firstNumber - secondNumber;
};

const sum = function (array) {
  return array.reduce((accumulator, currentNumber) => {
    return accumulator + currentNumber;
  }, 0);
};

const multiply = function (array) {
  return array.reduce((total, currentValue) => {
    return total * currentValue;
  }, 1);
};

const power = function (firstNum, secondNum) {
  return firstNum ** secondNum;
};

const factorial = function (num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
