function logestSubstringWithoutDuplication(str) {
  let lastSeen = {},
    startIdx = 0,
    longest = [0, 1];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char in lastSeen) {
      startIdx = Math.max(startIdx, lastSeen[char] + 1);
    }

    if (longest[1] - longest[0] < i + 1 - startIdx) {
      longest = [startIdx, i + 1];
    }

    lastSeen[char] = i;
  }

  return str.slice(...longest);
}

console.log(logestSubstringWithoutDuplication('clementisacap'));
