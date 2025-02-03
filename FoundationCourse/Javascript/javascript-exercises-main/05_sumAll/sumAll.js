const sumAll = function(min, max) { 
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    // incase when min > max
    if(min > max){
        [min, max] = [max, min];        
    }
    let sum = 0;
    while(min <= max){
        sum += min;
        min += 1;
    };    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
