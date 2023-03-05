function kangaroo(x1 = 0, v1 = 0, x2 = 0, v2 = 0) {
  // v1t + x1 = v2t + x2
  // t = (x2 - x1)/(v1 - v2)
  // if t positive it will pass in the future, else only if backwards
  const speedDef = v1 - v2;
  const startDef = x2 - x1;
  if (speedDef == 0) return "NO";
  const intersection = startDef / speedDef;
  if (intersection > 0 && intersection % 1 == 0) return "YES";
  return "NO";
}
