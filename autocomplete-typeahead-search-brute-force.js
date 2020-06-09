const states = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas',
  'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 
  'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 
  'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon',
  'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 
  'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

class AutocompleteBruteForce {
  constructor(list) {
    this.list = list;
  }

  /**
   * Check if the string starts with another string
   * @param {string} word 
   * @param {string} input 
   * @return {boolean} whether or not the word starts with input
   * @time complexity O(1)
   * @space complexity O(1)
   */
  static isStartsWith(word, input) {
    return word.toUpperCase().startsWith(input.toUpperCase());
  }

  /**
   * Get an array of possible values
   * @param {string}    input 
   * @return {string[]} an array of possible values
   * @time complexity O(M) where M is the size of list
   * @space complexity O(M) where M is the size of list
   */
  getAutocompleteList(input) {
    // RETURN EMPTY ARRAY IF INPUT IS EMPTY
    if (!input) {
      return [];
    }

    // HOLD ALL POSSIBLE VALUES
    const possibleValues = [];

    for (let i = 0; i < this.list.length; i++) {
      // ADD TO THE RETURN ARRAY IF THE ITEM STARTS WITH THE INPUT
      if (AutocompleteBruteForce.isStartsWith(this.list[i], input)) {
        possibleValues.push(this.list[i]);
      }
    }

    return possibleValues;
  }
}

// /**
//  * Get a list of possible states
//  * @param {string[]}  states 
//  * @param {string}    input 
//  * @return {string[]} an array of states
//  * @time complexity O(M) where M is the size of states
//  * @space complexity O(M) where M s the size of states
//  */
// const bruteForce = (states, input) => {
//   const list = [];

//   // CONVERT TO UPPERCASE
//   // SO THEY ARE COMPARING IN SAME LETTER CASE OR CASE INSENSITIVE
//   input = input.toUpperCase();

//   for (let i = 0; i < states.length; i++) {
//     // CHECK IF THE STATE STARTS WITH INPUT
//     if (states[i].toUpperCase().startsWith(input)) {
//       // ADD TO THE LIST
//       list.push(states[i]);
//     }
//   }

//   return list;
// };

// export default bruteForce;
export default AutocompleteBruteForce;



