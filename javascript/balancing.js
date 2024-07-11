class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// list = [3, 5, 6, 9, 10, 20]
          //  9
        //  5   10   
      //  3  6    20
function threeToTwenty() {
  const node1 = new Node(3);
  const node2 = new Node(6);
  const node3 = new Node(5, node1, node2);
  const node4 = new Node(20);
  const node5 = new Node(10, node4);

  return new Node(9, node3, node5);
}

// list = [10, 11, 30, 100, 200]
function tenToTwoHundred() {
  const node1 = new Node(10);
  const node2 = new Node(11, node1);
  const node3 = new Node(200);
  const node4 = new Node(100, null, node3);

  return new Node(30, node2, node4);
}

if (require.main === module) {
  // add tests in here if you need them
}

module.exports = {
  Node,
  threeToTwenty,
  tenToTwoHundred
};

// Please add your pseudocode to this file
// And a written explanation of your solution
