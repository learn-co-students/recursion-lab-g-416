// Code your solution here!

// Apply the problem to a specific case (i.e., choose an example).
// Write out a function that solves that particular example.
// Reword that function so that it uses recursion, invoking itself.


// print all letters of string in ascending order
// ex: string = pizza
//  printString(string) => p i z z a 

function printString(string) {
  console.log(string[0]);

  if (string.length > 1) {
      let substring = string.substring(1, string.length);
      printString(substring);
  } else {
    return true;
  }
}

// Write out a recursive function to reverse a string.

// Apply problem to a specific case and write out function that solves it:

// function reverseString(string) {
//   // write out specific solution first
  
//   // solution:
//     // iterate over string starting from last letter 
//     // decrement index counter until reaching 0
//     // print out all letters reversed 
  
//   // set an empty array for storing reversed string
//   let reversedString = [];

//   for (let i = string.length-1; i >= 0; i--) {
//     reversedString.push(string[i]);
//   }
  
//   // convert back to string and return
//   return reversedString.join("");
// }

// Reword function using recursive solution:

function reverseString(string) { // pizza
  if (string !== "") {
    // recursively reverse string 
    return reverseString(string.substring(1)) + string.charAt(0) // izza + p
  } else {
    return ""
  }
}


// Write out a recursive function to see if a word is a palindrome.


// Apply specific case and solve 

// function isPalindrome(string) {
//   // string must be palindrome 
//   // requirements:
//     // string[first] === string[last]
//     // string forwards must be same as backwards
    
//   // Iterative solution:
//     // set empty array to store reversed string
//     // iterate over string starting at last index 
//     // store each character in array 
//     // until 0 index is reached
//     // return result of comparing joined array to string 
    
//   const reversedString = [];
//   for (let idx = string.length-1; idx >= 0; idx--) {
//     reversedString.push(string[idx]);
//   }
  
//   return string === reversedString.join("");
// }


// reword function to solve recursively

function isPalindrome(string) {
  // set a pointer to both beginning and end 
  // set pointer to middle 
  let firstIdx = 0;
  let lastIdx = string.length - 1;
  let middleString = string.slice(firstIdx+1, lastIdx);
  console.log(middleString);
  // for each recursive call, split string 
  
  // base case: string length <= 1
  
  // condition: string[first] === string[last] && isPalindrome(string[middle])
  
  if (string.length === 1) return true;
  
  return string[firstIdx] === string[lastIdx] && isPalindrome(middleString);
}
















































