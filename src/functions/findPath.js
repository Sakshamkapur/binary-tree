export function hasPath(root, arr, x)
{
    if (root == null)
        return false;
     
    arr.push(root.key);    
     
    if (root.key === x)    
        return true;
     
    if (hasPath(root.left, arr, x) ||
        hasPath(root.right, arr, x))
        return true;
     
    arr.pop();
    return false;            
}
 
export function findPath(root, x)
{
    let arr = [];
   
    if (hasPath(root, arr, x))
    {
        return arr;
    }
     
    return [];
}

