/**
 * @param {string} s
 * @returns numbers
 */
function findShort(s) {
  const words = s.split(" ");
  let minLength = Infinity;

  for (const word of words) {
    minLength = Math.min(minLength, word.length);
  }

  return minLength;
}

/**
 * @param {string} s
 * @returns numbers
 */
function findShort(s) {
  return Math.min.apply(
    null,
    s.split(" ").map((e) => e.length)
  );
}
// const findShort = (s) => Math.min(...s.split(" ").map((e) => e.length));
