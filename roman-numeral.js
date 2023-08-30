//  Roman-Numeral-Converter
// JavaScript Algorithms and Data Structures Projects (freeCodeCamp)

function convertToRoman(num) {
  const decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNumeral = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let result =""

  for(let i=0; i<decimalValue.length; i++) {
    while(num >= decimalValue[i]) {
      result += romanNumeral[i]
      num -= decimalValue[i]
    }
  }

 return num;
}

convertToRoman(4000);
