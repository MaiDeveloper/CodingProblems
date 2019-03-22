class RatMaze {

  isSafe(maze, x, y, visited) {
    return (x >= 0 && x < maze.length && y >= 0 && y < maze[0].length && maze[x][y] === 1 && visited[x+','+y] === undefined);
  }

  printPath(maze, startX, startY, endX, endY, paths) {
    const m = [...maze];
    for (let i = 0; i < paths.length; i++) {
      const p = paths[i];
      m[p[0]][p[1]] = 4;
    }
    m[startX][startY] = 2;
    m[endX][endY] = 3;
    console.log(m);
  }

  shortestPath(maze, startX, startY, endX, endY) {
    if (startX === endX && startY === endY) {
      return [];
    }

    const dirs = [
      [-1, 0],  // Up
      [1, 0],   // Down
      [0, -1],  // Left
      [0, 1],   // Right
    ];
    const visited = {};
    const queue = [{x: startX, y: startY, path: []}];

    visited[startX+','+startY] = true;

    while (queue.length) {
      const curr = queue.shift();

      if (curr.x === endX && curr.y === endY) {
        return curr.path;
      }

      for (let i = 0; i < dirs.length; i++) {
        const x = curr.x + dirs[i][0];
        const y = curr.y + dirs[i][1];

        if (this.isSafe(maze, x, y, visited)) {
          const path = [...curr.path, [curr.x, curr.y]];

          visited[x+','+y] = true;
          queue.push({ x: x, y: y, path: path});
        }
      }

    }

    return [];
  }

  solve(maze, startX, startY, endX, endY) {
    const solution = new Array(maze.length).fill(null).map(() => new Array(maze[0].length).fill(0));
    const visited = {};

    if (this.solveUtil(maze, startX, startY, endX, endY, solution, visited)) {
      // this.printSolution(solution);
      console.log(solution);
      return true;
    }
    console.log('Solution doesn\'t exist');
    return false;
  }

  solveUtil(maze, x, y, endX, endY, solution, visited) {
    if (x === endX && y === endY) {
      solution[x][y] = 1;
      return true;
    }

    if (!this.isSafe(maze, x, y, visited)) {
      return false;
    }

    solution[x][y] = 1;
    visited[x+','+y] = true;
    // Move up
    if (this.solveUtil(maze, x - 1, y, endX, endY, solution, visited)) {
      return true;
    }

    // Move down
    if (this.solveUtil(maze, x + 1, y, endX, endY, solution, visited)) {
      return true;
    }

    // // Move left
    if (this.solveUtil(maze, x, y - 1, endX, endY, solution, visited)) {
      return true;
    }

    // // Move right
    if (this.solveUtil(maze, x, y + 1, endX, endY, solution, visited)) {
      return true;
    }

    solution[x][y] = 0;

    return false;
  }

  printSolution(solution) {
    for (let i = 0; i < solution.length; i++) {
      console.log(solution[i].map((e) => e === 0 ? ' ' : 'E'));
    }
  }

}


const maze = [
  [1,1,0,0,0,0,0,0,0,0],
  [1,0,1,1,1,1,1,1,1,0],
  [1,1,1,0,0,0,0,0,1,1],
  [1,1,0,0,1,1,1,1,1,0],
  [1,0,1,1,1,0,0,0,1,1],
  [1,0,1,0,0,1,1,1,0,1],
  [1,0,1,0,0,1,0,1,0,0],
  [1,0,1,1,1,1,0,1,1,1]
]

const ratMaze = new RatMaze();

console.time('solve');
ratMaze.solve(maze, 0, 0, 7, 9);
console.timeEnd('solve');
console.log('');
ratMaze.solve(maze, 5, 5, 7, 0);
console.log('');

console.time('path');
const paths = ratMaze.shortestPath(maze, 0, 0, 7, 9);
console.timeEnd('path');
ratMaze.printPath(maze, 0, 0, 7, 9, paths);


console.log('------------');

const maze2 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0],
  [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
const paths2 = ratMaze.shortestPath(maze2, 6, 2, 1, 14);
ratMaze.printPath(maze2, 6, 2, 1, 14, paths2);