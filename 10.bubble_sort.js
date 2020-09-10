const sample = [8, 5, 2, 9, 5, 6, 3];

// O(n^2) time | O(1) space
// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//       if (arr[j + 1] < arr[j]) {
//         [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
//       }
//     }
//   }

//   return arr;
// }

// Little Optimization
function bubbleSort(arr) {
  let isSorted = false;
  let counter = 0;

  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < arr.length - 1 - counter; i++) {
      if (arr[i + 1] < arr[i]) {
        [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
        isSorted = false;
      }
    }
    counter += 1;
  }

  return arr;
}

console.log(bubbleSort(sample));
