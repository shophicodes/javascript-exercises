const palindromes = function(str) {
    let cleanedString = "";
    let palindromeString = "";
    for(let i = 0; i < str.length; i++) {
        if(str[i].toLowerCase() != str[i].toUpperCase()) {
            cleanedString += str[i];
        }
    }
    cleanedString = cleanedString.toLowerCase();
    for(let i = cleanedString.length - 1; i > -1; i--) {
        palindromeString += cleanedString[i];
    }
    return cleanedString === palindromeString ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
