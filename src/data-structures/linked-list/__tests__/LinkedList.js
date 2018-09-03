import LinkedList from '../LinkedList';

describe('LinkedList', () => {
  it('should create empty linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.head).toEqual(null);
    expect(linkedList.tail).toEqual(null);
  });

  it('should append node to linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);

    expect(linkedList.toString()).toEqual('1');

    linkedList.append(2);
    expect(linkedList.toString()).toEqual('1,2');
  });

  it('should prepend node to linked list', () => {
    const linkedList = new LinkedList();

    linkedList.prepend(1);
    expect(linkedList.toString()).toEqual('1');

    linkedList.prepend(2);
    expect(linkedList.toString()).toEqual('2,1');
  });

  it('should delete node by value from lined list', () => {
    const linkedList = new LinkedList();

    expect(linkedList.delete(1)).toBeNull();

    linkedList.append(1);
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(3);
    linkedList.append(3);
    linkedList.append(4);

    expect(linkedList.head.toString()).toBe('1');
    expect(linkedList.tail.toString()).toBe('4');

    const deletedNode = linkedList.delete(3);
    expect(deletedNode.value).toBe(3);
    expect(linkedList.toString()).toBe('1,1,2,4');

    linkedList.delete(1);
    expect(linkedList.head.toString()).toBe('2');
    expect(linkedList.toString()).toBe('2,4');

    linkedList.delete(4);
    expect(linkedList.tail.toString()).toBe('2');
    expect(linkedList.toString()).toBe('2');

    linkedList.delete(2);
    expect(linkedList.toString()).toBe('');
  });

  it('should delete linked list tail', () => {
    const linkedList = new LinkedList();

    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);

    const deletedNode1 = linkedList.deleteTail();
    expect(deletedNode1.toString()).toBe('3');
    expect(linkedList.toString()).toBe('1,2');
    expect(linkedList.tail.toString()).toBe('2');

    const deletedNode2 = linkedList.deleteTail();
    expect(deletedNode2.toString()).toBe('2');
    expect(linkedList.toString()).toBe('1');
    expect(linkedList.tail.toString()).toBe('1');

    const deletedNode3 = linkedList.deleteTail();
    expect(deletedNode3.toString()).toBe('1');
    expect(linkedList.toString()).toBe('');
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();

    const deletedNode4 = linkedList.deleteTail();
    expect(deletedNode4).toBeNull();
    expect(linkedList.toString()).toBe('');
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
  });

  it('should delete linked list head', () => {
    const linkedList = new LinkedList();

    expect(linkedList.deleteHead()).toBeNull();

    linkedList.append(1);
    linkedList.append(2);

    const deletedNode1 = linkedList.deleteHead();
    expect(deletedNode1.toString()).toBe('1');
    expect(linkedList.toString()).toBe('2');
    expect(linkedList.head.toString()).toBe('2');
    expect(linkedList.tail.toString()).toBe('2');

    const deletedNode2 = linkedList.deleteHead();
    expect(deletedNode2.toString()).toBe('2');
    expect(linkedList.toString()).toBe('');
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
  });

  it('should find node by callback', () => {
    const linkedList = new LinkedList();

    expect(linkedList.find(({ key }) => key === 'test1')).toBeNull();

    linkedList
      .append({ key: 'test1', value: 1 })
      .append({ key: 'test2', value: 2 })
      .append({ key: 'test3', value: 3 });

    const node = linkedList.find(({ key }) => key === 'test2');
    expect(node).toBeDefined();
    expect(node.value.value).toBe(2);
    expect(node.value.key).toBe('test2');

    expect(linkedList.find(({ key }) => key === 'test4')).toBeNull();
  });

  it('should create linked list from array', () => {
    const linkedList = new LinkedList();
    linkedList.fromArray([1, 1, 2, 3, 3, 3, 4]);
    expect(linkedList.toString()).toEqual('1,1,2,3,3,3,4');
  });
});
