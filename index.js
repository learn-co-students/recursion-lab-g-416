// Code your solution here!

function printString(myString) {
    console.log(myString[0]);
   
    if (myString.length > 1) {
      let mySubString = myString.substring(1, myString.length);
      printString(mySubString)
    } else {
      return true;
    }
  }

function reverseString(myString) {
       if (myString.length <2) {
           return myString
       }else{
    //       let mySubString = myString.substring(0, myString.length);
    //       printString(mySubString)
        return reverseString(myString.substring(1)) + myString [0]
    
       }
      
  }
   
  //star wars
  function isPalindrome(str){
    
    if (str.length <= 1) {
  
      return true
    }else{
      
      if (str[0] === str[str.length-1]){
        
      return isPalindrome(str.substring(1,str.length-1))
      } else {
        return false
      }
    }
    
   }


  function addUpTo(array, index) {
    if (index === 0) {
      return array[0]
    } else {
      return array[index] + addUpTo(array,index-1)

    }
  }



  function maxOf(array) {
    if (array.length === 1) {
      return array[0]
    } else {
        //find the min
         //let minimum = Math.min(...array)
        // if (array.includes(minimum)){// in the array remove the parts that are not the min
        //   console.log(minimum)
        function indexOfSmallest(array) {
          return array.indexOf(Math.min.apply(Math,array));
         }
        array.splice(indexOfSmallest(array), 1)
        return maxOf(array)
        }

  }

    
function includesNumber(array, givenNumber){
  //let emptyArray=[]
  console.log(array+"start")
  console.log(array[0] + " " + givenNumber)
  if (array.length === 0) {
    return false
  } else if (array[0] === givenNumber){
    console.log(array +"firstelse if")
    return true }
    else if (array[0] !== givenNumber){
      console.log(array[0])
      array.shift()
      
      return includesNumber(array, givenNumber)

    } 
    
  

  
}