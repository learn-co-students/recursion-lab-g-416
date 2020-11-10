function printString(string){
    console.log(string[0])
    let newString = string.substring(1, string.length);
    if (newString.length > 0){
        printString(newString)
    }
}

function reverseString(string1){
    console.log(string1[string1.length - 1])
    let subString = string1.substring(0, (string1.length - 1));
    if (subString.length > 0){
        reverseString(subString)
    }
}
