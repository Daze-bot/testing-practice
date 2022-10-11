function capitalize(string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  let newString = "";

  for (let i = (string.length - 1); i >= 0; i--) {
    newString += string.substr(i, 1);
  }

  return newString;
}

export {
  capitalize,
  reverseString,
}