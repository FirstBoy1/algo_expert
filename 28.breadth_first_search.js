class Node {
  constructor(name) {
    this.children = [];
    this.name = name;
  }

  addChild(node) {
    this.children.push(node);
    return this;
  }

  // O(v + e) time | O(v) space
  breadthFirstSearch(array) {
    const queue = [this];
    while (queue.length) {
      const current = queue.shift();
      array.push(current.name);
      for (const child of current.children) {
        queue.push(child);
      }
    }
    return array;
  }
}

const a = new Node('A')
  .addChild(
    new Node('B')
      .addChild(new Node('E'))
      .addChild(new Node('F').addChild(new Node('I')).addChild(new Node('J')))
  )
  .addChild(new Node('C'))
  .addChild(
    new Node('D')
      .addChild(new Node('G').addChild(new Node('K')))
      .addChild(new Node('H'))
  );

console.log(a.children);

console.log(a.breadthFirstSearch([]));
