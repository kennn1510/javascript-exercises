const repeatString = function (string, num) {
  const oneString = string;
  if (num < 0) return "ERROR";
  if (num === 0) return "";
  for (let i = 0; i < num - 1; i++) {
    string += oneString;
  }
  return string;
};

// Do not edit below this line
module.exports = repeatString;
