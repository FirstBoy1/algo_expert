// Prerequisite sorted

const arr = [0, 1, 31, 33, 45, 45, 61, 71, 73];
// test case 33, 74

// O(log(n)) time | space O(1) with iterative O(log(n)) with recursive
function binarySearch(values, target) {
  let leftP = 0;
  let rightP = values.length - 1;

  while (leftP <= rightP) {
    let middleP = Math.floor((leftP + rightP) / 2);

    if (values[middleP] === target) return true;
    if (target < values[middleP]) rightP = middleP - 1;
    if (target > values[middleP]) leftP = middleP + 1;
  }

  return false;
}

console.log(binarySearch(arr, 33));
console.log(binarySearch(arr, 74));
