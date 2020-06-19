import LinkedList, { Node } from './linked-list';

export default class SortedLinkedList extends LinkedList {
  constructor(comparator) {
    super(comparator);
  }

  push(value) {
    return this.insert(value);
  }

  insert(value) {
    if (this.isEmpty()) {
      return super.insert(value, 0);
    }

    const index = this._getInsertIndex(value);

    return super.insert(value, index);
  }

  _getInsertIndex(value) {
    let current = this.head,
        index = 0;

    while (index < this.size()) {
      if (this.comparator(value, current.value) === -1) {
        return index;
      }

      index++;
    }

    return index;
  }
}