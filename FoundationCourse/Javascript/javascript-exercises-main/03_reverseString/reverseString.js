// function that takes in 1 word, and returns it after reversing it
function reverseWord (word){
    // .length returns normal length, JS runs from 0 to length-1
    wordLength = word.length - 1;
    revWord = "";
    // need to run from last character, to 1st, length-1 to 0 index basically
    while(wordLength >= 0){
        revWord += word[wordLength];
        wordLength -= 1;
    }
    return revWord;

};
const reverseString = function(string) {
    let revString = '';
    // if string empty, return immediately
    if(string === ""){
        return revString;
    }

    // word = "Ahmed"
    // // for (w of word){
    // //     console.log(w)
    // // }
    // split into array of indiviudal words
    // reverse each word/element in array
    
    // for length of array, pop values from original array, popped values are from end of list
    // sentence is also reversed, not just words, so start popping and concatenting each word to revString
    // OR
    // just go over array in reverse, and after swapping each word, concat that word into revString
    let wordsArray = string.split(" ");
    let arrayLength = wordsArray.length - 1;
    // going over array in reverse, starting from last element, and going to 1st
    while(arrayLength >= 0){
        let word = wordsArray[arrayLength];
        revString += `${reverseWord(word)} `;
        arrayLength -= 1;
    }
    // need to strip whitespace at end of revString
    console.log(`Reversed string is ${revString}`);
    revString = revString.trimEnd();
    return revString;

};

// Do not edit below this line
module.exports = reverseString;
