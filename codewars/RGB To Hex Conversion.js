// solution 1
function rgb(r, g, b) {
  // returns a decimal number of hexadecimal value
  function decToHex(c) {
    // check the borders
    if (c > 255) return "FF";
    else if (c < 0) return "00";
    // convert the value
    else
      return c // the input value is always of Integer type
        .toString(16) // convert to a hexadecimal value
        .padStart(2, "0") // add leading 0's if any
        .toUpperCase(); // and shift to upper case
  }

  // now convert each digit and return
  return decToHex(r) + decToHex(g) + decToHex(b);
}

// best practice
function rgb(r, g, b){
	return toHex(r)+toHex(g)+toHex(b);
}

function toHex(d) {
    if(d < 0 ) {return "00";}
    if(d > 255 ) {return "FF";}
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}
