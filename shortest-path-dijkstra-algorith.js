const NAME = {
  SOISSONS_LANDING: 'Soissons Landing',
  CASTLE_WILLIAMS: 'Castle Williams',
  KAYAK_DOCK: 'Kayak Dock',
  COLONELS_ROW: 'Colonels Row',
  NOLAN_PARK: 'Nolan Park',
  BIKE_RENTALS: 'Bike Rentals',
  TEACHING_GARDEN: 'Teaching Garden',
  YANKEE_PIER: 'Yankee Pier',
  THE_HILLS: 'The Hills',
  PICNIC_POINT: 'Picnic Point'
};

const graph = {
  [NAME.SOISSONS_LANDING]: {
    [NAME.CASTLE_WILLIAMS]: 1376,
    [NAME.COLONELS_ROW]: 1513,
    [NAME.NOLAN_PARK]: 1200,
    [NAME.KAYAK_DOCK]: 1063,  
  },
  [NAME.CASTLE_WILLIAMS]: {
    [NAME.SOISSONS_LANDING]: 1376,
    [NAME.COLONELS_ROW]: 1143,
  },
  [NAME.COLONELS_ROW]: {
    [NAME.SOISSONS_LANDING]: 1513,
    [NAME.BIKE_RENTALS]: 1176,
    [NAME.CASTLE_WILLIAMS]: 1143,
    [NAME.NOLAN_PARK]: 1700,
  },
  [NAME.NOLAN_PARK]: {
    [NAME.SOISSONS_LANDING]: 1200,
    [NAME.COLONELS_ROW]: 1700,
    [NAME.KAYAK_DOCK]: 820,
    [NAME.YANKEE_PIER]: 1676,
  },
  [NAME.KAYAK_DOCK]: {
    [NAME.SOISSONS_LANDING]: 1063,
    [NAME.NOLAN_PARK]: 820,
  },
  [NAME.BIKE_RENTALS]: {
    [NAME.COLONELS_ROW]: 1176,
    [NAME.YANKEE_PIER]: 652,
    [NAME.TEACHING_GARDEN]: 1117,
  },
  [NAME.YANKEE_PIER]: {
    [NAME.BIKE_RENTALS]: 652,
    [NAME.NOLAN_PARK]: 1676,
    [NAME.TEACHING_GARDEN]: 1049,
    [NAME.PICNIC_POINT]: 2862,
  },
  [NAME.TEACHING_GARDEN]: {
    [NAME.BIKE_RENTALS]: 1117,
    [NAME.YANKEE_PIER]: 1049,
    [NAME.THE_HILLS]: 1053,
    [NAME.PICNIC_POINT]: 1796,
  },
  [NAME.THE_HILLS]: {
    [NAME.TEACHING_GARDEN]: 1053,
    [NAME.PICNIC_POINT]: 1243,
  },
  [NAME.PICNIC_POINT]: {
    [NAME.THE_HILLS]: 1243,
    [NAME.TEACHING_GARDEN]: 1796,
    [NAME.YANKEE_PIER]: 2862,
  },
};

/**
 * Get the minimum distance of the given locations
 * 
 * @param {object} locations  // Ex. { A: 2, B: 3, C: 4}
 * @param {object} visited    // Ex. { B: true }
 * @param {string} the name of the location
 */
const getMinimumDistanceLocation = (locations, visited) => {
  let minimum = null;

  for (const name in locations) {
    if (!visited[name] && (minimum === null || locations[name] < locations[minimum])) {
      minimum = name;
    }
  }

  return minimum;
};


/**
 * @typeof {object} ShortestPathResult
 * @param {number}    distance
 * @param {string[]}  paths
 */

/**
 * Get the shortest path from start location to finish location
 * 
 * @param {object} graph 
 * @param {string} start 
 * @param {string} finish 
 * 
 * @return {ShortestPathResult}
 */
const shortestPath = (graph, start, finish) => {
  
  // RETURN UNDEFINED
  // IF START OR FINISH LOCATION DOES NOT EXISTS
  if (graph[start] === undefined || graph[finish] === undefined) {
    return;
  }

  // KEEP TRACK OF MINIMUM DISTANCE FOR EACH POSSIBLE PATH
  const distances = {
    [finish]: Infinity,
    ...graph[start],
  };

  // KEEP REFERENCE OF
  // CURRENT LOCATION TO NEXT LOCATION
  // NEXT LOCATION TO PREVIOUS LOCATION
  // EXAMPLE: PARENT <-> CHILD
  const parents = {
    [finish]: null,
  };

  // CREATE A REFERENCE FOR THE START LOCATION AND NEXT LOCATIONS
  for (const child in graph[start]) {
    parents[child] = start;
  }

  // KEEP A LIST OF LOCATIONS THAT HAS BEEN PROCESSED 
  // WE SKIP START AND FINISH LOCATION
  const visited = { [start]: true, [finish]: true };

  // GET THE UNVISITED MINIMUM DISTANCE LOCATION
  let node = getMinimumDistanceLocation(distances, visited);

  while (node !== null) {
    // GET THE CURRENT DISTANCE
    let currentDistance = distances[node];

    // GET ITS ADJACENT LOCATIONS
    const locations = graph[node];

    for (const name in locations) {
      // TOTAL DISTANCE = CURRENT DISTANCE + NEXT LOCATION DISTANCE
      let totalDistance = currentDistance + locations[name];


      if (name !== start && (distances[name] === undefined || totalDistance < distances[name])) {
        // KEEP THE SHORTEST DISTANCE
        distances[name] = totalDistance;
        parents[name] = node;
      }
    }

    // SET THIS LOCATION AS VISITED
    visited[node] = true;

    // GET THE NEXT UNVISITED MINIMUM DISTANCEE PATH
    node = getMinimumDistanceLocation(distances, visited);
  }

  // HOLD SHORTEST PATH'S LOCATIONS
  const paths = [];
  // RETRIEVE THE PATH IN REVERSE ORDER
  let previousNode = finish;

  // BACK TRACE TO THE START LOCATION
  while (previousNode) {
    paths.unshift(previousNode);
    previousNode = parents[previousNode];
  }

  // RETURN THE DISTANCE AND THE SHORTEST PATH
  return {
    distance: distances[finish] || 0,
    paths,
  };
};


// console.log(shortestPath(graph, NAME.SOISSONS_LANDING, NAME.PICNIC_POINT));
// console.log(dijkstra(graph, 'A', 'D'));

console.log('1. What is the shortest path to get to Bike Rentals from Soissons Landing?');
console.log(shortestPath(graph, NAME.SOISSONS_LANDING, NAME.BIKE_RENTALS));

console.log('2. After I rent a bike, I want to ride to Kayak Dock. What is the fastest path from Bike Rentals to Kayak Docke?');
console.log(shortestPath(graph, NAME.BIKE_RENTALS, NAME.KAYAK_DOCK));

console.log('3. After a fun ride, I need to go to Picnic Point where I can have something to eat. What is the shortest path from Kayak Dock to Picnic Point?');
console.log(shortestPath(graph, NAME.KAYAK_DOCK, NAME.PICNIC_POINT));

console.log('4. After having a picnic, I realize I need to return the bike as soon as possible, otherwise I have to pay for another hour (approximately $48). What is the shortest path from Picnic Point to Bike Rentals?');
console.log(shortestPath(graph, NAME.PICNIC_POINT, NAME.BIKE_RENTALS));
