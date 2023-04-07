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
    if (index < 0) {
      return null;
    }

    let node = this.list;
    // Loops until the index is of less than 1.
    while (index > 0) {
      node = node.nextNode;
      index--;

      if (node.nextNode === null) {
        return null;
      }
    }
    return node.value;
  }

  /**
   * Removes the last value within the LinkedList.
   */
  pop() {
    let node = this.list;

    while (node.nextNode.nextNode !== null) {
      node = node.nextNode;
    }

    node.nextNode = null;
  }

  /**
   * Checks the entire LinkedList to see if there a value that matches the defined value.
   * @param {*} value the value to check and see if the LinkedList contains this.
   * @returns true or false depending if the value is in the LinkedList.
   */
  contains(value) {
    let node = this.list;

    while (node !== null) {
      if (node.value === value) {
        return true;
      }
      node = node.nextNode;
    }

    return false;
  }

  /**
   * Checks the entire LinkedList to see if the value is, and returns the Index of the location if found.
   * @param {*} value the value of check and see if the LinkedList contains it.
   * @returns the index of the location if found or null if it does not exist.
   */
  find(value) {
    let node = this.list;
    let index = 0;
    while (node !== null) {
      index++;
      if (node.value === value) {
        return index;
      }
      node = node.nextNode;
    }

    return null;
  }

  /**
   * Prints the LinkedList to a prettier format.
   * @returns a String that is in the style of ( node1 ) -> ( node2 ) -> null
   */
  toString() {
    let node = this.list;
    let printMsg = "";

    while (node !== null) {
      printMsg = printMsg.concat(`( ${node.value} ) -> `);
      node = node.nextNode;
    }
    printMsg = printMsg.concat("null");
    return printMsg;
  }

  /**
   * Inserts a new value into the LinkedList at a specified index;
   * @param {*} index the point to change the value (starts at 0)
   * @param {*} value the value to be set in the place of index
   */
  insertAt(index, value) {
    let newNode = new Node(value);
    let node = this.list;

    while (index > 1) {
      index--;
      node = node.nextNode;

      if (node === null) {
        throw Error("Index is out of bounds");
      }
    }
    let tempNode = node.nextNode;
    newNode.nextNode = tempNode;
    node.nextNode = newNode;
  }
}
