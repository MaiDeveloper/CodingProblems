/**
 * 
 * Meeting Rooms II
 * 
 * Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.
 * 
 * Example 1:
 * 
 * Input: [[0, 30],[5, 10],[15, 20]]
 * Output: 2
 * Example 2:
 * 
 * Input: [[7,10],[2,4]]
 * Output: 1
 * NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.
 */

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number}
 */
const minMeetingRooms1 = intervals => {
    
  if (intervals.length === 0) {
    return 0;
  }
  
  intervals.sort((a, b) => a[0] - b[0]);
  
  const rooms = [intervals[0][1]];
  
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= rooms[0]) {
      rooms.shift();
    }
    
    rooms.unshift(intervals[i][1]);
    rooms.sort((a, b) => a - b);
  }
  
  return rooms.length;
};

const minMeetingRooms2 = intervals => {
  if (intervals.length === 0) {
    return 0;
  }
  
  const start = [];
  const end = [];
  
  for (let i = 0; i < intervals.length; i++) {
    start[i] = intervals[i][0];
    end[i] = intervals[i][1];
  }
  
  start.sort((a, b) => a - b);
  end.sort((a, b) => a - b);
  
  let startPointer = 0;
  let endPointer = 0;
  let usedRooms = 0;
  
  while (startPointer < intervals.length) {
    if (start[startPointer] >= end[endPointer]) {
      usedRooms--;
      endPointer++;
    }
    
    usedRooms++;
    startPointer++;
  }
  
  return usedRooms;
}

const minMeetingRooms3 = intervals => {
  intervals = intervals.sort((a, b) => a.start - b.start);
    
  const rooms = [];
  
  for (let i = 1; i < intervals.length; i++) {
    if (isOverlap(intervals[i], intervals[i - 1])) {
      joinRooms(rooms, intervals[i]);
      intervals.splice(i, 1);
      i--;
    }
  }
  
  return rooms.length + (intervals.length > 0 ? 1 : 0);
  
  function joinRooms(rooms, interval) {
    let added = false;

    for (let j = 0, l = rooms.length; j < l && !added; j++) {
      if (!isOverlap(interval, rooms[j][rooms[j].length - 1])) {
        rooms[j].push(interval);
        added = true;
      }
    }

    if (!added) {
      rooms.push([ interval ]);
    }
  }
  
  function isOverlap(one, two) {
    if (!(one.start >= two.end || one.end <= two.start)) {
      return true;
    }
    return false;
  }
}