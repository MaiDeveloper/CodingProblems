/**
 * JavaScript Algorithms and Data Structures Projects: Cash Register
 *
 * Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
 *
 * cid is a 2D array listing available currency.
 *
 * The checkCashRegister() function should always return an object with a status key and a change key.
 *
 * Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
 *
 * Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
 *
 * Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
 */

function checkCashRegister(price, cash, cid) {
  const drawer = {};
  const money = [
    ['ONE HUNDRED', 100],
    ['TWENTY', 20],
    ['TEN', 10],
    ['FIVE', 5],
    ['ONE', 1],
    ['QUARTER', 0.25],
    ['DIME', 0.1],
    ['NICKEL', 0.5],
    ['PENNY', 0.01]
  ];

  let remain = cash - price;
  let ans = [];

  for (let i = 0; i < cid.length; i++) {
    drawer[cid[i][0]] = cid[i][1];
  }

  for (let i = 0; i < money.length && remain > 0; i++) {
    const key = money[i][0];
    const val = money[i][1];
    let change = 0;

    while (remain >= val && drawer[key] >= val) {
      remain = parseFloat((remain - val).toFixed(2));
      change = parseFloat((change + val).toFixed(2));
      drawer[key] = parseFloat((drawer[key] - val).toFixed(2));
    }

    if (change > 0) {
      ans.push([key, change]);
    }
  }

  if (remain > 0) {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: []
    };
  }

  let status = 'CLOSED';

  for (let k in drawer) {
    if (drawer[k] > 0) {
      status = 'OPEN';
    }
  }

  return {
    status: status,
    change: (status === 'OPEN' ? ans : cid)
  }
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));