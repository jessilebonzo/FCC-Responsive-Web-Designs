//  Palindrome-Checker
// JavaScript Algorithms and Data Structures(freeCodeCamp)

function palindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/gi, "").toLowerCase()

  return str === str.split("").reverse().join("");
}

palindrome("eye");
