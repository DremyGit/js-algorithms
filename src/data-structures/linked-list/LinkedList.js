import LinkedListNode from './LinkedListNode';

export default class LinkedList {
  constructor() {
    /** @var LinkedListNode */
    this.head = null;

    /** @var LinkedListNode */
    this.tail = null;
  }

  /**
   * @param {*} value
   * @return {LinkedList}
   */
  append(value) {
    const newNode = new LinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  /**
   * @param {*} value
   * @return {LinkedList}
   */
  prepend(value) {
    const newNode = new LinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    newNode.next = this.head;
    this.head = newNode;
    return this;
  }

  /**
   * @param {*} value
   * @return {LinkedListNode}
   */
  delete(value) {
    if (!this.head) {
      return null;
    }

    let deletedNode = null;

    // Check the head of list
    while (this.head && this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    if (currentNode !== null) {
      while (currentNode.next !== null) {
        // Check the next node
        if (currentNode.next.value === value) {
          deletedNode = currentNode.next;
          // Link the next next node to current
          currentNode.next = deletedNode.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    // Check the tail node
    if (this.tail.value === value) {
      this.tail = currentNode;
    }

    return deletedNode;
  }

  /**
   * @return {LinkedListNode}
   */
  deleteTail() {
    const deletedNode = this.tail;

    // If the length of linked list node is 0 or 1
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;

      return deletedNode;
    }

    let currentNode = this.head;
    while (currentNode.next !== null) {
      // If next node is the tail, remove it
      if (currentNode.next.next === null) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }

    // Reset the tail node
    this.tail = currentNode;

    return deletedNode;
  }

  /**
   * @return {LinkedListNode}
   */
  deleteHead() {
    const deletedHead = this.head;

    // If the length of linked list node is 0 or 1
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    return deletedHead;
  }

  /**
   * @param {{(node: LinkedListNode) => boolean}} callback
   * @return {LinkedListNode}
   */
  find(callback) {
    if (this.head === null) {
      return null;
    }

    let currentNode = this.head;
    while (currentNode.next !== null) {
      // Find by custom function
      if (callback(currentNode.value)) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  /**
   * @param {*[]} array
   * @return {LinkedList}
   */
  fromArray(array) {
    array.forEach(value => this.append(value));
    return this;
  }

  /**
   * @return {LinkedListNode[]}
   */
  toArray() {
    const nodes = [];

    let currentNode = this.head;
    while (currentNode !== null) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  /**
   * @return {string}
   */
  toString() {
    return this.toArray().join(',');
  }
}
