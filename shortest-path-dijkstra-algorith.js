const graph = {
  start: { A: 5, B: 2 },
  A: { C: 4, D: 2, start: 5, B: 8, },
  B: { A: 8, D: 7, start: 2, },
  C: { D: 6, finish: 3, A: 4 },
  D: { finish: 1, C: 6, A: 2, B: 7 },
  finish: { C: 3, D: 1 },
};

const getLowestCostNode = (costs, visited) => {
  let lowest = null;

  for (const key in costs) {
    if (!visited[key] && (lowest === null || costs[key] < costs[lowest])) {
      lowest = key;
    }
  }

  return lowest;
};

const shortestPath = (graph, start, finish) => {
  
  // START OR FINISH DOES NOT EXISTS
  if (graph[start] === undefined || graph[finish] === undefined) {
    return;
  }

  const costs = {
    [finish]: Infinity,
    ...graph[start],
  };

  const parents = {
    [finish]: null,
  };

  for (const child in graph[start]) {
    parents[child] = start;
  }

  const visited = { [start]: true, [finish]: true };

  let node = getLowestCostNode(costs, visited);

  while (node !== null) {
    let currentCost = costs[node];
    const children = graph[node];

    for (const key in children) {
      let newCost = currentCost + children[key];
      if (costs[key] === undefined || newCost < costs[key]) {
        costs[key] = newCost;
        parents[key] = node;
      }
    }

    visited[node] = true;
    node = getLowestCostNode(costs, visited);
  }

  const path = [];
  let child = finish;

  while (child) {
    path.unshift(child);
    
    if (child === start) {
      break;
    }
    child = parents[child];
  }

  return {
    distance: costs[finish],
    path,
  };
};


console.log(shortestPath(graph, 'start', 'finish'));
// console.log(dijkstra(graph, 'A', 'D'));