const reverseString = function(inputString) {
    // let returnString = "";
    // for (let i = (inputString.length - 1); i >=0; i--){
    //     // console.log(inputString[i]);
    //     returnString += inputString[i];
    // }
    // return returnString;
    return inputString.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
