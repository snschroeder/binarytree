var tree;

function setup() {
    tree = new biTree();
    for (let i = 0; i < 100; i++) {
        tree.addValue(randomIntGen(100));
    }
}

function randomIntGen(ceiling) {
    return Math.floor(Math.random()*ceiling);
}

setup();

tree.traverse();
let result = tree.search(10);
if (result == null) {
  console.log("not found");
} else if (result !== null) {
  console.log("found " + result.value);
}