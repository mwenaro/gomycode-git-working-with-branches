function sumOfCubes(arr) {
  return arr.reduce((sum, num) => sum + Math.pow(num, 3), 0);
}

console.log(sumOfCubes([1, 2, 3])); // Output: 36 
console.log(sumOfCubes([-1, 2, -3])); // Output: -26 

/* or
function sumOfCubes(arr) {
  return arr.reduce((sum, num) => sum + Math.pow(num, 3), 0);
}
console.log(sumOfCubes([1, 2, 3])); // 1³ + 2³ + 3³ = 1 + 8 + 27 = 36

sumOfCubes([1, 5, 9]) ➞ 855
Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
sumOfCubes([3, 4, 5]) ➞ 216
sumOfCubes([2]) ➞ 8
sumOfCubes([]) ➞ 0 */