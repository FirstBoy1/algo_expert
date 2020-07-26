const arr = [2, 1, 2, 2, 2, 3, 4, 2];

// My Solution

function moveElementToEnd(arr, target) {
  const otherIndexes = [];
  for (let i in arr) {
    const item = arr[i];
    if (item !== target) otherIndexes.push(i);
  }
  for (let i in otherIndexes) {
    const index = otherIndexes[i];
    const item = arr[index];
    arr[i] = item;
  }
  for (let i = otherIndexes.length; i < arr.length; i++) {
    arr[i] = target;
  }
  return arr;
}

console.log(moveElementToEnd(arr, 2));
