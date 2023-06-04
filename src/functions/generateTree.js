import { insertLevelOrder } from "./insertLevelOrder";

export const generateTree = (arr) => {
    return insertLevelOrder(arr,0);
}