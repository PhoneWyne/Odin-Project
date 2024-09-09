// following codde only works for definite amount of arguments, aka 2 in this case
// const removeFromArray = function(inputArray, valueToRemove) {
//     // what happens is .filter takes a callback function, and runs it on each value of whatever is passed to it
//     // value is just a name for each element in array
//     // value !== valueToRemove is, return each element in array that is not equal to the valueToRemove
//     const filteredArray = inputArray.filter((value) => {
//         return value !== valueToRemove;
//     });
//     return filteredArray;

// };

// // Do not edit below this line
// module.exports = removeFromArray;

// now testing to see multiple infinite arguments work
const removeFromArray = function(inputArray, ...valueToRemove) {
    // what happens is .filter takes a callback function, and runs it on each value of whatever is passed to it
    // value is just a name for each element in array
    // value !== valueToRemove is, return each element in array that is not equal to the valueToRemove 
    const filteredArray = (inputArray, valueToRemove) => {
        return inputArray.filter((value) =>  value !== valueToRemove)
    }

    // console.log(filteredArray(inputArray,3));
    // .forEach to iterate through the valuesToRemove array, and send each value individually to filter function to filter out the value
    // store the returned result back in inputArray, so it is updated with each turn, and is without that particular value to remove
    valueToRemove.forEach((value) => inputArray = (filteredArray(inputArray, value)));
    // console.log(inputArray);
    return inputArray;

};

// Do not edit below this line
module.exports = removeFromArray;
