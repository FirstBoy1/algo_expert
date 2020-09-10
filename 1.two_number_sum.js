let values = [3, 5, -4, 8, 11, 1, -1, 6];
const target = 10;

const pairs = [];

// FIRST METHOD - NESTED LOOPS O(n^2) time | O(1) space
// for (let i = 0; i < values.length; i++) {
//   for (let j = i + 1; j < values.length; j++) {
//     const sum = values[i] + values[j];
//     if (sum === target) {
//       pairs.push([values[i], values[j]]);
//     }
//   }
// }

// SECOND METHOD - HASH TABLE O(n) time | O(n) space
// const nums = {};
// for (let i = 0; i < values.length; i++) {
//   const x = values[i];
//   const y = target - x;
//   y in nums ? pairs.push([x, y]) : (nums[x] = true);
// }

// THIRD METHOD - LOOP O(nlog(n)) time | O(1) space
// VALUES SHOULD BE SORTED

// values = values.sort((a, b) => a - b);

let leftPointer = 0;
let rightPointer = values.length - 1;
while (leftPointer < rightPointer) {
  const leftValue = values[leftPointer];
  const rightValue = values[rightPointer];
  const sum = leftValue + rightValue;
  if (sum > target) {
    rightPointer -= 1;
  } else if (sum < target) {
    leftPointer += 1;
  } else if (sum === target) {
    rightPointer -= 1;
    leftPointer += 1;
    pairs.push([leftValue, rightValue]);
  }
}

console.log(pairs);
