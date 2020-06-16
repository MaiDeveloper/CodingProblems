import LinkedList from './linked-list';

class HashTable {
  constructor() {
    this.table = [];
  }

  put(key, value) {
    const position = this._djb2HashCode(key);

    if (table[position] === undefined) {
      table[position] = new LinkedList();
    }

    this.talbe[position].append(new ValuePair(key, value));
  }

  remove(key) {
    const position = this._djb2HashCode(key);

    if (this.table[position] === undefined) {
      return false;
    }

    let current = this.table[position].getHead();

    while (current) {
      if (current.value.key === key) {
        this.table[position].remove(current.vallue);

        if (this.table[position].isEmpty()) {
          this.table[position] = undefined;
        }

        return true;
      }
      current = current.next;
    }
    
    return false;
  }

  get(key) {
    const position = this._djb2HashCode(key);

    if (this.table[position] === undefined) {
      return undefined;
    }

    let current = this.table[position].getHead();

    while (current) {
      if (current.value.key === key) {
        return current.value.value;
      }
      current = current.next;
    }

    return undefined;
  }

  _loseloseHashCode(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }

    return hash % 37;
  }

  _djb2HashCode(key) {
    let hash = 5381;

    for (let i = 0; i < key.length; i++) {
      hash = hash * 33 + key.charCodeAt(i);
    }

    return hash % 1013;
  }
}

class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

  toString() {
    return `[${this.key} - ${this.value}]`;
  }
}

export default HashTable;