const denoms = [1, 2, 4];
const target = 6;

// O(nd) time | O(n) space
function minMinNumberOfCoinsForChange(n, denoms) {
  const numOfCoins = new Array(n + 1).fill(Math.min());
  numOfCoins[0] = 0;

  for (const denom of denoms) {
    for (const amount in numOfCoins) {
      if (denom <= amount) {
        numOfCoins[amount] = Math.min(
          numOfCoins[amount],
          1 + numOfCoins[amount - denom]
        );
      }
    }
  }

  return numOfCoins[n];
}

console.log(minMinNumberOfCoinsForChange(target, denoms));
