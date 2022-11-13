var tree;   

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
  tree = new Tree();
  
  
}

function add(){
  
  tree.addValue(this.int(document.getElementById("value").value));

  console.log(tree);

  tree.traversal();
  background(20);
  tree.traverse();
  tree.min();
    
  var traversal = tree.traversal();
  var inorder=traversal.a1,
      preorder=traversal.a2
      postorder=traversal.a3;
  fill('white');
  textAlign(LEFT);
  text("inorder : " + inorder, 10, 30);
  fill('white');
  textAlign(LEFT);
  text("preorder: " + preorder,10,50);
  fill('white');
  textAlign(LEFT);
  text("preorder: " + postorder,10,70)
  
}

function search(){

  tree.searchN(document.getElementById("Search").value);

}

