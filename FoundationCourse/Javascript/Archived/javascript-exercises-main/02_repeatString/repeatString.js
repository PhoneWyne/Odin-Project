const repeatString = function (baseString, num) {
  let returnString = "";
  //   edge case, if passed number is less than zero, negative
  if (num < 0) {
    return "ERROR";
  }
  if (!baseString) {
    // console.log("empty str")
    return "";
  }

  for (let i = 0; i < num; i++) {
    // returnString = returnString + baseString;
    returnString += baseString;
  }

  return returnString;
};

// Do not edit below this line
module.exports = repeatString;
