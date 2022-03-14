// # Strings

// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.

// ## DrEvil

// Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
// ```
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
// ```
const DrEvil = function(amount){
    if (amount >= 1000000) {
        console.log(`${amount} dollars (pinky)`);
    } else {
        console.log(`${amount} dollars`);
    }; 
    };

// ## MixUp

// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
// ```
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
// ```
const mixUp = function(mxWord1, mxWord2){
    return `${mxWord2.substring(0,2)}${mxWord1.substring(2)} ${mxWord1.substring(0,2)}${mxWord2.substring(2)} `
};

// ## FixStart

// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
// ```
// fixStart('babble'): 'ba**le'
// ```
const fixStart = function(word){
    let firstChar = word.charAt(0);
    let woFirstChar = word.substring(1);
    let result = woFirstChar.replaceAll(`${firstChar}`,`*`)
    console.log(`${firstChar}${result}`);  

    
    //console.log(`${word.replaceAll(`${word.chartAt(0)}`,`*`)}`);
}
// ## Verbing

// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
// ```
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
// ```

const verbing = function(str1){
    if (str1.length >= 3){
        if (str1.endsWith('ing')){
            console.log(`${str1}ly`);
        } else {
            console.log(`${str1}ing`);
        }

    } else {
        console.log(str1);
    }
}

  verbing('swim')
  verbing('swimming')
  verbing('go')
  verbing('bed')
  verbing('bedding')

// ## Not Bad

// Create a function called notBad that takes a single argument, a string.
// - It should find the first appearance of the substring 'not' and 'bad'.
// - If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// - If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

// For example:
// ```
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'
// ```

const notBad = function(str2){
    if (str2.includes('not') && str2.includes('bad')){
        if (str2.indexOf('not') < str2.indexOf('bad')) {
            console.log(`${str2.slice(0, str2.indexOf('not'))}good.`)

        } else {
            console.log(str2);
        }
        
    } else {
      console.log(str2);
    }
}


notBad('This dinner is not that bad!')
notBad('This movie is not so bad!')
notBad('This dinner is bad!')
notBad('This dread has a bad not')

