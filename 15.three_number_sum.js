const sample = [12, 3, 1, 2, -6, 5, -8, 6];
const target = 0;
const ans = [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]];

// O(n^3) time | O(1) space
// function threeNumberSum(numbers, target) {
//   const ans = [];

//   for (let i = 0; i < numbers.length - 2; i++) {
//     for (let j = i + 1; j < numbers.length - 1; j++) {
//       for (let k = j + 1; k < numbers.length; k++) {
//         const num1 = numbers[i];
//         const num2 = numbers[j];
//         const num3 = numbers[k];
//         if (num1 + num2 + num3 === target) {
//           ans.push([num1, num2, num3]);
//         }
//       }
//     }
//   }

//   return ans;
// }

// O(n^2) time | O(n) space
// function threeNumberSum(numbers, target) {
//   const triples = {};
//   const ans = [];

//   for (let i = 0; i < numbers.length - 1; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       const x = numbers[i];
//       const y = numbers[j];
//       const z = target - x - y;
//       triples[z] ? ans.push([x, y, z]) : (triples[x + y] = true);
//     }
//   }

//   return ans;
// }

// sorted values
// O(n^2) time | O(n) space (with storing of triples)
function threeNumberSum(numbers, target) {
  numbers = numbers.sort((a, b) => a - b);
  const triples = [];

  for (let i = 0; i < numbers.length; i++) {
    let lp = i + 1;
    let rp = numbers.length - 1;

    while (lp < rp) {
      const x = numbers[i];
      const y = numbers[lp];
      const z = numbers[rp];

      const sum = x + y + z;

      if (sum === target) {
        triples.push([x, y, z]);
        lp++;
        rp--;
      } else if (sum < target) {
        lp++;
      } else if (sum > target) {
        rp--;
      }
    }
  }

  return triples;
}

console.log(threeNumberSum(sample, target));
