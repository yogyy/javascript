// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.
/*
timeConversion has the following parameter(s):

string s: a time in 12 hour format
Returns

string: the time in 12 hour format */

function timeConversion(s) {
  // Write your code here
  let [time, part] = [s.substring(0, s.length - 2), s.substring(s.length - 2)];
  time = time.split(":").map(Number);
  if (part === "PM" && time[0] === 12) time[0] = 12;
  if (part === "PM" && time[0] !== 12) time[0] = (time[0] + 12) % 24;
  if (part === "AM" && time[0] === 12) time[0] = 0;
  return time
    .map(String)
    .map((s) => s.padStart(2, "0"))
    .join(":");
}
