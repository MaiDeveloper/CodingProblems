class Dictionary {
  constructor() {
    this.items = {};
  }

  set(key, value) {
    this.items[key] = value;
  }

  remove(key) {
    if (!this.has(key)) {
      return false;
    }

    delete this.items[key];
    return true;
  }

  has(key) {
    return this.items[key] !== undefined;
  }

  get(key) {
    return this.items[key];
  }

  clear() {
    this.items = {};
  }

  size() {
    return Object.keys(this.items).length;
  }

  keys() {
    return Object.keys(this.items);
  }

  values() {
    const values = [];

    for (const key of this.keys()) {
      values.push(this.get(key));
    }

    return values;
  }

  getItems() {
    return this.items;
  }
}

export default Dictionary;