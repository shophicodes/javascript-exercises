const fibonacci = function(n) {
    if(n < 0) {
        return "OOPS";
    }
    let fibonacciNumbers = [1];
    for(let i = 1; i < n; i++) {
        if(i - 2 < 0) {
            fibonacciNumbers.push(1);
        }
        else {
            fibonacciNumbers.push(fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2]);
        }
    }
    return fibonacciNumbers[fibonacciNumbers.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
