console.log("running");

// 1. We use arguments to call the functions and provide the parameter with a value.
// 2. Return will end the function and return the value, console.log will display the value within the browsers console.
// 3. If not returned it will be a undefined value

// a function checkPalindrome 
// that accepts a single argument, a string. 
// The function should return true if the string is a palindrome, 
// False if not. 
// Make sure your function will give the correct answer for words with capital letters.

const checkPalindrom = (string) => {

    return string == string.split('').reverse().join('');
 }

console.log(checkPalindrom("dogcat"));

