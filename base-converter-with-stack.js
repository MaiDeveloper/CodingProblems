import Stack from './stack-object-weakmap';

const baseConverter = (num, base = 2) => {
  const stack = new Stack();
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let binaryString = '';

  if (base < 2 || base > 36) {
    return '';
  }

  while (num > 0) {
    stack.push(Math.floor(num % base));
    num = Math.floor(num / base);
  }

  while (!stack.isEmpty()) {
    binaryString += digits[stack.pop()];
  }

  return binaryString;
};

export default baseConverter;