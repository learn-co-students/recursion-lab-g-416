// Code your solution here!
function printString(string){
    console.log(string[0])
    if (string.length > 1){
        let sub = string.substring(1, string.length);
        printString(sub)
    } else {
        return true
    }
}
//pizza
function reverseString(string){
   if (string.length < 2){
       return string
   } else {
       return reverseString(string.substring(1)) + string[0]
   }
}
//civic
function isPalindrome(string){
    if (string.length < 2) {
        return true
    } else if (string[string.length - 1] === string[0]) {
        return isPalindrome(string.substring(1, string.length -1))
    } else {
            return false
    }
}

//[1, 4, 5, 3], 2 to equal 10
function addUpTo(array, idx) {
    if (idx){
        return array[idx] + addUpTo(array, --idx)
    } else {
        return array[idx]
    }
}


//find largest integer [0, 11, 5]
function maxOf(array){
    if (array.length === 1) {
        return array[0]
    } else {
        return Math.max(array.pop(), maxOf(array))
    }
}
// //does array include this element
// function includesNumber(array, element){
//     if (array.length > 1){
//         if (array[0] === element){
//             return true
//         } else {
//             let newArray = array.slice(1)
//             includesNumber(newArray, element)
//         }
//     } else { 
//         return false
//     }
// }
function includesNumber(array, element){
    if (array.length === 0) {
        return false
    } else if (array[0] === element){
        return true
    } else {
        return includesNumber(array.slice(1), element)
    }
}