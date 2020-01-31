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

printString(myString)

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

