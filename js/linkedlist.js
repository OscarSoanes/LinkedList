import {Node} from "./node.js";

export class LinkedList {
  constructor(list = null) {
    this.list = list;
  }

  /**
   * Appends a value to the end of the Linked List.
   * @param {*} value, value to be appended to List
   */
  append(value) {
    const newNode = new Node(value);

    if (this.list === null) {
      this.list = newNode;
      return;
    }

    // Gets the current Node, loops until it finds null.
    let node = this.list;
    while (node.nextNode !== null) {
      node = node.nextNode;
    }

    node.nextNode = newNode;
  }

  /**
   * Prepends a value to the start of the Linked List.
   * @param {*} value, value to be prepended to the List
   */
  prepend(value) {
    const newNode = new Node(value);

    if (this.list === null) {
      this.list = newNode;
      return;
    }

    newNode.nextNode = this.list;
    this.list = newNode;
  }

  /**
   * Gets the size of the LinkedList
   * @returns the total amount of Nodes in the LinkedList
   */
  size() {
    let node = this.list;
    let count = 0;
    while (node !== null) {
      count++;
      node = node.nextNode;
    }

    return count;
  }

  display() {
    return this.list;
  }
}
