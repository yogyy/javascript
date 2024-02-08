function reverseWords(str: string) {
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
  }