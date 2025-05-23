// Create a function that takes an array of numbers
//  and return both the minimum
//  and maximum numbers,
// in that order.

/*
minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

minMax([2334454, 5]) ➞ [5, 2334454]

minMax([1]) ➞ [1, 1]
*/

// const minMax = (nums) => {
//     const min = Math.min(...nums)
//     const max = Math.max(...nums)
//     return [min, max]
// };

const minMax = nums => [Math.min(...nums), Math.max(...nums)];
console.log(minMax([1, 2, 3, 4, 5])) // [1,5]

console.log(minMax([2334454, 5])) //➞ [5, 2334454]

console.log(minMax([1])) //➞ [1, 1]