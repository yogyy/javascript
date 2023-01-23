// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.

function incrementString(strng) {
  return strng.replace(/([0-8]|\d?9+)?$/, (e) => (e ? +e + 1 : 1));
}
