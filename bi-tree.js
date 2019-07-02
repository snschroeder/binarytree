function biTree() {
    this.root = null;
}

biTree.prototype.addValue = function(val) {
  let node = new Node(val);

  if (this.root == null) {
    this.root = node;
    this.root.x = width/2;
    this.root.y = 20;
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