class Set {
  constructor() {
    this.items = {};
  }

  add(value) {
    if (this.has(value)) {
      return false;
    }

    this.items[value] = null;
    return true;
  }

  has(value) {
    return this.items[value] !== undefined;
  }

  remove(value) {
    if (!this.has(value)) {
      return false;
    }

    delete this.items[value];
    return true;
  }

  clear() {
    this.items = {};
  }

  size() {
    return this.values().length;
  }

  values() {
    return Object.keys(this.items);
  }

  union(otherSet) {
    const newSet = new Set();

    let values = this.values();

    for (const val of values) {
      newSet.add(val);
    }

    values = otherSet.values();

    for (const val of values) {
      newSet.add(val);
    }

    return newSet;
  }

  intersection(otherSet) {
    const newSet = new Set();

    const values = this.values();

    for (const val of values) {
      if (otherSet.has(val)) {
        newSet.add(val);
      }
    }

    return newSet;
  }

  difference(otherSet) {
    const newSet = new Set();

    const values = this.values();

    for (const val of values) {
      if (!otherSet.has(val)) {
        newSet.add(val);
      }
    }

    return newSet();
  }

  subset(otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    }

    const values = this.values();

    for (const val of values) {
      if (!otherSet.has(val)) {
        return false;
      }
    }

    return true;
  }
}

export default Set;

const set = new Set();

set.add(1);

console.log(set.values());
console.log(set.has(1));
console.log(set.size());

set.add(2);

console.log(set.values());
console.log(set.has(2));
console.log(set.size());

set.remove(1);

console.log(set.values());

set.remove(2);
console.log(set.values());

const set1 = new Set();
set1.add('1');
set1.add('2');

const set2 = new Set();
set2.add('3');
set2.add('4');

const unionSet = set1.union(set2);

console.log(unionSet.values());

const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

const setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);

const intersection = setA.intersection(setB);
console.log(intersection.values());