/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    // Check if the lengths of the two strings are different
    if (s.length !== t.length) return false;
  
    // Create an object to store character counts
    const count = {};
  
    // Iterate through each character in both strings
    for (let i = 0; i < s.length; i++) {
      // If the character is not in the count object, initialize it to 0
      if (!count[s[i]]) count[s[i]] = 0;
      if (!count[t[i]]) count[t[i]] = 0;
  
      // Increment count for the character in the first string
      count[s[i]]++;
  
      // Decrement count for the character in the second string
      count[t[i]]--;
    }
  
    // Check if all character counts are zero
    for (let ch in count) {
      if (count[ch] !== 0) return false;
    }
  
    // If all counts are zero, the strings are anagrams
    return true;
  };