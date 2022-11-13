function Tree() {
  this.root = null;
}

Tree.prototype.traverse = function() {
  this.root.visit(this.root);
}

Tree.prototype.searchN = function(val) {
  var found = this.root.search(val);
  return found;
}

Tree.prototype.min = function(){
  var minfound = this.root.FindMinNode();
  return minfound;
}

Tree.prototype.traversal = function(){
 var paok=this.root.Traversals(this.root);
 var inorder=paok.arr1,
     preorder=paok.arr2,
     postorder=paok.arr3;

  return {a1:inorder,
          a2:preorder,
          a3:postorder
         };     
}


Tree.prototype.addValue = function(val) {
  var n = new Node(val);
  
  if (this.root == null) {
    this.root = n;
    this.root.x = width / 2;
    this.root.y = 16; 
  } else {
    this.root.addNode(n);
  }
  this.root.seq=1;
}
