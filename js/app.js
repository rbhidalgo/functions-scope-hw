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
    console.log(string);
    return string.toString('').toLowerCase('') == string.toString('').toLowerCase('').split('').reverse().join('');
 }

console.log(checkPalindrom("Radar"));

// Write a function sumDigits that accepts a number 
// and returns the sum of its digits.

const sumDigits = (numbers) => {
    //  chnage the numbers to a string
    let string1 = numbers.toString();{
        // console.log(string1)
    }
    let sum = 0;
        for (let i = 0; i < string1.length; i++) {
             sum += Number(string1[i]);
            console.log(sum)
        }
}
    // numb1.tostring(); 
    // loop through and add all the elements into an empty array
    // for (let i = 0; i <= array.length; i++){

sumDigits(4274);

// 4.
// Write a function calculateSide that takes 
// two arguments: sideA and sideB, and returns the solution for sideC using the Pythagorean theorem.

const calculateSide = (sideA, sideB) => {
let pythagorean = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));{
console.log(pythagorean)
}
}
calculateSide(8, 6);

// 5. Sum Array
// Write a function sumArray that takes an array as an argument. 
// The array should contain numbers. The function should return 
// the sum of the numbers in the array. Do not use .reduce().

const sumArray = (array) => {
// console.log(array)
let total = 0;
for (let i = 0; i < array.length; i++) {
    total += array[i]; {
        console.log(total)
    }
}
}

sumArray([1, 2, 3, 4, 5, 6]);

// 6. Prime Numbers

// Step One
// Write a function called checkPrime that will test whether a number is Prime. 
//The function will return true (Boolean) if Prime, false if not. 
//Hint: Check every number up to the square root. To do this, try a for loop.

// Step Two
// Write another function called printPrimes that will print (console log) 
//all the Primes up to an arbitrary limit. For example, if you invoke your 
//function with printPrimes(97), it will print all the Prime numbers up to and including 97. 
//This function can call on the previous checkPrime function.

const checkPrime = (number) => {
    
}