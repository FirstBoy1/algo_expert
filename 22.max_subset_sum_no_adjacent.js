// formula current=max(maxSums[i-1], maxSums[i-2] + array[i])
// current = max(first, second + array[i]);

const sample = [7, 10, 12, 7, 9, 14];
const ans = [7, 10, 19, 19, 28, 33];

// O(n) time | O(n) space
function maxSubsetSumNoAdjacent(array) {
  if (array.length === 0) return;
  else if (array.length === 1) return array[0];

  const maxSums = [...array];
  for (let i = 2; i < array.length; i++) {
    maxSums[i] = Math.max(maxSums[i - 1], maxSums[i - 2] + array[i]);
  }

  return maxSums[maxSums.length - 1];
}

// O(n) time | O(1) space
function maxSubsetSumNoAdjacent(array) {
  if (array.length === 0) return;
  else if (array.length === 1) return array[0];

  let second = array[0];
  let first = Math.max(array[0], array[1]);
  let current;

  for (let i = 2; i < array.length; i++) {
    current = Math.max(first, second + array[i]);
    second = first;
    first = current;
  }

  return first;
}
