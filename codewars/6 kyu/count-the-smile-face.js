/**
 * @param {Array<string>} arr
 */
function smileyFace(arr) {
  const matches = arr.join("").match(/[:;][-~]?[D)]/g);

  return matches ? matches.length : 0;
}
