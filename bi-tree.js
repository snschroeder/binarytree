function biTree() {
    this.root = null;
}

biTree.prototype.addValue = function(val) {
  let node = new Node(val);

  if (this.root == null) {
    this.root = node;
  } else {
    this.root.addNode(node);
  }
}

biTree.prototype.traverse = function() {
  this.root.visit();
}

biTree.prototype.search = function(val) {
  let found = this.root.search(val);
  return found;
}