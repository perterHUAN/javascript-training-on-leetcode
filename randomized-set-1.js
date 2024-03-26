function createNode(type, parent = null, val, left = null, right = null) {
  const node = {
    parent,
    left,
    right,
    cnt: 0,
  };
  if (type === "leaf") node.val = val;
  return node;
}
function RandomizedSet() {
  /*
        use a binary tree to save element in set 
        node:
            type: inner | leaf | root
            right: node
            left: node
            parent: node
            val: only leaf meaning
        insert to tree
        search in tree
        remove from tree 
    */
  this.root = createNode("root");
}
RandomizedSet.prototype.increaseOrdecrease = function (val, v) {
  let currNode = this.root;
  currNode.cnt += v;
  for (let i = 0; i < 32; ++i) {
    if (val & (1 << i)) {
      currNode = currNode.right;
    } else {
      currNode = currNode.left;
    }
    currNode.cnt += v;
  }
};
RandomizedSet.prototype.insert = function (val) {
  console.log("insert: ", val);
  let currNode = this.root;
  let res = false;
  for (let i = 0; i < 32; ++i) {
    if (val & (1 << i)) {
      if (!currNode.right) {
        res = true;
        currNode.right =
          i === 31
            ? createNode("leaf", currNode, val)
            : createNode("inner", currNode);
      }
      currNode = currNode.right;
    } else {
      if (!currNode.left) {
        res = true;
        currNode.left =
          i === 31
            ? createNode("leaf", currNode, val)
            : createNode("inner", currNode);
      }
      currNode = currNode.left;
    }
  }
  if (res) this.increaseOrdecrease(val, 1);
  return res;
};

RandomizedSet.prototype.show = function (root, indent, flag) {
  if (root === null) return;
  console.log(" ".repeat(indent) + flag);
  this.show(root.left, indent + 1, "0");
  this.show(root.right, indent + 1, "1");
};
function leftOrRight() {
  return Math.random() >= 0.5;
}
RandomizedSet.prototype.getRandom = function () {
  let currNode = this.root;
  for (let i = 0; i < 32; ++i) {
    if (currNode.left && !currNode.right) currNode = currNode.left;
    else if (currNode.right && !currNode.left) currNode = currNode.right;
    else if (!currNode.right && !currNode.left) return false;
    else {
      const rightCnt = currNode.right.cnt,
        leftCnt = currNode.left.cnt;
      const totalCnt = rightCnt + leftCnt;
      const boundary = leftCnt / totalCnt;
      console.log(
        "rightCnt: ",
        rightCnt,
        " leftCnt: ",
        leftCnt,
        " boundary: ",
        boundary
      );
      if (Math.random() >= boundary) {
        currNode = currNode.right;
        console.log("choose right");
      } else {
        currNode = currNode.left;
        console.log("choose left");
      }
    }
  }
  console.log("return val: ", currNode.val);
  return currNode.val;
};

RandomizedSet.prototype.remove = function (val) {
  let currNode = this.root;
  for (let i = 0; i < 32 && currNode !== null; ++i) {
    if (val & (1 << i)) {
      currNode = currNode.right;
    } else {
      currNode = currNode.left;
    }
  }
  // no existing
  if (currNode === null) return false;
  // clear this leaf node and associated free nodes
  function checkNoChilrenNode(node) {
    return node.left === null && node.right === null;
  }
  // decrease cnt
  this.increaseOrdecrease(val, -1);

  function removeNode(node) {
    let parent = node.parent;
    if (node == parent.left) parent.left = null;
    if (node == parent.right) parent.right = null;
    node.parent = null;
    return parent;
  }
  while (currNode && currNode.parent) {
    // check whether parent node only have this one child node
    if (checkNoChilrenNode(currNode)) {
      currNode = removeNode(currNode);
    } else break;
  }

  return true;
};

module.exports = RandomizedSet;
