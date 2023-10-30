/*

Problem:

Given an array of integers, write a function to find the maximum sum of any contiguous subarray.

For example, given the array: [-2, 1, -3, 4, -1, 2, 1, -5, 4], the function should return 6, as the contiguous subarray with the maximum sum is [4, -1, 2, 1], which sums up to 6.

Your task is to implement a function with the following signature:

function maxSubarraySum(arr) {
  // Your implementation here
}
In your solution, consider both the time and space complexity. Aim for an efficient solution that solves the problem in linear time complexity (O(n)), where n is the length of the input array.

*/

// Solution:

function maxSubarraySum (data) {
    let count = data.length;
    let max = -Math.pow(10, 1000);
    let sum = 0;
    for(let i=0; i < count; i++) {
        sum = sum + data[i];
        if (max < sum) {
            max = sum;
        }
        if (sum < 0) {
            sum = 0;
        }
    }
    return max;
}

console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubarraySum([4, -1, 2, 1]));