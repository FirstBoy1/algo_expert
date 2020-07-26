const arr = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];
//           ----  -------  -  --   -------  -
//         S:7 M:1  S:6 M:2
//                    12

// O(n) time | O(D) space

function productSum(arr, product = 1) {
  let sum = 0;
  for (let i in arr) {
    const item = arr[i];
    if (item instanceof Array) {
      sum += productSum(item, product + 1);
    } else {
      sum += item;
    }
  }

  return sum * product;
}

console.log(productSum(arr));
