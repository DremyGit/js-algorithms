import LinkedListNode from '../LinkedListNode';

describe('LinkedListNode', () => {
  it('should create list node with value', () => {
    const node = new LinkedListNode(1);
    expect(node.value).toEqual(1);
    expect(node.next).toEqual(null);
    expect(node.toString()).toEqual('1');
  });
  it('should link nodes together', () => {
    const node2 = new LinkedListNode(2);
    const node1 = new LinkedListNode(1, node2);
    expect(node1.next).toEqual(node2);
    expect(node1.next.value).toEqual(2);
  });
});
