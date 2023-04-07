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

    // Loops until the node is Null
    while (node !== null) {
      count++;
      node = node.nextNode;
    }

    return count;
  }

  /**
   * Gets the first value inside the Linked List.
   * @returns the head value of the LinkedList
   */
  head() {
    return this.list.value;
  }

  /**
   * Gets the last value inside the linked List
   * @returns the tail value of the LinkedList
   */
  tail() {
    let node = this.list;

    while (node.nextNode !== null) {
      node = node.nextNode;
    }

    return node.value;
  }

  /**
   * Returns the nodes value at the specified index.
   * Starting value is of 1.
   * @param {number} index the location where to get the value.
   * @returns the nodes value at the specified index. Returns null
   * if value is out of range.
   */
  at(index) {
    if (index <= 0) {
      return null;
    }

    let node = this.list;
    // Loops until the index is of less than 1.
    while (index > 1) {
      node = node.nextNode;
      index--;

      if (node.nextNode === null) {
        return null;
      }
    }
    return node.value;
  }

  display() {
    return this.list;
  }
}
