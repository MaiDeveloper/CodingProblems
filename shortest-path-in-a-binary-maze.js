class Node {
  constructor(row, col, dist = 0, path = []) {
    this.row = row;
    this.col = col;
    this.dist = dist;
    this.path = path;
  }
}

class Maze {

  constructor() {
    this.dirs = [
      [0, -1], // right
      [0, 1],  // left
      [-1, 0], // up
      [1, 0],  // down
    ];
  }

  isValid(maze, row, col, visited) {
    return (row >= 0 && row < maze.length && col >= 0 && col < maze[0].length && maze[row][col] === 1 && !visited[row][col]);
  }

  bfs(maze, src, dest, paths = []) {
    if (maze[src.row][src.col] !== 1 || maze[dest.row][dest.col] !== 1) {
      return -1;
    }

    const visited = new Array(maze.length).fill(null).map(() => new Array(maze[0].length).fill(false));

    visited[src.row][src.col] = true;

    const q = [];

    q.push(new Node(src.row, src.col, 0));

    while (q.length) {
      const curr = q.shift();

      if (curr.row === dest.row && curr.col === dest.col) {
        return curr.path;
        //return curr.dist;
      }

      for (let i = 0; i < 4; i++) {
        let r = curr.row + this.dirs[i][0];
        let c = curr.col + this.dirs[i][1];

        if (this.isValid(maze, r, c, visited)) {
          visited[r][c] = true;
          const path = [...curr.path, [curr.row, curr.col]];
          q.push(new Node(r, c, curr.dist + 1, path));
        }
      }

    }
    return -1;
  }

  print(maze, src, dest, path) {
    const map = [...maze];

    for (let p of path) {
      map[p[0]][p[1]] = 4;
    }

    map[src.row][src.col] = 2;
    map[dest.row][dest.col] = 3;

    return map;
  }

}


const maze =
[
  [ 1, 0, 1, 1, 1, 1, 0, 1, 1, 1 ],
  [ 1, 0, 1, 0, 1, 1, 1, 0, 1, 1 ],
  [ 1, 1, 1, 0, 1, 1, 0, 1, 0, 1 ],
  [ 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ],
  [ 1, 1, 1, 0, 1, 1, 1, 0, 1, 0 ],
  [ 1, 0, 1, 1, 1, 1, 0, 1, 0, 0 ],
  [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
  [ 1, 0, 1, 1, 1, 1, 0, 1, 1, 1 ],
  [ 1, 1, 0, 0, 0, 0, 1, 0, 0, 1 ]
];


const solve = new Maze();
const src = new Node(0, 0);
const dest = new Node(3, 4);
const path = solve.bfs(maze, src, dest);

if (path.length > 0) {
  console.log(solve.print(maze, src, dest, path));
  // console.log("Shortest Path is " + path.length);
  // console.log(path);
} else {
  console.log("Shortest Path doesn\'t exist");
}

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
const src2 = new Node(6, 2);
const dest2 = new Node(1, 14);
const path2 = solve.bfs(maze2, src2, dest2);

if (path2.length > 0) {
  console.log(solve.print(maze2, src2, dest2, path2));
  // console.log("Shortest Path is " + path2.length);
//  console.log(path2);
} else {
  console.log("Shortest Path doesn\'t exist");
}


