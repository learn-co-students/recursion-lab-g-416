function printString(myString) {
    console.log(myString[0]);
   
    if (myString.length > 1) {
      let mySubString = myString.substring(1, myString.length);
      printString(mySubString);
    } else {
      return true;
    }
  }

  function reverseString(string){
    if (string.length > 0) {
        console.log(reverseString(string.substring(1)) + string[0])
    } else if (string === "") {
        console.log(string)
    }
}

  