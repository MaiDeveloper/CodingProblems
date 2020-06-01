const graph = {
  start: { A: 5, B: 2 },
  A: { C: 4, D: 2, start: 5, B: 8, },
  B: { A: 8, D: 7, start: 2, },
  C: { D: 6, finish: 3, A: 4 },
  D: { finish: 1, C: 6, A: 2, B: 7 },
  finish: { C: 3, D: 1 },
};

// const graph = {
//   start: { A: 5, B: 2 },
//   A: { B: 1, finish: 2 },
//   B: { A: 1, finish: 8 },
//   finish: {},
// };

// const graph = {
//   A: { B: 5, C: 2 },
//   B: { C: 1, D: 4, A: 5 },
//   C: { B: 1, D: 6, A: 2},
//   D: { B: 4, C: 6}
// };

const lowestCostNode = (costs, processed) => {
  let lowest = null;

  for (let key in costs) {
    if (processed.includes(key)) {
      continue;
    }

    if (lowest === null || costs[key] < costs[lowest]) {
      lowest = key;
    }
  }

  return lowest;
};

const dijkstra = (graph, start, end) => {
  const costs = {
    finish: Infinity,
    ...graph[start],
  };

  const parents = {
    [end]: null,
  };

  for (let child in graph[start]) {
    parents[child] = start;
  }

  const processed = [];

  let node = lowestCostNode(costs, processed);

  while (node) {
    let cost = costs[node];

    let children = graph[node];

    for (let n in children) {
      let newCost = cost + children[n];

      if (!costs[n] || newCost < costs[n]) {
        costs[n] = newCost;
        parents[n] = node;
      }
    }

    processed.push(node);

    node = lowestCostNode(costs, processed);
  }

  let optimalPath = [end];

  let parent = parents[end];

  while (parent) {
    optimalPath.unshift(parent);
  
    if (parent === start) {
      break;
    }

    parent = parents[parent];
  }

  const results = {
    distance: costs[end],
    path: optimalPath,
  };

  return results;
};

console.log(dijkstra(graph, 'start', 'finish'));
// console.log(dijkstra(graph, 'A', 'D'));