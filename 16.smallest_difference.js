const sample = {
  arr1: [-1, 5, 10, 20, 28, 3],
  arr2: [26, 134, 135, 15, 17],
};
const ans = [28, 26];

// O(n^2) time | O(1) space
// function smallestDifference(arr1, arr2) {
//   let smallest = null;

//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (
//         smallest == null ||
//         Math.abs(arr1[i] - arr2[j]) < Math.abs(smallest[0] - smallest[1])
//       ) {
//         smallest = [arr1[i], arr2[j]];
//       }
//     }
//   }

//   return smallest;
// }

// O(nlog(n) + m(log(m))) time | O(1) space
function smallestDifference(arr1, arr2) {
  arr1 = arr1.sort((a, b) => a - b);
  arr2 = arr2.sort((a, b) => a - b);

  let smallest = null;
  let leftP = 0;
  let rightP = 0;

  while (leftP < arr1.length && rightP < arr2.length) {
    const first = arr1[leftP];
    const second = arr2[rightP];

    if (first === second) {
      return [first, second];
    } else if (first < second) {
      leftP++;
    } else if (first > second) {
      rightP++;
    }

    if (
      smallest == null ||
      Math.abs(first - second) < Math.abs(smallest[0] - smallest[1])
    ) {
      smallest = [first, second];
    }
  }

  return smallest;
}

console.log(smallestDifference(sample.arr1, sample.arr2));
