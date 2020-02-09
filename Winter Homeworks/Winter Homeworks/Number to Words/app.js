// To make this work with greater multipliers you need to add the specific multiplier in the multiplier array. Works up to quintillion.
// AND update the multiplierSwitch() function for that multiplier
// Otherwise it's completely dynamic

let number = prompt('Please enter a number...');
let numberInt = parseInt(number);
let result = '';
let resultHeader = document.getElementById('result');

let uniqueNumberArray = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen'
];
let tensNumberArray = [
  'twenty',
  'thirty',
  'forty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety'
];
let multiplierArray = [
  'hundred', // Using it to cheat the system to directly pick up the multiplier without using -1, otherwise useless
  'thousand ',
  'million ',
  'billion ',
  'trillion ',
  'quadrillion ',
  'quintillion '
];

let tertiaryFragmentParser = fragment => {
  let first = Math.floor(fragment / 100);
  let second = Math.floor((fragment % 100) / 10);
  let third = Math.floor((fragment % 100) % 10);
  return [first, second, third];
};

let uniqueNumberParse = value => {
  let result = '';
  switch (value) {
    case 0:
      result = uniqueNumberArray[0];
      break;
    case 1:
      result = uniqueNumberArray[1];
      break;
    case 2:
      result = uniqueNumberArray[2];
      break;
    case 3:
      result = uniqueNumberArray[3];
      break;
    case 4:
      result = uniqueNumberArray[4];
      break;
    case 5:
      result = uniqueNumberArray[5];
      break;
    case 6:
      result = uniqueNumberArray[6];
      break;
    case 7:
      result = uniqueNumberArray[7];
      break;
    case 8:
      result = uniqueNumberArray[8];
      break;
    case 9:
      result = uniqueNumberArray[9];
      break;
    case 10:
      result = uniqueNumberArray[10];
      break;
    case 11:
      result = uniqueNumberArray[11];
      break;
    case 12:
      result = uniqueNumberArray[12];
      break;
    case 13:
      result = uniqueNumberArray[13];
      break;
    case 14:
      result = uniqueNumberArray[14];
      break;
    case 15:
      result = uniqueNumberArray[15];
      break;
    case 16:
      result = uniqueNumberArray[16];
      break;
    case 17:
      result = uniqueNumberArray[17];
      break;
    case 18:
      result = uniqueNumberArray[18];
      break;
    case 19:
      result = uniqueNumberArray[19];
      break;
  }
  return result;
};

let tensParser = value => {
  let result = '';
  switch (value) {
    case 2:
      result = tensNumberArray[0];
      break;
    case 3:
      result = tensNumberArray[1];
      break;
    case 4:
      result = tensNumberArray[2];
      break;
    case 5:
      result = tensNumberArray[3];
      break;
    case 6:
      result = tensNumberArray[4];
      break;
    case 7:
      result = tensNumberArray[5];
      break;
    case 8:
      result = tensNumberArray[6];
      break;
    case 9:
      result = tensNumberArray[7];
      break;
  }
  return result;
};

let multiplierSwitch = multiplier => {
  let multReturn = '';
  switch (multiplier) {
    case 0:
      multReturn = '';
      break;
    case 1:
      multReturn = multiplierArray[1];
      break;
    case 2:
      multReturn = multiplierArray[2];
      break;
    case 3:
      multReturn = multiplierArray[3];
      break;
    case 4:
      multReturn = multiplierArray[4];
      break;
    case 5:
      multReturn = multiplierArray[5];
      break;
  }
  return multReturn;
};

let stringBuilder = fragment => {
  // Initial Declaration
  let resultString = '';
  // Convert the tertiarty fragment to an array
  let values = tertiaryFragmentParser(fragment); // This is the fragment
  // Build the string
  if (values[0] === 0) {
    // If the first digit in the string is a 0, then the number is 2-digit
    resultString += `${tensParser(values[1])}`;
    if (values[2] === 0) {
      resultString += '';
    } else {
      resultString += ` ${uniqueNumberParse(values[2])}`;
    }
  } else {
    resultString += ` ${uniqueNumberParse(values[0])} hundred`;
    if (values[1] === 1) {
      let remainder = values[1] * 10 + values[2];
      resultString += `${uniqueNumberParse(remainder)} `;
    } else if (values[1] === 0) {
      if (values[2] !== 0) {
        resultString += ` ${uniqueNumberParse(values[2])}`;
      }
    } else {
      resultString += ` ${tensParser(values[1])}`;
      if (values[2] === 0) {
        resultString += '';
      } else {
        resultString += ` ${uniqueNumberParse(values[2])}`;
      }
    }
  }
  return resultString;
};

if (numberInt < 20) {
  result = uniqueNumberParse(numberInt);
} else {
  if (numberInt < 100) {
    result = stringBuilder(numberInt);
  } else {
    let currentFragment = '';
    let currentFragmentLength;
    let currentFragmentMultiplier;
    let multiplier;

    let iteration = 1;

    while (number.length >= 3) {
      currentFragmentLength = number.length % 3;
      currentFragmentMultiplier = Math.floor((number.length - 1) / 3);

      if (currentFragmentLength === 0) {
        currentFragmentLength = 3;
      }
      multiplier = multiplierSwitch(currentFragmentMultiplier);
      currentFragment = number.substr(0, currentFragmentLength);

      if (currentFragment === '000') {
        result += '';
        number = number.substr(currentFragmentLength, number.length - 1);
      } else {
        if (parseInt(currentFragment) < 100) {
          if (parseInt(currentFragment) < 20) {
            if (multiplier === '') {
              result += '';
            }
            result += uniqueNumberParse(parseInt(currentFragment));
            result += ` ${multiplier}`;
            number = number.substr(currentFragmentLength, number.length - 1);
          } else {
            result += stringBuilder(currentFragment);
            result += ` ${multiplier}`;
            number = number.substr(currentFragmentLength, number.length - 1);
          }
        } else {
          result += stringBuilder(currentFragment);
          result += ` ${multiplier}`;
          number = number.substr(currentFragmentLength, number.length - 1);
        }
      }
      iteration += 1;
      if (iteration === 10) {
        // Just in case
        break;
      }
    }
  }
}
resultHeader.innerText += ` ${result}`;
