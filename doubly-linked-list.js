class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const node = new Node(value);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
      this.length++;
      return;
    }

    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
    this.length++;
  }

  insert(position, value) {
    if (position < 0 || position > this.length) {
      return false;
    }

    let node = new Node(value),
        current = this.head,
        previous,
        index = 0;
    
    if (position === 0 && !this.head) {
      this.head = node;
      this.tail = node;
      this.length++;

      return true;
    }

    if (position === 0 && this.head) {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
      this.length++;

      return true;
    }

    if (position === this.length) {
      current = this.tail;
      current.next = node;
      node.prev = current;
      this.tail = node;

      this.length++;
      return true;
    }

    while (index < position) {
      previous = current;
      current = current.next;
      index++;
    }

    node.next = current;
    previous.next = node;
    current.prev = node;
    node.prev = previous;

    this.length++;
    return true;
  }

  removeAt(position) {
    if (position < 0 || position >= this.length) {
      return false;
    }

    let current = this.head,
        previous,
        index = 0;
    
    if (position === 0) {
      this.head = current.next;

      if (this.length === 1) {
        this.tail = null;
      } else {
        this.head.prev = null;
      }

      this.length--;
      return current.value;
    }

    if (position === this.length - 1) {
      current = this.tail;
      this.tail = current.prev;
      this.tail.next = null;

      this.length--;
      return current.value;
    }

    while (index < position) {
      previous = current;
      current = current.next;
      index++;
    }

    previous.next = current.next;
    current.next.prev = previous;
    
    this.length--;
    return current.value;
  }

  indexOf(value) {
    let current = this.head,
        index = 0;
    
    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.next;
      index++;
    }

    return -1;
  }

  remove(value) {
    const index = this.indexOf(value);
    return this.removeAt(index);
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  toString() {
    let current = this.head,
        list = [];
    
    while (current) {
      list.push(current.value);
      current = current.next;
    }
    
    return list.join(' -> ');
  }
}

const list = new DoublyLinkedList();

list.append('1');
list.append('2');
list.append('3');
list.append('4');
list.append('5');
list.append('6');
list.append('7');
list.append('8');
list.append('9');
list.append('10');

console.log(list.toString());

list.insert(2, '33');

console.log(list.toString());

list.removeAt(2);
console.log(list.toString());

console.log(list.indexOf('10'));

list.remove('10');
console.log(list.toString());