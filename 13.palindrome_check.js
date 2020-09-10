const sample = 'abcdcba';

// O(n*2) time | O(n) space
function isPalindromeFirst(string) {
  let reversedString = '';
  for (let i = string.length - 1; i > -1; i--) {
    reversedString += string[i];
  }

  return string === reversedString;
}

// O(n) time | O(n) space
function isPalindromeSecond(string) {
  let reversedString = [];
  for (let i = string.length - 1; i > -1; i--) {
    reversedString.push(string[i]);
  }

  return string === reversedString.join('');
}

// O(n) time | O(n) space
// function isPalindromeThird(string) {
//   if (string.length === 0) return true;

//   return (
//     string[0] === string[string.length - 1] &&
//     isPalindromeThird(string.slice(1, -1))
//   );
// }
function isPalindromeThird(string, i = 0) {
  const j = string.length - 1 - i;
  if (i >= j) return true;

  return string[i] === string[j] && isPalindromeThird(string, i + 1);
}

// O(n) time | O(1) space
function isPalindromeFourth(string) {
  let firstIdx = 0;
  let secondIdx = string.length - 1;

  while (firstIdx < secondIdx) {
    console.log(firstIdx, secondIdx);
    if (string[firstIdx] !== string[secondIdx]) return false;
    firstIdx++;
    secondIdx--;
  }

  return true;
}

console.log(isPalindromeFourth(sample));
