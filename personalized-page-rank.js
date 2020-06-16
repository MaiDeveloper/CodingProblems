const users = {
  A: { neighbors: [ 'B', 'D' ] },
  B: { neighbors: [ 'A', 'C', 'E' ] },
  C: { neighbors: [ 'B', 'D', 'E' ] },
  D: { neighbors: [ 'A', 'C' ] },
  E: { neighbors: [ 'B', 'C' ] }
};

const personalizedPageRank = id => {

  const map = {};
  map[id] = 1;

  return helper(id, map, 3);
};

const helper = (id, map, count) => {
  if (count === 0) {
    
  }
};

const ressult = personalizedPageRank('A');

console.log(result);