// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(arr){
    // This function returns the largest number in a given array.
    if (arr.length === 1){
        return arr[0];
    }
    if (arr.length ===2){
        return (arr[0] > arr[1])? arr[0] : arr[1];
    }
    return (arr[0] > findMax(arr.slice(1)))? arr[0] : findMax(arr.slice(1));
}


function factorial(num){
    // This function returns the factorial of a given number.
    if (num === 0){
        return 1;
    }else{
        return num * factorial(num-1);
    }
}

function fibonacci(num){
    if (num ===1 || num ===2) {
        return 1
    }else {
        return fibonacci(num -1) + fibonacci(num-2)
    }
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1
}

function coinFlips(n){
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"
    if (n ===1){
        return ["H","T"];
    }
    let result = [];
    if (n> 1){ 
        const prev = coinFlips(n-1);
        prev.forEach((combination)=> {
            result.push("H"+combination);
            result.push("T"+combination);           
        })
        return result; 
    }
        
    }


function letterCombinations(){
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
}

module.exports = {
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations
}