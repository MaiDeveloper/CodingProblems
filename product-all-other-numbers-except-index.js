/**
 * You have a list of integers, and for each index you want to find the product of every integer except the integer at that index.
 *
 * Write a function get_products_of_all_ints_except_at_index() that takes a list of integers and returns a list of the products.
 *
 * For example, given:
 *
 * [1, 7, 3, 4]
 *
 * your function would return:
 *
 * [84, 12, 28, 21]
 *
 * by calculating:
 *
 * [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]
 *
 * Here's the catch: You can't use division in your solution!
 */

function productAll(arr) {
  if (arr.length < 2) {
    throw Error('Required at least two numbers');
  }

  let ans = [];
  let products = 1;

  for (let i = 0, l = arr.length; i < l; i++) {
    ans[i] = products;
    products *= arr[i];
  }

  products = 1;

  for (let i = ans.length - 1; i >= 0; i--) {
    ans[i] *= products;
    products *= arr[i];
  }

  return ans;
}


console.log(productAll([1, 7, 3, 4]));




