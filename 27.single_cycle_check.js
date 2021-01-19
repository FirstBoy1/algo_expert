const sample = [2, 3, 1, -4, -4, 2];

// O(n) time | O(n) space
function firstSingleCycleCheck(values) {
  const checkedValues = Array(values.length).fill(0);
  let currentIdx = 0;
  let isFirstIdx = true;

  while (currentIdx !== 0 || isFirstIdx) {
    checkedValues[currentIdx] += 1;
    isFirstIdx = false;
    let nextIdx = currentIdx + values[currentIdx];

    if (nextIdx > values.length - 1) {
      nextIdx = (nextIdx % (values.length - 1)) - 1;
    } else if (nextIdx < 0) {
      nextIdx = values.length + nextIdx;
    }
    currentIdx = nextIdx;
  }

  return checkedValues.every((value) => value === 1);
}

// O(n) time | O(1) space
function secondSingleCycleCheck(values) {
  let noOfCycleCheck = 0;
  let currentIdx = 0;

  while (noOfCycleCheck < values.length) {
    if (noOfCycleCheck > 0 && currentIdx === 0) return false;
    noOfCycleCheck += 1;
    currentIdx = getNextIdx(currentIdx, values);
  }

  return currentIdx === 0;
}

function getNextIdx(currentIdx, values) {
  let nextIdx = currentIdx + values[currentIdx];

  if (nextIdx > values.length - 1) {
    nextIdx = (nextIdx % (values.length - 1)) - 1;
  } else if (nextIdx < 0) {
    nextIdx = values.length + nextIdx; // -25 % 6 = -1, 6 + (-1)
  }

  return nextIdx;
}

console.log(secondSingleCycleCheck(sample));
