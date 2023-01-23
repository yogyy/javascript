const regex = /\(\)|\[\]|\{\}/;
const validBraces = braces => regex.test(braces)
  ? validBraces(braces.replace(regex, ''))
  : '' === braces
