function Node(val, x, y,seq) {
    this.value = val;
    this.left = null;
    this.right = null;
    this.x = x;
    this.y = y;
    this.seq=seq;   
  }
  

  Node.prototype.search = function(val) {
    if (this.value == val) {
      fill('green')
      ellipse(this.x, this.y, 30, 30);
      textAlign(CENTER);
      fill('black');
      text(this.value, this.x, this.y);
      return this;
      
    } else if (val < this.value && this.left != null) {
      return this.left.search(val);
    } else if (val > this.value && this.right != null) {
      return this.right.search(val);
    }
    return null;
  }


  Node.prototype.FindMinNode = function(){
    if(this.left === null)
    return;  

    else{
        return this.left.FindMinNode(this.left);
    }   
}


var inorderArr=[];
var preorderArr=[];
var postorderArr=[];


Array.prototype.remove = function() {
  var what, a = arguments, L = a.length, ax;
  while (L && this.length) {
      what = a[--L];
      while ((ax = this.indexOf(what)) !== -1) {
          this.splice(ax, 1);
      }
  }
  return this;
}


Node.prototype.Traversals = function(parent)
{
  
  if (preorderArr.includes(this.value)){
    preorderArr.remove(this.value);
  }
  preorderArr.push(this.value);

  if (this.left != null) {
    this.left.Traversals(this);
  }


  if (inorderArr.includes(this.value)){
    inorderArr.remove(this.value);
  }
  inorderArr.push(this.value);
  

  if (this.right != null) {
    this.right.Traversals(this);
  }


  if (postorderArr.includes(this.value)){
    postorderArr.remove(this.value);
  }
  postorderArr.push(this.value);

return {arr1:inorderArr,
        arr2:preorderArr,
        arr3:postorderArr
       }
  }


Node.prototype.visit = function(parent) {
    if (this.left != null) {
      this.left.visit(this);
    }
    console.log(this.value);
    noStroke();
    
    fill('white')
    ellipse(this.x, this.y, 30, 30);

    stroke('white')
    line(parent.x , parent.y , this.x, this.y);

    noStroke()

    textAlign(CENTER);
    fill('black');
    text(this.value, this.x, this.y);
    
    if (this.right != null) {
      this.right.visit(this);
    }
  }
 
  
  Node.prototype.addNode = function(n) {
    if (n.value < this.value) {
      if (this.left == null) {
        this.left = n;
        this.left.seq=this.seq+1;

        if (this.left.seq==2){
        this.left.x = this.x - 250 + 20*this.left.seq;
        this.left.y = this.y + 50 + 10*this.left.seq;
        }
        else{
        this.left.x = this.x - 150 + 20*this.left.seq;
        this.left.y = this.y + 50 + 5*this.left.seq;
        }
      } else {
        this.left.addNode(n)
      }
    } else if (n.value > this.value) {
      if (this.right == null) {
        this.right = n;
        this.right.seq=this.seq+1;

        if (this.right.seq==2){
        this.right.x = this.x + 250 - 20*this.right.seq;
        this.right.y = this.y + 50 + 10*this.right.seq;
        }
        else{
        this.right.x = this.x + 150 - 20*this.right.seq;
        this.right.y = this.y + 50 + 5*this.right.seq;
      }
  
      } else {
        this.right.addNode(n);
      }
    }
  }
