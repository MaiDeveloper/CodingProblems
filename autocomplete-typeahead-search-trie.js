class TrieNode {
  constructor() {
    // CONTAINS ZERO OR MORE CHILDREN
    this.children = {};
    // INDICATE WHETHER THIS IS THE END OF A WORD
    this.last = false;
  }
}

class Autocomplete {
  constructor(list) {
    // INITIALIZE THE ROOT
    this.root = this.buildTrie(list);
  }

  /**
   * BUILD A TRIE DATA STRUCTURE
   * @param {string[]} list An array of words
   * @return {TrieNode}
   * @time complexity: O(N M) where N is the size of the list, M is the length of the words in the list
   * @space complexity: O(N M) where N is the size of the list, M is the length of the words in the list
   */
  buildTrie(list) {
    // THE ROOT OF THE TREE
    const root = new TrieNode();
    
    // FOR EACH WORD
    for (const word of list) {
      // ADD TO THE ROOT
      this.insert(root, word);
    }

    return root;
  }

  /**
   * INSERT A CHILD NODE TO THE PARENT NODE
   * A CHILD NODE IS CONSTRUCTED BASE ON EACH CHARACTER IN THE GIVEN WORD
   * @param {TrieNode} node 
   * @param {string} word
   * @time complexity: O(N) where N is the size of word
   * @space complexity: O(N) where N is the size of word
   */
  insert(parent, word) {
    // ITERATE EACH CHARACTER IN THE WORD
    for (const char of word) {
      // ADD A CHILD IF IT DOES NOT EXIST
      if (parent.children[char] === undefined) {
        parent.children[char] = new TrieNode();
      }
      // SET THE CURRENT CHILD AS PARENT
      parent = parent.children[char];
    }

    // SET TO TRUE BECAUSE THIS IS THE END OF THE WORD
    parent.last = true;
  }

  /**
   * @typeof {object} StartsWithResult
   * @param {TrieNode}  node
   * @param {string}    word
   */

  /**
   * CHECK IF THERE IS A TRIE STARTS WITH THE INPUT
   * @param {string} input 
   * @return {StartsWithResult}
   * @time complexity O(N) where N is the size of input
   * @space complexity O(N) where N is the size of input
   */
  isStartsWith(input) {
    let node = this.root,
        found = true,
        word = '';

    for (const char of input) {
      // CHECK IF THE CHARACTER EXIST
      if (node.children[char]) {
        node = node.children[char];
        word += char;
      } else if (node.children[char.toUpperCase()]) { // CASE INSENITIVE
        node = node.children[char.toUpperCase()];
        word += char.toUpperCase();
      } else {
        found = false;
        break;
      }
    }

    // RETURNS THE CURRENT NODE AND WORD
    return {
      node: (found ? node : null),
      word,
    };
  }

  /**
   * GET AN ARRAY OF SUGGESTIONS
   * @param {string} input
   * @return {string[]}
   * @time complexity: O(N) where N is the size of input
   * @space complexity: O(N) where N is the size of input
   */
  getAutocompleteListDfs(input) {
    // CHECK IF IT STARTS WITH INPUT
    const { node, word } = this.isStartsWith(input);

    // RETURN EMPTY ARRAY IF NO MATCH
    if (!node) {
      return [];
    }

    const words = [];

    // ADD TO THE RESULT IF THE CURRENT NODE ALSO THE LAST OF A WORD
    if (node.last) {
      words.push(word);
    }

    return words.concat(this.getWordsDepthFirstSearch(word, node));
  }

  /**
   * GET AN ARRAY OF SUGGESTIONS
   * @param {string} input
   * @return {string[]}
   * @time complexity: O(N) where N is the size of input
   * @space complexity: O(N) where N is the size of input
   */
  getAutocompleteListBfs(input) {
    // CHECK IF IT STARTS WITH INPUT
    const { node, word } = this.isStartsWith(input);

    // RETURN EMPTY ARRAY IF NO MATCH
    if (!node) {
      return [];
    }

    const words = [];

    // ADD TO THE RESULT IF THE CURRENT NODE ALSO THE LAST OF A WORD
    if (node.last) {
      words.push(word);
    }

    return words.concat(this.getWordsBreathFirstSearch(word, node));
  }

  /**
   * GET ALL THE WORDS FROM THE GIVEN NODE
   * USING DEPTH FIRST SEARCH ALGORITHM
   * @param {string} prefix
   * @param {TrieNode} node 
   * @return {string[]} An array of words
   * @time complexity: O(N) where N is the size of node
   * @space complexity: O(N) where N is the size of node
   */
  getWordsDepthFirstSearch(prefix, node) {
    if (!node) {
      return;
    }

    let words = [];

    for (const char in node.children) {
      // IF THIS IS THE END OF THE WORD
      if (node.children[char].last) {
        // CONCATENATE THE PREVIOUS CHARACTERS AND THE CURRENT CHARACTER
        // ADD IT TO THE WORDS
        words.push(prefix + char);
      }

      words = [
        ...words,
        ...this.getWordsDepthFirstSearch(prefix + char, node.children[char]) // RECURSIVELY GET THE REST OF THE CHARACTERS
      ];
    }

    return words;
  }

  /**
   * GET ALL THE WORDS FROM THE GIVEN NODE
   * USING BREATH FIRST SEARCH ALGORITHM
   * @param {string} prefix
   * @param {TrieNode} node 
   * @return {string[]} An array of words
   * @time complexity: O(N) where N is the size of node
   * @space complexity: O(N) where N is the size of node
   */
  getWordsBreathFirstSearch(prefix, node) {
    const words = [];
    const queue = [
      { node, prefix }
    ];

    while (queue.length) {
        const { node, prefix } = queue.shift();

        for (const key in node.children) {
          // IF THIS IS THE END OF THE WORD
          if (node.children[key].last) {
            // CONCATENATE THE PREVIOUS CHARACTERS AND THE CURRENT CHARACTER
          // ADD IT TO THE WORDS
          words.push(prefix + key);
          }

          // ADD TO THE QUEUE
          queue.push({
            node: node.children[key],
            prefix: prefix + key,
          });
        }
    }

    return words;
  }
}


// const states = [
//   'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
//   'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas',
//   'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 
//   'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 
//   'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon',
//   'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 
//   'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
// ];;
// const input = 'new ';

// const search = new Autocomplete(states);

// const result = search.getAutocompleteList(input);

// console.log(result);

export default Autocomplete;
