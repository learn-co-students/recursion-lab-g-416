function printString(myString) {
    console.log(myString[0]);
   
    if (myString.length > 1) {
      let mySubString = myString.substring(1, myString.length);
      printString(mySubString);
    } else {
      return true;
    }
  }

  function reverseString(myString) {
    if(myString.length > 1) {
      return myString.slice(-1) + reverseString(myString.slice(0, -1))
    } else {
      return myString
    }
  }