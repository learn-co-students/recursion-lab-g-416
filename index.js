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

function reverseString(str) {
  if (str === "") return "";
  else return reverseString(str.substr(1)) + str.charAt(0);
}

function isPalindrome(string) {
  if (string.length <= 1) {
    return true;
  }

  let [firstLetter] = string;
  let lastLetter = string[string.length - 1];

  if (firstLetter === lastLetter) {
    let stringWithoutFirstAndLastLetters = string.substring(
      1,
      string.length - 1
    );
    return isPalindrome(stringWithoutFirstAndLastLetters);
  } else {
    return false;
  }
}

function addUpTo(array, inx) {
  let arr = array.slice(0, inx + 1);
  console.log("First appearance", arr);
  if (arr.length === 1) {
    return arr[0];
  } else {
    console.log("in code:", arr[0], " and ", arr.length);
    return arr[0] + addUpTo(arr.slice(1), arr.length);
  }
}

function maxOf(numArray) {
  // copy the given array
  let nums = numArray.slice();

  // base case: if we're at the last number, return it
  if (nums.length <= 1) {
    return nums[0];
  }

  // check the first two numbers in the array and remove the lesser
  if (nums[0] < nums[1]) {
    nums.splice(0, 1);
  } else {
    nums.splice(1, 1);
  }

  // with one less number in the array, call the same function
  return maxOf(nums);
}

function includesNumber(numArray, target) {
  let nums = numArray;
  console.log("nums", nums[0], "target", target)
    if (nums[0] == target) {
        return true
    } else if (nums.length < 1) {
        return false
      }
else {
    nums.splice(0, 1)
        return includesNumber(nums, target)
}

  
}
