import DoublyLinkedList from './doubly-linked-list';

export default class StackLinkedList {
  constructor() {
    this.items = new DoublyLinkedList();
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.items.isEmpty()) {
      return undefined;
    }

    return this.items.removeAt(this.items.size() - 1);
  }

  peek() {
    if (this.items.isEmpty()) {
      return undefined;
    }

    return this.items.getElementAt(this.items.size() - 1).value;
  }

  size() {
    return this.items.size();
  }

  isEmpty() {
    return this.items.isEmpty();
  }

  clear() {
    return this.items.clear();
  }
}