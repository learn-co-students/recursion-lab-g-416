/* Recursive Functions */

//--- Print all string characters
function printString(myString) {
  console.log(myString[0]);
 
  // If string has 2 or more characters, invoke recursive call with substring
  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } 
  // Base case
  else {
    return true;
  }
}
// Test
// printString("supercalifragilisticexpialidocious");


//--- Return reversed string
function reverseString(myString) {
  // If string longer than one character, invoke recursive call with substring
  if (myString.length > 1) {
    return reverseString(myString.substring(1)) + myString[0];
  }
  // Base case
  else {
    return myString;
  }
}
// Test
// console.log(reverseString("pizza")) // azzip


//--- Return true if string is palindrome
function isPalindrome(myString) {
  if (myString.length > 1) {
    const endIndex = myString.length - 1
    const palSub = isPalindrome(myString.substring(1, endIndex));

    // If first and last letters are equal invoke recursive call with substring; else return false 
    return myString[0] === myString[endIndex] ? palSub : false
  }
  // Base case; single letters are palindromes
  else {
    return true;
  }
}
// Test
// console.log(isPalindrome("poop")); // true
// console.log(isPalindrome("soap")); // false


//--- Return sum of array elements
function addUpTo(myArr, index) {
  // If index > 0, invoke recursive call with array and decremented index
  if (index) {
    return myArr[index] + addUpTo(myArr, --index);
  }
  // Base case
  else {
    return myArr[index];
  }
}
// Test
// console.log(addUpTo([1, 4, 5, 3], 2)); // 10


//--- Return largest integer from array
function maxOf(myArr) {
  if (myArr.length > 1) {
    const maxSlice = maxOf(myArr.slice(1));

    // Return first value if larger than maxSlice, else invoke recursive call with sliced array
    return myArr[0] > maxSlice ? myArr[0] : maxSlice;
  }
  // Base case
  else {
    return myArr[0];
  }
}
// Test
// console.log(maxOf([1, 4, 5, 3])); // 5


//--- Return true if array includes given element
function includesNumber(myArr, el) {
  if (myArr.length > 1) {
    const slicedArr = includesNumber(myArr.slice(1), el);

    // Return true if element equals slicedArr, else invoke recursive call with sliced array
    return myArr[0] === el ? true : slicedArr
  }
  // Base case; return true if element found
  else {
    return myArr[0] === el;
  }
}
// Test
// console.log(includesNumber([1, 4, 5, 3], 5)) // true
// console.log(includesNumber([1, 4, 2, 3], 5)) // false