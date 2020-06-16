import Queue from './queue';
import Dictionary from './dictionary';

class Graph {
  constructor() {
    this.vertices = [];
    this.adjList = new Dictionary();
  }

  addVertex(v) {
    this.vertices.push(v);
    this.adjList.set(v, []);
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
  }

  bfs(v, callback) {
    const visited = {};
    const queue = new Queue();
    queue.enqueue(v);

    while (!queue.isEmpty()) {
      const u = queue.dequeue(),
            neighbors = this.adjList.get(u);
      
      visited[u] = true;

      for (let i = 0; i < neighbors.length; i++) {
        const w = neighbors[i];

        if (!visited[w]) {
          visited[w] = true;
          queue.enqueue(w);
        }
      }

      if (callback) {
        callback(u);
      }
    }
  }

  BFS(v) {
    const visited = {},
          queue = new Queue(),
          d = [],
          pred = [];

    queue.enqueue(v);

    for (let i = 0; i < this.vertices.length; i++) {
      d[this.vertices[i]] = 0;
      pred[this.vertices[i]] = null;
    }

    while (!queue.isEmpty()) {
      const u = queue.dequeue(),
            neighbors = this.adjList.get(u);
      
      visited[u] = true;

      for (let i = 0; i < neighbors.length; i++) {
        const w = neighbors[i];

        if (!visited[w]) {
          visited[w] = true;
          d[w] = d[u] + 1;
          pred[w] = u;
          queue.enqueue(w);
        }
      }
    }

    return {
      distances: d,
      predecessors: pred,
    };
  }

  toString() {
    let str = '';

    for (let i = 0; i < this.vertices.length; i++) {
      str += this.vertices[i] + ' -> ';

      const neighbors = this.adjList.get(this.vertices[i]);

      for (let j = 0; j < neighbors.length; j++) {
        str += neighbors[j] + ' ';
      }

      str += '\n';
    }

    return str;
  }
}

var graph = new Graph();
var myVertices = ['A','B','C','D','E','F','G','H','I']; //{7}
for (var i=0; i<myVertices.length; i++){ //{8}
    graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B'); //{9}
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

console.log(graph.toString());

graph.bfs(myVertices[3], value => {
  console.log('Visited vertex: ' + value);
});

const shortestPathA = graph.BFS(myVertices[0]);
console.log(shortestPathA);