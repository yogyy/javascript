// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example;

function add(a, b) {
  var res = "",
    c = 0;
  a = a.split("");
  b = b.split("");
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop();
    res = (c % 10) + res;
    c = c > 9;
  }
  return res;
}

//
function add(a, b) {
  a = a.split("").reverse().join("");
  b = b.split("").reverse().join("");
  la = a.length;
  lb = b.length;
  var temp = [];
  var bit = 0;
  for (var i = 0; i < Math.max(la, lb); i++) {
    if (i >= la) {
      var cur = Number(b[i]);
    } else if (i >= lb) {
      var cur = Number(a[i]);
    } else {
      var cur = Number(a[i]) + Number(b[i]);
    }
    temp.push((cur + bit) % 10);
    bit = Math.floor((cur + bit) / 10);
  }
  if (bit == 1) {
    temp.push(1);
  }
  var ans = "";
  for (var i = temp.length - 1; i >= 0; i--) ans += temp[i];
  return ans;
}
