const removeFromArray = function(inputArray, ...numToRemove) {
    return inputArray.filter((num) => {        
        if(!numToRemove.includes(num)){
            return true;
        }
    });
};

// Do not edit below this line
module.exports = removeFromArray;
