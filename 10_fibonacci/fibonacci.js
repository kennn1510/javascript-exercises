const fibonacci = function (num) {
  if (num < 0) return "OOPS";
  if (num == 0) return 0;
  if (num == 1) return 1;
  else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
  //1,1,2,3,5,8
};

// Do not edit below this line
module.exports = fibonacci;
