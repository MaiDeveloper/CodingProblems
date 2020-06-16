const numberToBinary = num => {
  const stack = new Stack();
  let remainder = 0;
  let binaryString = '';

  while (num > 0) {
    remainder = num % 2;
    num = Math.floor(num / 2);
    stack.push(remainder);
  }

  while (!stack.isEmpty()) {
    binaryString += stack.pop();
  }

  return binaryString;
};


class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

export default numberToBinary;