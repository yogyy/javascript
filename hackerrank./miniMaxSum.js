// given an array of integers, and you are asked to find the minimum and maximum sums that can be obtained 
// by adding together any four of the five integers. 


function miniMaxSum(arr) {
  arr.sort();
  let min = 0, max = 0;
  for (let i = 0; i < 4; i++) {
    min += arr[i];
    max += arr[i+1];
  }
  console.log(min + " " + max);
}

// In this function, the input array is sorted in ascending order, 
// and then the first four elements are added together to get the minimum sum,
// and the last four elements are added together to get the maximum sum.
