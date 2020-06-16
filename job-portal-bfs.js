const graph = {
  1: {
    id: 1,
    name: 'Adam',
    company: 'Facebook',
    friends: [2, 3, 4, 5, 7]
  },
  2: {
    id: 2,
    name: 'John',
    company: 'Google',
    friends: [1, 6, 8]
  },
  3: {
    id: 3,
    name: 'Bill',
    company: 'Twitter',
    friends: [1, 4, 5, 8]
  }, 
  4: {
    id: 4,
    name: 'Jose',
    company: 'Apple',
    friends: [1, 3, 6, 8]
  }, 
  5: {
    id: 5,
    name: 'Jack',
    company: 'Samsung',
    friends: [1, 3, 7]
  }, 
  6: {
    id: 6,
    name: 'Rita',
    company: 'Toyota',
    friends: [2, 4, 7, 8]
  }, 
  7: {
    id: 7,
    name: 'Smith',
    company: 'Matlab',
    friends: [1, 5, 6, 8]
  }, 
  8: {
    id: 8,
    name: 'Jane',
    company: 'Ford',
    friends: [2, 3, 4, 6, 7]
  }
};

const shortestPath = (id, targetCompany) => {
  const sourceUser = graph[id];

  if (sourceUser.company === targetCompany) {
    return;
  }

  let shortestPath;
  let tail = 0;
  const visited = {};
  const prevPath = {};
  const queue = [ sourceUser ];

  visited[sourceUser.id] = true;

  while (!shortestPath && tail < queue.length) {
    const user = queue[tail];
    const friendIds = graph[user.id];

    for (let i = 0; i < friendIds.length; i++) {
      const id = friendIds[i].id;

      if (shortestPath) {
        continue;
      }

      const friend = graph[id];

      if (visited[id]) {
        continue;
      }

      visited[id] = true;

      if (friend.company === targetCompany) {
        const path = [ friend ];

        while (user.id !== sourceUser.id) {
          path.unshift(user);

          user = prevPath[user.id];
        }

        path.unshift(user);
        shortestPath = path.map(user => user.name).join(' -> ');
      }

      if (shortestPath) {
        continue;
      }
  
      prevPath[friend.id] = user;
  
      queue.push(friend);
    }

    tail++;
  }

  return shortestPath || 'No Path';
};


const shortestPath2 = (sourceId, targetCompany) => {
  const sourceUser = graph[sourceId];

  if (sourceUser.company === targetCompany) {
    return;
  }

  const queue = [
    { user: sourceUser, path: [sourceUser] }
  ];
  
  const visited = {};
  visited[sourceUser.id] = true;

  while (queue.length) {
    const { user, path } = queue.shift();

    const friends = user.friends;

    for (let i = 0; i < friends.length; i++) {
      const friend = graph[friends[i]];

      if (visited[friend.id]) {
        continue;
      }

      if (friend.company === targetCompany) {
        return [
          ...path,
          friend,
        ];
      }

      visited[friend.id] = true;
      queue.push({
        user: friend,
        path: [
          ...path,
          friend,
        ]
      });
    }
  }

};

const shortestPath3 = (id, targetCompany) => {
  const sourceUser = graph[id];

  if (sourceUser.company === targetCompany) {
    return;
  }

  const visited = { id: true };
  const prevPath = {};
  const queue = [ sourceUser ];

  while (queue.length) {
    const current = queue.shift();

    const friends = current.friends;

    for (let i = 0; i < friends.length; i++) {
      const friend = graph[friends[i]];

      if (visited[friend.id]) {
        continue;
      }

      if (friend.company === targetCompany) {
        const path = [friend];
        let user = current;
        
        while (user.id !== sourceUser.id) {
          path.unshift(user);
          user = prevPath[user.id];
        }

        path.unshift(user);
        return path;
      }

      prevPath[friend.id] = current;
      queue.push(friend);
    }

  }
};

const result = shortestPath3(4, 'Matlab');
console.log(result);

if (result) {
  const path = result.map(item => item.name).join(' -> ');
  console.log(path);
} else {
  console.log('no path');
}