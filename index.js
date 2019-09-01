function inOrder(currentNode) {
  if (currentNode.left) {
    inOrder(currentNode.left)
  }
  console.log(currentNode.data)
  if (currentNode.right) {
    inOrder(currentNode.right)
  }
}

function findOrAdd(rootNode, node){
  let currentNode = rootNode;

  if (node.data === currentNode.data){
    return true;
  } 
  
  if (node.data < currentNode.data){
    if (currentNode.left){
      return findOrAdd(currentNode.left, node)
    } else{ 
      currentNode.left = node;
    }
  } else {
    if(currentNode.right){
      return findOrAdd(currentNode.right, node)
    } else {
      currentNode.right = node;
    }
  }
}

function min(node){
  if (node.left){
    return min(node.left);
  } else {
    return node;
  }
}

function max(node){
  if (node.right){
    return max(node.right);
  } else {
    return node;
  }
}