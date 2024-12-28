const palindromes = function (string) {
  const newString = string.toLowerCase().replace(/[^\w]/g, "");
  const newStringMiddleIndex = newString.length / 2;
  for (let i = 0; i < newStringMiddleIndex; i++) {
    if (newString[i] !== newString[newString.length - 1 - i]) return false;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
