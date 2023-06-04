import Node from "../classes/node";

let key = 1;
export function insertLevelOrder(arr, i, level = 0)
{
    let root = null;
    
    if (i < arr.length) {
        root = new Node(key++, arr[i], level);
        ++level;
        // insert left child
        root.left = insertLevelOrder(arr, 2 * i + 1,level);

        // insert right child
        root.right = insertLevelOrder(arr, 2 * i + 2,level);
    }
    return root;
}