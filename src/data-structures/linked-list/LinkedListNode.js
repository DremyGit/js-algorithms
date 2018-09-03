export default class LinkedListNode {
  constructor(value, next = null) {
    /** @var value */
    this.value = value;

    /** @var next */
    this.next = next;
  }

  /**
   * @return {string}
   */
  toString() {
    return `${this.value}`;
  }
}
