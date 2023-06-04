class Node {
    constructor(key, value, level) {
      this.value = value;
      this.key = key;
      this.left = null;
      this.right = null;
      this.level = level;
    }
    
    free() {
      this.left = null;
      this.right = null;
    }
}

export default Node;