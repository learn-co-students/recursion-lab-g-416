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
      let myReversedString = ""
      myReversedString.concat(myString[myString.length - 1]);

      if (myString.length > 1) {
        let mySubString = myString.substring(0, myString.length - 1);
        reverseString(mySubString);
      } else {
          return myReversedString;
      }
  }