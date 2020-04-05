function printString(string) {
	console.log(string[0])
	if(string.length > 1) printString(string.substring(1));
}

function reverseString(string) {
	let revString = ""
	if(string.length > 1) {
		revString += reverseString(string.substring(1, string.length))
	}
	revString += string[0]
	return revString
}

function isPalindrome(string) {
	let isPal = true
	if(string.length > 1 && isPal) {
		isPal = isPalindrome(string.substring(1, string.length - 1))
	}
	return (string[0] === string[string.length - 1] && isPal)
}

function addUpTo(array, i) {
	let sum = 0
	if(i >= 1 && array.length > 1) {
		sum = addUpTo(array.slice(1), --i)
	}
	sum += array[0]
	return sum
}

function maxOf(array) {
	let maxNum;
	if(array.length > 1) {
		maxNum = maxOf(array.slice(1))
	}
		return maxNum > array[0] ? maxNum : array[0]
}

function includesNumber(array, num) {
	let includes; // what should this initialize to?
	if(array.length > 1) {
		includes = includesNumber(array.slice(1), num)
	}
	return includes || array[0] == num
}