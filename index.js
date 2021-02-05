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

function reverseString(string) {
	if (string.length > 1) {
		return string[string.length - 1] + reverseString(string.substring(0, string.length - 1))
	} else {
		return string
	}
}

function isPalindrome(string) {
  if(string.length <= 1) {
    return true
  }

  if(string[0] === string[string.length - 1]) {
    return isPalindrome(string.substring(1, string.length - 1));
  }

  return false
}


function addUpTo(arr, index) {
  if(arr.length > 1) {
    return arr[index] + addUpTo(arr.slice(0, index), index - 1)
  } else {
    return arr[0]
  }
}

function maxOf(arr) {
  if(arr.length === 1) {
    return arr[0]
  }

  if(arr[0] > arr[1]) {
    return maxOf(arr.slice(0, 1).concat(arr.slice(2)))
  } else {
    return maxOf(arr.slice(1))
  }
}

function includesNumber(arr, num) {
  if(arr[0] === num) {
    return true
  }

  return arr.length === 1 ? false : includesNumber(arr.slice(1), num)
}
