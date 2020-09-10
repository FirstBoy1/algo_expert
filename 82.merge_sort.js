const sample = [8, 5, 2, 9, 5, 6, 3];

// First Method
// O(nlog(n)) time | O(nlog(n)) space

// function mergeSort(arr) {
//   if (arr.length === 1) return arr;
//   const divideNumber = Math.floor(arr.length / 2);
//   const leftArr = arr.slice(0, divideNumber);
//   const rightArr = arr.slice(divideNumber);
//   return merge(mergeSort(leftArr), mergeSort(rightArr));
// }

// function merge(arr1, arr2) {
//   let leftP = 0;
//   let rightP = 0;
//   const sortedArr = [];

//   while (leftP < arr1.length && rightP < arr2.length) {
//     if (arr1[leftP] < arr2[rightP]) {
//       sortedArr.push(arr1[leftP]);
//       leftP += 1;
//     } else {
//       sortedArr.push(arr2[rightP]);
//       rightP += 1;
//     }
//   }

//   while (leftP < arr1.length) {
//     sortedArr.push(arr1[leftP]);
//     leftP += 1;
//   }
//   while (rightP < arr2.length) {
//     sortedArr.push(arr2[rightP]);
//     rightP += 1;
//   }

//   return sortedArr;
// }

// Second Method
// O(nlog(n)) time | O(n) space
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const auxiliaryArray = [...arr];
  mergeSortHelper(arr, 0, arr.length - 1, auxiliaryArray);
  return arr;
}

function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray) {
  if (startIdx === endIdx) return;

  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray);
}

function doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;

  while (i <= middleIdx && j <= endIdx) {
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      mainArray[k] = auxiliaryArray[i];
      i += 1;
    } else {
      mainArray[k] = auxiliaryArray[j];
      j += 1;
    }
    k += 1;
  }

  while (i <= middleIdx) {
    mainArray[k] = auxiliaryArray[i];
    i += 1;
    k += 1;
  }
  while (j <= endIdx) {
    mainArray[k] = auxiliaryArray[j];
    j += 1;
    k += 1;
  }
}

console.log(mergeSort(sample));
