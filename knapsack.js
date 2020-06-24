/**
 * @typeof {object} Item
 * @param {number} weight
 * @param {number} value
 */

/**
 * Get the maximum value item indexes that can be carried by the knapsack
 * @param {Item[]} items
 * @param {number} capacity
 * @return {number[]}         An array of item indexes
 * @time complexity: O(mn) where m is the size of items, n is the capacity
 * @space complexity: O(mn) where m is the size of items, n is the capacity
 */
const knapsackMaximumItems = (items, capacity = 0) => {
  if (!Array.isArray(items) || capacity <= 0) {
    return [];
  }
  
  const numItems = items.length;
  const dp = new Array(numItems + 1).fill(null).map(() => new Array());

  for (let i = 0; i <= numItems; i++) {
    for (let weight = 0; weight <= capacity; weight++) {
      if (i === 0 || weight === 0) {
        dp[i][weight] = 0;
        continue;
      }

      const item = items[i - 1];
      const prevWeight = dp[i - 1][weight];

      if (item.weight <= weight) {
        const newWeight = item.weight + dp[i - 1][weight - item.weight];

        dp[i][weight] = Math.max(newWeight, prevWeight);
        continue;
      }

      dp[i][weight] = prevWeight;
    }
  }

  let itemIndex = numItems,
      weight = capacity,
      carryItem = [];
  
  while (itemIndex > 0 && weight > 0) {
    if (dp[itemIndex][weight] !== dp[itemIndex - 1][weight]) {
      carryItem.push(itemIndex - 1);
      weight -= dp[itemIndex - 1][weight];
    }

    itemIndex--;
  }

  return carryItem;
};

/**
 * Get the maximum value that can be carried by the knapsack
 * @param {Item[]} items
 * @param {number} capacity
 * @return {number}          Maximum value
 * @time complexity: O(mn) where m is the size of items, n is the capacity
 * @space complexity: O(mn) where m is the size of items, n is the capacity
 */
const knapsackMaximumValue = (items, capacity = 0) => {
  if (!Array.isArray(items) || capacity <= 0) {
    return [];
  }
  
  const numItems = items.length;
  const dp = new Array(numItems + 1).fill(null).map(() => new Array());

  for (let i = 0; i <= numItems; i++) {
    for (let weight = 0; weight <= capacity; weight++) {
      if (i === 0 || weight === 0) {
        dp[i][weight] = 0;
        continue;
      }

      const item = items[i - 1];
      const prevWeight = dp[i - 1][weight];

      if (item.weight <= weight) {
        const newWeight = item.value + dp[i - 1][weight - item.weight];

        dp[i][weight] = Math.max(newWeight, prevWeight);
        continue;
      }

      dp[i][weight] = prevWeight;
    }
  }

  let itemIndex = numItems,
      weight = capacity;
  
  while (itemIndex > 0 && weight > 0) {
    if (dp[itemIndex][weight] !== dp[itemIndex - 1][weight]) {
      weight -= dp[itemIndex - 1][weight];
    }

    itemIndex--;
  }

  return dp[numItems][capacity];
};

export {
  knapsackMaximumItems,
  knapsackMaximumValue
};