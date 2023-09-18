function arrayDiff<T>(a: T[], b: T[]): T[] {
  // let r = [];
  // for (let i = 0; i < a.length; i++) {
  //   if (!b.includes(a[i])) {
  //     r.push(a[i]);
  //   }
  // }
  // return r;

  return a.filter((dif) => !b.includes(dif));
}
