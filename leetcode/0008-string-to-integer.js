function myAtoi(str) {
  const INT_MAX = 2147483647;
  const INT_MIN = -2147483648;

  let i = 0;
  let sign = 1;
  let num = 0;

  while (str[i] === " ") {
    i++;
  }

  if (str[i] === "+" || str[i] === "-") {
    sign = str[i] === "+" ? 1 : -1;
    i++;
  }

  while (i < str.length && str[i] >= "0" && str[i] <= "9") {
    num = num * 10 + (str[i] - "0");
    i++;
  }

  num *= sign;
  num = Math.max(Math.min(num, INT_MAX), INT_MIN);

  return num;
}
