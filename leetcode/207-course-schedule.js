/**
 * Course Schedule
 * 
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1.
 *
 * Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]
 * 
 * Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?
 * 
 *  
 * 
 * Example 1:
 * 
 * Input: numCourses = 2, prerequisites = [[1,0]]
 * Output: true
 * Explanation: There are a total of 2 courses to take. 
 *              To take course 1 you should have finished course 0. So it is possible.
 * Example 2:
 * 
 * Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
 * Output: false
 * Explanation: There are a total of 2 courses to take. 
 *              To take course 1 you should have finished course 0, and to take course 0 you should
 *              also have finished course 1. So it is impossible.
 *  
 * 
 * Constraints:
 * 
 * The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
 * You may assume that there are no duplicate edges in the input prerequisites.
 * 1 <= numCourses <= 10^5
 */


/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

const canFinish = (numCourses, prerequisites) => {
  
  const courses = {};
  
  for (let i = 0; i < prerequisites.length; i++) {
    const prerequisite = prerequisites[i];
    if (courses[prerequisite[0]] === undefined) {
      courses[prerequisite[0]] = [];
    }
    
    courses[prerequisite[0]].push(prerequisite[1]);
  }
  
  const visited = {};
  
  for (let i = 0; i < numCourses; i++) {
    if (!isValid(i, visited, courses)) {
      return false;
    }
  }
  
  return true;
}

const isValid = (course, visited, courses) => {
  if (visited[course]) {
    return false;
  }
  
  if (!courses[course]) {
    return true;
  }
  
  visited[course] = true;
  
  const requires = courses[course];
  
  for (let i = 0; i < requires.length; i++) {
    if (!isValid(requires[i], visited, courses)) {
      return false;
    }
  }
  
  visited[course] = false;
  
  return true;
};

