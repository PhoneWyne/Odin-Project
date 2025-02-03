const repeatString = function(string, num) {
    
    // This function takes in "string", and repeats it by amount of "num"
    
    let returnString = '';
    // return "ERROR" if number of repetitions is negative
    if (num < 0){
        return "ERROR"
    }
    // return empty if "string" is empty
    if (string === ""){
        return returnString;
    }
    while(num > 0){
        returnString += string;
        num -= 1;
    }
    return returnString
};

// Do not edit below this line
module.exports = repeatString;
