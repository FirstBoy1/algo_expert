// O(2^(n+m)) time | O(n+m) space
// O(nm) time | O(nm) space
function interweavingStrings(one, two, three) {
  if (three.length !== one.length + two.length) return false;

  const cache = Array(one.length + 1)
    .fill(0)
    .map(() => Array(two.length + 1).fill(null));

  return areInterwoven(one, two, three, 0, 0, cache);
}

function areInterwoven(one, two, three, i, j, cache) {
  if (cache[i][j] != null) return cache[i][j];

  const k = i + j;

  if (k === three.length) return true;

  if (i < one.length && one[i] === three[k]) {
    cache[i][j] = areInterwoven(one, two, three, i + 1, j, cache);
    if (cache[i][j]) return true;
  }

  if (j < two.length && two[j] === three[k]) {
    cache[i][j] = areInterwoven(one, two, three, i, j + 1, cache);
    return cache[i][j];
  }

  cache[i][j] = false;
  return false;
}

const time = Date.now();
console.log(interweavingStrings('aaa', 'aaaf', 'aaafaaa'));
console.log(Date.now() - time);
