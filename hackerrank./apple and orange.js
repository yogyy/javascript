function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let applesOnHouse = 0;
  let orangesOnHouse = 0;

  for (let i = 0; i < apples.length; i++) {
    let apple = apples[i];
    let applePosition = a + apple;
    if (applePosition >= s && applePosition <= t) {
      applesOnHouse++;
    }
  }

  for (let i = 0; i < oranges.length; i++) {
    let orange = oranges[i];
    let orangePosition = b + orange;
    if (orangePosition >= s && orangePosition <= t) {
      orangesOnHouse++;
    }
  }

  console.log(applesOnHouse);
  console.log(orangesOnHouse);
}
