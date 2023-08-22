function determinant(m) {
  // return the determinant of the matrix passed in
  if (m.length === 1) {
    return m[0][0];
  } else {
    return m[0].reduce(
      (s, n, i) =>
        s +
        (i % 2 === 0 ? 1 : -1) *
          n *
          determinant(m.slice(1).map((r) => r.filter((_, j) => j !== i))),
      0
    );
  }
}
