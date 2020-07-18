/**
 * 
 * LRU Cache
 * 
 * Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.
 * 
 * get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
 * put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.
 * 
 * The cache is initialized with a positive capacity.
 * 
 * Follow up:
 * Could you do both operations in O(1) time complexity?
 * 
 * Example:
 * 
 * LRUCache cache = new LRUCache( 2 );
 * 
 * cache.put(1, 1);
 * cache.put(2, 2);
 * cache.get(1);       // returns 1
 * cache.put(3, 3);    // evicts key 2
 * cache.get(2);       // returns -1 (not found)
 * cache.put(4, 4);    // evicts key 1
 * cache.get(1);       // returns -1 (not found)
 * cache.get(3);       // returns 3
 * cache.get(4);       // returns 4
 * 
 * 
 */

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.list = new DoublyLinkedList();
    this.cache = {};
  }

  get(key) {
    const node = this.cache[key];

    if (node === undefined) {
      return -1;
    }

    this.list.removeNode(node);
    this.list.addNode(node);

    return node.value;
  }

  put(key, value) {
    const node = this.cache[key];

    if (node) {
      node.value = value;
      this.list.removeNode(node);
      this.list.addNode(node);
      return;
    }

    const newNode = new DoublyLinkedNode(key, value);

    this.list.addNode(newNode);
    this.cache[key] = newNode;
    this.size++;

    if (this.size > this.capacity) {
      const removed = this.list.pop();

      this.list.removeNode(removed);
      delete this.cache[removed.key];
    }
  }
}

class DoublyLinkedNode {
  constructor(key, value, prev, next) {
    this.key = key;
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = new DoublyLinkedNode();
    this.tail = new DoublyLinkedNode();

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  addNode(node) {
    node.prev = this.head;
    node.next = this.head.next;

    this.head.next.prev = node;
    this.head.next = node;
  }

  removeNode(node) {
    const prev = node.prev;
    const next = node.next;

    prev.next = next;
    next.prev = prev;
  }

  pop() {
    const node = this.tail.prev;

    this.removeNode(node);

    return node;
  }
}

// /**
//  * @param {number} capacity
//  */
// var LRUCache = function(capacity) {
//   this.capacity = capacity;
//   this.size = 0;
//   this.list = new DoublyLinkedList();
//   this.nodes = {};
// };

// /** 
//  * @param {number} key
//  * @return {number}
//  */
// LRUCache.prototype.get = function(key) {
//   const node = this.nodes[key];
  
//   if (node === undefined) {
//     return -1;
//   }
  
//   this.list.moveToHead(node);
  
//   return node.value;
// };

// /** 
//  * @param {number} key 
//  * @param {number} value
//  * @return {void}
//  */
// LRUCache.prototype.put = function(key, value) {
//   const node = this.nodes[key];
  
//   if (node) {
//     node.value = value;
//     this.list.moveToHead(node);
//   } else {
//     const newNode = new DoublyLinkedNode(key, value);
    
//     this.nodes[key] = newNode;
//     this.list.addNode(newNode);
//     this.size++;
    
//     if (this.size > this.capacity) {
//       const tail = this.list.popTail();
//       delete this.nodes[tail.key];
//       this.size--;
//     }
//   }
// };

// /** 
//  * Your LRUCache object will be instantiated and called as such:
//  * var obj = new LRUCache(capacity)
//  * var param_1 = obj.get(key)
//  * obj.put(key,value)
//  */

// class DoublyLinkedNode {
//   constructor(key, value, prev, next) {
//     this.key = key;
//     this.value = value;
//     this.prev = prev;
//     this.next = next;
//   }
// }

// class DoublyLinkedList {
//   constructor() {
//     this.head = new DoublyLinkedNode();
//     this.tail = new DoublyLinkedNode();
    
//     this.head.next = this.tail;
//     this.tail.prev = this.head;
//   }
  
//   removeNode(node) {
//     const prev = node.prev;
//     const next = node.next;
    
//     prev.next = next;
//     next.prev = prev;
//   }
  
//   addNode(node) {
//     node.prev = this.head;
//     node.next = this.head.next;
    
//     this.head.next.prev = node;
//     this.head.next = node;
//   }
  
//   popTail() {
//     const node = this.tail.prev;
    
//     this.removeNode(node);
    
//     return node;
//   }
  
//   moveToHead(node) {
//     this.removeNode(node);
//     this.addNode(node);
//   }
// }


// /**
//  * @param {number} capacity
//  */
// var LRUCache = function(capacity) {
//   this.cache = {};
//   this.key = [];
//   this.capacity = capacity;
// };

// /** 
// * @param {number} key
// * @return {number}
// */
// LRUCache.prototype.get = function(key) {
//   if (this.cache[key] === undefined) {
//       return -1;
//   }
  
//   const i = this.key.indexOf(key);
//   this.key.splice(i, 1);
//   this.key.push(key);
  
//   return this.cache[key];
// };

// /** 
// * @param {number} key 
// * @param {number} value
// * @return {void}
// */
// LRUCache.prototype.put = function(key, value) {
//   if (this.cache[key] !== undefined) {
//       this.cache[key] = value;
//       const i = this.key.indexOf(key);
//       this.key.splice(i, 1);
//       this.key.push(key);
//   } else {
//       if (this.key.length == this.capacity) {
//           delete this.cache[this.key.shift()];
//       }
//       this.key.push(key);
//       this.cache[key] = value;
//   }    
// };

// /** 
// * Your LRUCache object will be instantiated and called as such:
// * var obj = Object.create(LRUCache).createNew(capacity)
// * var param_1 = obj.get(key)
// * obj.put(key,value)
// */