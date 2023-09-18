function isPangram(string: string): boolean {
  let str = string
    .split(" ")
    .join("")
    .replace(/[\W\d]/g, "")
    .toLowerCase()
    .split("");
  return [...new Set(str)].length == 26;
}


// A pangram is a sentence that contains every letter of the alphabet at least once