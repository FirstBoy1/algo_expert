// function underscorifySubstring(str, word) {
//   const stack = [],
//     occurences = [];
//   let i = 0,
//     idx = -1,
//     count = 0;

//   while (i < str.length) {
//     const char = str[i];
//     if (char === word[idx] && count + 1 === word.length) {
//       let leftIdx = stack.pop(),
//         rightIdx = i;
//       if (occurences.length) {
//         let lastOcc = occurences[occurences.length - 1];
//         if (lastOcc === leftIdx || lastOcc + 1 === leftIdx) {
//           occurences.pop();
//           occurences.push(rightIdx);
//         } else {
//           occurences.push(leftIdx, rightIdx);
//         }
//       } else {
//         occurences.push(leftIdx, rightIdx);
//       }
//       count = 0;
//       idx = -1;
//     }

//     if (idx !== -1 && char !== word[idx]) {
//       count = 0;
//       idx = -1;
//       stack.pop();
//     }

//     if (char === word[0]) {
//       stack.push(i);
//       idx = 1;
//       count++;
//     } else if (char === word[idx]) {
//       count++;
//       idx++;
//     }
//     i++;
//   }

//   let modifiedStr = '',
//     j = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (j < occurences.length && occurences[j] === i) {
//       if (j % 2 === 0) {
//         modifiedStr += '_';
//         modifiedStr += str[i];
//       } else {
//         modifiedStr += str[i];
//         modifiedStr += '_';
//       }
//       j++;
//     } else {
//       modifiedStr += str[i];
//     }
//   }

//   return modifiedStr;
// }

function underscorifySubstring(str, word) {
  let locations = getLocations(str, word);
  locations = collapseLocations(locations);
  return underscorify(str, locations);
}

function getLocations(str, word) {
  const occurences = [],
    queue = [];
  let i = 0,
    idx = -1,
    count = 0;

  while (i < str.length) {
    const char = str[i];
    if (idx === -1 && queue.length) {
      i = queue.shift();
      idx = 1;
      count++;
    }

    if (char === word[idx] && count + 1 === word.length) {
      occurences.push(queue.shift(), i);
      count = 0;
      idx = -1;
    }

    if (idx !== -1 && char !== word[idx]) {
      count = 0;
      idx = -1;
      queue.shift();
    }

    if (char === word[0]) {
      queue.push(i);
      idx = 1;
      count++;
    } else if (char === word[idx]) {
      count++;
      idx++;
    }
    i++;
  }

  return occurences;
}

function collapseLocations(locations) {
  const newLocations = [];
  for (let i = 0; i < locations.length; i++) {
    if (i > 0 && i % 2 == 0) {
      let lastOcc = newLocations[newLocations.length - 1];
      const [leftIdx, rightIdx] = [locations[i], locations[i + 1]];
      if (lastOcc === leftIdx || lastOcc + 1 === leftIdx) {
        newLocations.pop();
        newLocations.push(rightIdx);
        i++;
      } else {
        newLocations.push(leftIdx);
      }
    } else {
      newLocations.push(locations[i]);
    }
  }
  return newLocations;
}

function underscorify(str, locations) {
  let modifiedStr = '',
    j = 0;
  for (let i = 0; i < str.length; i++) {
    if (j < locations.length && locations[j] === i) {
      if (j % 2 === 0) {
        modifiedStr += '_';
        modifiedStr += str[i];
      } else {
        modifiedStr += str[i];
        modifiedStr += '_';
      }
      j++;
    } else {
      modifiedStr += str[i];
    }
  }

  return modifiedStr;
}

const sample = 'testthis is a testtest to see if testestest it works';
const ans = '_test_this is a _testtest_ to see if _testestest_ it works';

console.log(underscorifySubstring(sample, 'test'));
console.log(underscorifySubstring('tttt', 'tt'));
