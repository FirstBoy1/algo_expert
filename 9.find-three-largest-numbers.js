// O(n) time | O(1) space

const sample = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];
const ans = [18, 141, 541];

function findThreeLargestNumbers(numbers) {
  const threeLargest = new Array(3).fill(Math.max());

  for (let num of numbers) {
    updateLargest(threeLargest, num);
  }

  return threeLargest;
}

function updateLargest(threeLargest, num) {
  if (threeLargest[2] == null || num > threeLargest[2]) {
    shiftAndUpdate(threeLargest, num, 2);
  } else if (threeLargest[1] == null || num > threeLargest[1]) {
    shiftAndUpdate(threeLargest, num, 1);
  } else if (threeLargest[0] == null || num > threeLargest[0]) {
    shiftAndUpdate(threeLargest, num, 0);
  }
}

function shiftAndUpdate(array, num, idx) {
  let i = 0;
  while (i <= idx) {
    i === idx ? (array[i] = num) : (array[i] = array[i + 1]);
    i++;
  }
}

console.log(findThreeLargestNumbers(sample));
