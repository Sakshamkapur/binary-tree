export const getLevelWiseNodes = (rootNode) => {
    if(!rootNode) return;
    let valueAndLevel = [];
    var queue = [];
    queue.push(rootNode);

    while (queue.length !== 0) {
      var tempNode = queue.shift();
      valueAndLevel.push(tempNode)

      /* Enqueue left child */
      if (tempNode.left != null) {
        queue.push(tempNode.left);
      }

      /* Enqueue right child */
      if (tempNode.right != null) {
        queue.push(tempNode.right);
      }

    }
    return valueAndLevel.reduce((acc, value) => {
      if(value.level in acc) return {...acc,[value.level]: [...acc[value.level],value] }
      return { ...acc,[value.level]: [value] }
    }, {})
}