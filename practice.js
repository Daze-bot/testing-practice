function capitalize(string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

const calculator = {
  add(a, b) {
    return a +b;
  },

  subtract(a, b) {
    return a - b;
  },

  divide(a, b) {
    return a / b;
  },

  multiply(a, b) {
    return a * b;
  }
}

function ceasarCipher(string, n = 0) {
  let array = string.split("");
  array.forEach((e, i, a) => {
    a[i] = letterToNumber(e);
  });

  array.forEach((e, i, a) => {
    a[i] = shiftNumber(e, n);
  });

  array.forEach((e, i, a) => {
    a[i] = numberToLetter(e);
  });

  return array.join("");
}

function letterToNumber(character) {
  if (!/^[a-zA-Z]*$/.test(character)) {
    return character;
  }

  let number = character.charCodeAt(0) - 97;

  if (number < 0) {
    return (character.toLowerCase().charCodeAt(0) - 97) + 'C';
  } else {
    return number;
  }
}

function shiftNumber(element, n) {
  if (!(/^[a-z0-9]+$/i).test(element)) {
    return element;
  }

  if (typeof element === 'string') {
    let capitalNum = +(element.slice(0, -1)) + +n;

    while (capitalNum > 25) {
      capitalNum -= 26;
    }

    return capitalNum + 'C';
  }

  let newNum = +element + +n;

  while (newNum > 25) {
    newNum -= 26;
  }

  return newNum;
}

function numberToLetter(element) {
  if (!(/^[a-z0-9]+$/i).test(element)) {
    return element;
  }

  if (typeof element === 'string') {
    let capitalNum = +(element.slice(0, -1));
    return String.fromCharCode(97 + capitalNum).toUpperCase();
  }

  return String.fromCharCode(97 + element).toLowerCase();
}

function analyzeArray(array) {
  let obj = {};

  obj.average = array.reduce((prev, current) => prev + current, 0) / array.length;
  obj.min = Math.min(...array);
  obj.max = Math.max(...array);
  obj.length = array.length;

  return obj;
}

export {
  capitalize,
  reverseString,
  calculator,
  ceasarCipher,
  analyzeArray,
}