const sumAll = function (beginningNumber, endingNumber) {
  let sum = 0;
  if (
    beginningNumber < 0 ||
    endingNumber < 0 ||
    !Number.isInteger(beginningNumber) ||
    !Number.isInteger(endingNumber)
  ) {
    return "ERROR";
  }
  if (beginningNumber < endingNumber) {
    for (let i = beginningNumber; i <= endingNumber; i++) {
      sum += i;
    }
  } else {
    for (let i = beginningNumber; i >= endingNumber; i--) {
      sum += i;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
