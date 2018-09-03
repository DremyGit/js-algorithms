import LinkedList from '../linked-list/LinkedList';

export default class Queue {
  constructor() {
    /** @var LinkedList */
    this.linkedList = new LinkedList();
  }

  /**
   * @param {*} value
   * @return {Queue}
   */
  enqueue(value) {
    this.linkedList.append(value);
  }

  /**
   * @return {*}
   */
  dequeue() {
    const deletedNode = this.linkedList.deleteHead();
    if (deletedNode === null) {
      return null;
    }
    return deletedNode.value;
  }

  /**
   * @return {*}
   */
  peek() {
    if (this.linkedList.head === null) {
      return null;
    }
    return this.linkedList.head.value;
  }

  isEmpty() {
    return this.linkedList.head === null;
  }

  /**
   * @return {string}
   */
  toString() {
    return this.linkedList.toString();
  }
}
