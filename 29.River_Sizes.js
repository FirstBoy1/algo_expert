// O(wh) or O(n) time | O(wh) space

const sample = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0],
];

function riverSizes(matrix) {
  const sizes = [];
  const visited = matrix.map((row) => row.map(() => false));
  for (let i in matrix) {
    for (let j in matrix[i]) {
      if (visited[i][j]) continue;
      i = Number(i);
      j = Number(j);
      traverseNode(i, j, matrix, visited, sizes);
    }
  }
  return sizes;
}

function traverseNode(i, j, matrix, visited, sizes) {
  let currentRiverSize = 0;
  let nodesToExplore = [[i, j]];

  while (!!nodesToExplore.length) {
    const currentNode = nodesToExplore.pop();
    [i, j] = currentNode;
    if (visited[i][j]) continue;
    visited[i][j] = true;
    if (matrix[i][j] === 0) continue;
    currentRiverSize += 1;
    const unvisitedNeighbors = getUnvisitedNeighbors(i, j, matrix, visited);
    nodesToExplore = [...nodesToExplore, ...unvisitedNeighbors];
  }

  if (currentRiverSize > 0) sizes.push(currentRiverSize);
}

function getUnvisitedNeighbors(i, j, matrix, visited) {
  const unvisitedNeighbors = [];
  if (i > 0 && !visited[i - 1][j]) unvisitedNeighbors.push([i - 1, j]);
  if (i < matrix.length - 1 && !visited[i + 1][j])
    unvisitedNeighbors.push([i + 1, j]);
  if (j > 0 && !visited[i][j - 1]) unvisitedNeighbors.push([i, j - 1]);
  if (j < matrix[i].length - 1 && !visited[i][j + 1])
    unvisitedNeighbors.push([i, j + 1]);
  return unvisitedNeighbors;
}

console.log(riverSizes(sample));
