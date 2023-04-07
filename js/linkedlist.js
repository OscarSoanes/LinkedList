import {Node} from "./node.js";

export class LinkedList {
  constructor(list = null) {
    this.list = list;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.list === null) {
      this.list = newNode;
      return;
    }

    let node = this.list;
    while (node.nextNode !== null) {
      node = node.nextNode;
    }

    node.nextNode = newNode;
  }

  display() {
    console.log(this.list);
  }
}
