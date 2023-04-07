import {LinkedList} from "./js/linkedList.js";

let list = new LinkedList();
list.append("test");
console.log(list.display());

list.append("test2");
list.append("test3");

list.prepend("rawr");
console.log(list.display());
// console.log(list.size());

// console.log(list.head());
// console.log(list.tail());

console.log(list.at(1));
console.log(list.at(1000));
