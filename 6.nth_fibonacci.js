// FIRST SOLUTION
// With LOOP O(n) time | O(1) space

function nthFibonacci(n) {
  if (n === 1) return 0;
  if (n === 2) return 1;

  let first = 0;
  let second = 1;

  for (let i = 3; i <= n; i++) {
    const temp = first;
    first = second;
    second = temp + second;
  }

  return second;
}

// SECOND SOLUTION
// Recursive method O(n) time | O(n) space

const cache = {};

function fib(n) {
  if (n === 2) return 1;
  if (n === 1) return 0;
  if (cache[n]) return cache[n];
  cache[n] = fib(n - 1) + fib(n - 2);
  return cache[n];
}

console.time('time');
const fibValue = fib(100);
console.timeEnd('time');
console.log(fibValue);
