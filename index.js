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


  function reverseString(myString) {
    if (myString.length < 2) {
        console.log(myString)
        return myString;
    } else {
        console.log(myString.substring(1) + myString[0]);

        return reverseString(myString.substring(1)) + myString[0];
    }
  }

  //reverseString('chocolate')

  function isPalindrome(myString){
      if(myString[0] !== myString[myString.length -1]) {
          return false;
      } 

      while(myString.length > 1) {
        // console.log(myString);
        // let sub = myString.substring(1, myString.length - 1);
        // console.log(sub) //substring starting index 1 to second from last index
          return isPalindrome(myString.substring(1, myString.length - 1));
      }
      return true ;
  }

  //console.log(isPalindrome('madamimadam'))

  function addUpTo(myArray, num) {
      if(!num) {
          return myArray[num]

      } else {
          return myArray[num] + addUpTo(myArray, --num)
      }
  
  }

  //console.log(addUpTo([1, 4, 5, 3], 2));


  function maxOf(myArray) {
      if(myArray.length === 1) {
         // console.log(myArray)
          return myArray[0];
      } else {
          console.log(myArray)
          let max = Math.max(myArray[0], myArray[1]);
         // console.log([max, ...myArray.slice(2)])

          return maxOf( [max, ...myArray.slice(2)]);

      }
  }
  //console.log(maxOf([1, 4, 5, 3]));

  function includesNumber(myArray, num) {

        if(myArray[0] === num) {
            return true 
        } 

        return myArray.length === 1 ? false :  includesNumber([...myArray.slice(1)], num);

  }

  console.log(includesNumber([1, 4, 5, 3], 3));
