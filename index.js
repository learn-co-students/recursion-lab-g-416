// Code your solution here!
let myString = 'Algorithm'

let string = "pizza"

function printString(str) {
   //str = "pizza"
   if (str.length > 1) {
      console.log(str[0])
      printString(str.substring(1, str.length))
   } else {
      return console.log(str[0])
   }
}
// // End goal = " p i z z a "
// pizza 
// str.length = 5
// "p" is console logged beacuse 5 > 1
// recursively call myself with the subset of that string "izza"
// izza
// str.length = 4 
// "i" is console logged because 4 > 1 
// recursiviely call myself with a subset of that string, "zza" 
// ...
// I'm going to do this until I reach a string with only 1 character left and then just return (console.log) that character at position 0 in the string. 

// What's the stopping point? (base case?)
// In this case its the end of the string;  this is what my conditional should be based on. 


//printString(myString) -> Works! 

// 1. apply the problem to a specific use case - "pizza" string
// 2. write a function that manually can get the solution for this specific example
// function reverseString(str) {
//    return str[str.length - 1] + str[str.length - 2] + str[str.length - 3] + str[str.length - 4] + str[str.length - 5]
// }
// 3. Reword that function so that it uses recursion, invoking itself. 
// "print out the last character in the string, then recursively call yourself on the last character in the substring until there are no more characters. 
// 4. write the function so it will do this recursively:

function reverseString(str) {
   let result = ""
   if (str.length > 1) {
      result = str[str.length - 1] + reverseString(str.substring(0, str.length - 1))

   } else {
      return str[0]
   }
   return result
}

console.log(reverseString("pizza"))




