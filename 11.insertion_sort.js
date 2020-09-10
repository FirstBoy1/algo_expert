// left sorted - right unsorted

const sample = [8, 5, 2, 9, 5, 6, 3];

// O(n^2) time | O(1) space
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (arr[j] < arr[j - 1]) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      j -= 1;
    }
  }
}

insertionSort(sample);
console.log(sample);
