let width = 800;
let height = 800;
let tree;

function setup() {
    createCanvas(width, height);
    background(52);
    tree = new biTree();
    for (let i = 0; i < 12; i++) {
        tree.addValue(randomIntGen(100));
    }
    tree.traverse();
}

function draw() {

}

function randomIntGen(ceiling) {
    return Math.floor(Math.random()*ceiling);
}

/*tree.traverse();
let result = tree.search(10);
if (result == null) {
  console.log("not found");
} else if (result !== null) {
  console.log("found " + result.value);
}*/