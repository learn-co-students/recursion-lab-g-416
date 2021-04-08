// Code your solution here!
function printString(string) {
    let substring;
   
    // Print out the current first character in the string.
    console.log(string[0]);
   
    // Store the remainder of the string in the 'substring' variable.
    substring = string.substring(1, string.length);
   
    // Invoke printString() from within, passing in the remainder of the previous string.
    printString(substring);
  }
   

