/**
 * Algorithms: Inventory Update
 *
 * Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.
 */

/**
 * Inventory Update
 *
 * @author Mike Mai
 * @param {Array[][]} arr1 current inventory
 * @param {Array[][]} arr2 new inventory
 */
function updateInventory(arr1, arr2) {
    const cache = {};

    for (let item of arr1) {
      cache[item[1]] = item;
    }

    for (let item of arr2) {
      if (cache[item[1]] === undefined) {
        arr1.push(item);
        cache[item[1]] = item;
      } else {
        cache[item[1]][0] += item[0];
      }
    }

    return arr1.sort((a, b) => a[1].localeCompare(b[1]));
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv); // [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]