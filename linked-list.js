class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  append(data) {
    const node = new Node(data);

    if (this.head === null) {
      this.head = node;
      this.length++;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = node;

    this.length++;
  }

  removeAt(position) {
    if (position < 0 || position > this.length) {
      return null;
    }

    let current = this.head,
        previous,
        index = 0;
    
    if (position === 0) {
      this.head = current.next;
      this.length--;
      return this.head.data;
    }

    while (index < position) {
      previous = current;
      current = current.next;
      index++;
    }

    this.length--;
    previous.next = current.next;

    return current.data;
  }

  insert(position, data) {
    if (position < 0 || position > this.length + 1) {
      return false;
    }

    const node = new Node(data);
    let current = this.head,
        previous,
        index = 0;
    
    if (position === 0) {
      node.next = current;
      this.head = node;
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
    this.length++;

    return true;
  }

  indexOf(data) {
    let current = this.head,
        index = 0;
    
    while (current) {
      if (current.data === data) {
        return index;
      }
      current = current.next;
      index++;
    }

    return -1;
  }

  remove(data) {
    const index = this.indexOf(data);
    return this.removeAt(index);
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  getHead() {
    return this.head;
  }

  toString() {
    let current = this.head,
        string = [];
    
    while (current) {
      string.push(current.data);
      current = current.next;
    }

    return string.join(' -> ');
  }
}

export default LinkedList;

// const list = new LinkedList();

// list.append('1');
// list.append('2');
// list.append('3');
// list.append('4');
// list.append('5');
// list.append('6');
// list.append('7');
// list.append('8');
// list.append('9');
// list.append('10');

// console.log(list.toString());

// list.insert(2, '33');

// console.log(list.toString());

// list.removeAt(2);

// console.log(list.toString());
// console.log(list.indexOf('10'));

// list.remove('10');
// console.log(list.toString());