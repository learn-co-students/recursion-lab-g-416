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

// Specific use case - "pizza" 
// write a function to manually get the solution 
// function isRacecarPalindrome(str) {
   // str = "racecar"
   // str = "hannah"
   // are the first and last characters of my string the same?  if so, call myself again on the substring recursively until the length of my substring is less than or = 1 (length must be greater than or = to 2 to continue recursion).
   // if the letters do not match from those two positions, then return false. 
// }
// Actual Logic for success: 
// if my test string is greater than 2 characters, check to see if the first and last character are not the same. if they arent, go to false and then don't recur.  If they are the same, then recur on the substring with the first and last positions cut off. and save that as my result.  When a even charactered palendrome is detected (last recursion has a length of 2 - check to see if they are the same, if they are, then result = true (base case), if not, result is set to false), otherwise, if you get to a string length of 1 or 0, that means that you have passed the comparison test down to 1 character or 0 characters meaning you have a palendrome, so return true. 

function isPalindrome(str) {
   let result
   if (str.length > 2) {
      if (str[0] !== str[str.length - 1]) {
         result = false
      } else {
         result = isPalindrome(str.substring(1, str.length - 1))
      }   
   // this else if isn't necessary for the tests to pass, but prevents false positives with small inputs of "ce" or something like that.
   } else if (str.length === 2) {
      str[0] === str[1] ? result = true : result = false
   } else {
      result = true
   }
   return result
}

// console.log(isPalindrome("madam"))

// Array Work now
// addUpTo() function needs to be able to sum up all members in an array to a given index. 
// 1. Solve with an example and write a function for it. 
function addUpToExample(array, index) {
   //array = [2, 4, 6, 8, 1]
   //index = 2
   //answer should be 2 + 4 + 6 = 12
   return (array[0] + array[1] + array[2])
}
// console.log(addUpToExample([2, 4, 6, 8, 1], 2))
// 2. Reword solution using your function name 
// I will add the values of an array upto a specified index. Starting at index 0, until I reach the index specified (base case option 1).  Alternatively, I can start adding at my index and add all indexes below that until I reach 0.  
// so, first need to take the value of 'index' and add it to my recursive call of a split array with an index of 'index - 1'

// This is really more like AddDownFrom but gives the same results. 
/* function addUpTo(array, index) {
   let result
   if (array.length > 1 && index !== 0) {
      let smallerArray = array.slice(0, index + 1)
      result = smallerArray[index] + addUpTo(smallerArray, index - 1)
   } else {
      result = array[0]
   }
   return result
} */

// This solution is more true to the name of the function as it starts with the first number in the array to add up to, then passes in a smaller version of the array to itself recursively until it hits an array length of less than 1 and a 0 index, then stop recursion and return the result of array[0] (which is the value at the index) and add them all together, then return the result.
function addUpTo(array, index) {
   let result
   // console.log("array", array)
   // console.log("index", index)
   if (array.length > 1 && index !== 0) {
      let smallerArray = array.slice(1, index + 1)
      // console.log("smallerArray", smallerArray)
      result = array[0] + addUpTo(smallerArray, index - 1)
   } else {
      result = array[0]
   }
   return result
}
// console.log(addUpTo([2, 4, 6, 8, 1], 2))


//maxOf - find the largest integer in an array
// 1 solve with an example

function maxOfExample(array) {
   // array = [1, 4, 5, 3]
   // return should the the maximum number found in the array 
   // return value should be 5

   // solution:
   // is currentGreatest > array[0] ?  if so, update the currentGreatest value to array[0]'s value, run myself again on a smaller slice of the array excluding the index I've tried already, until I reach the end of the array.  At the end, return the currentGreatest. 
   let currentGreatest = 0 
   if (array[0] > currentGreatest) {
      currentGreatest = array[0]
   }

   if (array[1] > currentGreatest) {
      currentGreatest = array[1]
   }

   if (array[2] > currentGreatest) {
      currentGreatest = array[2]
   }

   if (array[3] > currentGreatest) {
      currentGreatest = array[3]
   }

   return currentGreatest 
}

// console.log("maxOfExample: ", maxOfExample([1, 4, 5, 3]))
//solved with Example. 

// How do I reword this using my function name? 
// to find my greatest value, I will initially set my greatest value to 0.  Then if my array is > 1 in length, compare array[0] with currentMax.  If array[0] is greater, then update currentMax, else don't update.  Then call myself again on a slice of the array that excludes the "array[0]" i just worked on. When I get down to an array of 1 in length as soon as my array is empty, return my currentMax Value. 

function maxOf(array, currentMax = 0) {
   // console.log("array:", array)
   // console.log("currentMax:", currentMax)
   if (array.length > 1) {
      if (array[0] > currentMax) {
         currentMax = array[0]
         // console.log("updated current max:", currentMax)
         currentMax = maxOf(array.slice(1, array.length), currentMax)
      } else {
         // console.log("didn't update current max")
         currentMax = maxOf(array.slice(1, array.length), currentMax)
      }  
   } else {
      //base case comparision / return value goes below.  This is the smallest unit of what you are going to compare - 1 on 1.  This actually allows you to return a result.  Then you can work through the logic in the above 'if' to sift the rest of the array objects. 
      return currentMax = currentMax > array[0] ? currentMax : array[0]
   }
   return currentMax
}

// console.log(maxOf([1, 6, 5, 2]))
