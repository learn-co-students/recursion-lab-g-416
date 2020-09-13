// Code your solution here!

function printString(str) {
  console.log(str[0]);
  if (str.length === 1) {
    return true;
  }
  return printString(str.slice(1, str.length));
}

// console.log(printString('pizza'));

function reverseString(str) {
  if (str === '') {
    return '';
  }
  return reverseString(str.slice(1)) + str[0];
}

// console.log(reverseString('pizza'));

function isPalindrome(str) {
  if (str.length < 2) {
    return true;
  }
  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, -1));
  }
  return false;
}

// console.log(isPalindrome('madamimadam'));

function addUpTo(arr, i) {
  if (i === 0) {
    return arr[i];
  }
  return arr[i] + addUpTo(arr, --i);
}

// console.log(addUpTo([1, 4, 5, 3], 2)); // 10

// console.log(maxOf([6, 2, 4, 5]));
function maxOf(arr, i = 1) {
  if (arr.length === 1) {
    return arr[0];
  }
  if (arr[0] < arr[1]) {
    return maxOf([arr[1], ...arr.slice(2, arr.length)]);
  }
  return maxOf([arr[0], ...arr.slice(2, arr.length)]);
}

// console.log(maxOf([6, 2, 4, 5]));

function includesNumber(arr, num) {
  if (arr[0] === num) {
    return true;
  }
  if (arr.length > 1) {
    return includesNumber([...arr.slice(1, arr.length)], num);
  }
  return false;
}

console.log(includesNumber([1, 4, 5, 3], 3));
