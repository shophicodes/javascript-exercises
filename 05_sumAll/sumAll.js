const sumAll = function(startingNumber, endingNumber) {
    if(
        startingNumber < 0 ||
        endingNumber < 0 ||
        typeof startingNumber !== "number" ||
        typeof endingNumber !== "number"
    ) 
    {
        return "ERROR";
    }

    let sum = 0;
    if(startingNumber > endingNumber) {
        for(let i = startingNumber; i >= endingNumber; i--) {
            sum += i;
        }
    }
    else {
        for(let i = startingNumber; i <= endingNumber; i++) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
