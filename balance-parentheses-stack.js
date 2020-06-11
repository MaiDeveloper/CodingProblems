class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    return this.stack.pop();
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

const isBalanced = (parentheses) => {
  const stack = new Stack();
  const pairs = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (const single of parentheses) {
    if (pairs[single] !== undefined) {
      stack.push(pairs[single]);
    } else if (stack.isEmpty()) {
      return false;
    } else if (stack.pop() !== single) {
      return false;
    }
  }

  return stack.isEmpty();
};

console.log(isBalanced('{[]}'));
console.log(isBalanced('{[}}'));