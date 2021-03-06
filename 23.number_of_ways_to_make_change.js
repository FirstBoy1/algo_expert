const target = 10;
const denoms = [1, 5, 10, 25];

// O(n * d) time | O(n) space
function numberOfWaysToMakeChange(n, denoms) {
  const ways = new Array(n + 1).fill(0);
  ways[0] = 1;

  for (let denom of denoms) {
    for (let amount of [...Array(n + 1).keys()]) {
      if (denom <= amount) {
        ways[amount] = ways[amount] + ways[amount - denom];
      }
    }
  }

  return ways[n];
}

console.log(numberOfWaysToMakeChange(target, denoms));
