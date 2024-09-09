const sumAll = function(firstNum, secondNum) {
    let sum = 0;
    // check if either is not int
    if(!Number.isInteger(firstNum) || !Number.isInteger(secondNum)){
        // console.log("non int entered")
        return "ERROR";
    }
    
    // check for negative numbers
    if(firstNum < 0 || secondNum <0){
        return "ERROR";
    }
    // firstNum can be smaller too
    if(firstNum >= secondNum){
        // swap them
        [firstNum, secondNum] = [secondNum, firstNum];
        // console.log(`After swap, ${firstNum}, and ${secondNum}`)
    }
    
    while(firstNum <= secondNum){        
        sum += firstNum;
        firstNum += 1;
    }
    return sum;    
};

// Do not edit below this line
module.exports = sumAll;
