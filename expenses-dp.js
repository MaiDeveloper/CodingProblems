const expenses = [
  {
    type: 'rent',
    cost: 5,
  },
  {
    type: 'food',
    cost: 3,
  },
  {
    type: 'entertainment',
    cost: 2,
  },
  {
    type: 'car and gas',
    cost: 2,
  },
  {
    type: 'ski-trip',
    cost: 5,
  },
];
const total = 10;

const Planner = (expenses, sum) => {

  const planner = new Array(expenses.length)
    .fill(null)
    .map(() => 
      new Array(total)
      .fill(null)
      .map((e, i) => i === 0)
    );

  const outcomes = [];

  if (expenses[0].cost <= sum) {
    planner[0][expenses[0].cost] = true;
  }

  for (let i = 1; i < expenses.length; i++) {
    for (let j = 1; j <= sum; j++) {
      if (expenses[i].cost <= j) {
        planner[i][j] = planner[i - 1][j] || planner[i-1][j - expenses[i].cost];
      } else {
        planner[i][j] = planner[i - 1][j];
      }
    }
  }

  if (!planner[expenses.length - 1][sum]) {
    return [];
  }

  return planner;
}

const result = Planner(expenses, total);

console.log(result);