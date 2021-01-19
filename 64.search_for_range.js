// O(log(n)) time | O(1) space
function searchForRange(array, target) {
  const range = [-1, -1];
  alteredBinarySearch(array, target, 0, array.length - 1, range, true);
  alteredBinarySearch(array, target, 0, array.length - 1, range, false);
  return range;
}

function alteredBinarySearch(array, target, left, right, range, goLeft) {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (array[mid] < target) {
      left = mid + 1;
    } else if (array[mid] > target) {
      right = mid - 1;
    } else {
      if (goLeft) {
        if (mid === 0 || array[mid - 1] !== target) return (range[0] = mid);
        else right = mid - 1;
      } else {
        if (mid === array.length - 1 || array[mid + 1] !== target)
          return (range[1] = mid);
        else left = mid + 1;
      }
    }
  }
}

const array = [0, 1, 21, 33, 45, 45, 45, 45, 45, 45, 61, 71, 73];
console.log(searchForRange(array, 45));
