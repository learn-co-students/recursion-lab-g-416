// Code your solution here!
function printString(myString) {
    console.log(myString[0]);
   
    if (myString.length > 1) {
      let mySubString = myString.substring(1, myString.length);
      printString(mySubString);
    } else {
      return true;
    }
  }

function reverseString(myString){
    
    if (myString === '') {
        return ''
    }
    else{
        let newString = ""
        newString = newString.concat(myString[myString.length-1])
        myString = myString.slice(0, myString.length-1)
        reverseString(myString)
        
    }
}