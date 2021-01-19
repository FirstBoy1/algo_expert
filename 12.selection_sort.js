const sample = [8, 5, 2, 9, 5, 6, 3];

// O(n^2) time | O(1) space
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swapIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[swapIdx]) swapIdx = j;
    }
    [arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]];
  }
}

selectionSort(sample);
console.log(sample);
