import Autocomplete from '../autocomplete-typeahead-search-trie';

const states = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas',
  'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 
  'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 
  'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon',
  'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 
  'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

describe('Autocomplete using Trie', () => {

  let autocomplete;

  beforeAll(() => {
    autocomplete = new Autocomplete(states);
  });

  test('should build a trie', () => {
    const words = [
      'apple',
      'cat',
      'car',
      'app',
    ];
    const autocomplete = new Autocomplete(words);
    const result = JSON.stringify(autocomplete.root);
    const expected = JSON.stringify({
      children: {
        a: {
          children: {
            p: {
              children: {
                p: {
                  children: {
                    l: {
                      children: {
                        e: {
                          children: {},
                          last: true,
                        },
                      },
                      last: false,
                    },
                  },
                  last: true,
                },
              },
              last: false,
            },
          },
          last: false,
        },
        c: {
          children: {
            a: {
              children: {
                t: {
                  children: {},
                  last: true,
                },
                r: {
                  children: {},
                  last: true,
                },
              },
              last: false,
            },
          },
          last: false,
        }
      },
      last: false,
    });

    expect(result).toEqual(expected);
  });

  describe('Depth First Search', () => {

    test('should return an array', () => {
      const result = autocomplete.getAutocompleteListDfs('');
      expect(result).toBeInstanceOf(Array);
    });
  
    test('should return an empty array when there is no match', () => {
      const result = autocomplete.getAutocompleteListDfs('q');
      expect(result).toHaveLength(0);
    });
  
    test('should return a list of possible values', () => {
      const result = autocomplete.getAutocompleteListDfs('New');
      const expected = [ 'New Hampshire', 'New Jersey',  'New Mexico', 'New York' ];
      expect(result).toEqual(expected);
    });
  
    test('should return an array containing exact one element', () => {
      const result = autocomplete.getAutocompleteListDfs('New York');
      const expected = [ 'New York' ];
      expect(result).toEqual(expected);
    });

  });

  describe('Breath First Search', () => {

    test('should return an array', () => {
      const result = autocomplete.getAutocompleteListBfs('');
      expect(result).toBeInstanceOf(Array);
    });
  
    test('should return an empty array when there is no match', () => {
      const result = autocomplete.getAutocompleteListBfs('q');
      expect(result).toHaveLength(0);
    });
  
    test('should return a list of possible values', () => {
      const result = autocomplete.getAutocompleteListBfs('New');
      const expected = [ 'New York', 'New Jersey',  'New Mexico', 'New Hampshire' ];
      expect(result).toEqual(expected);
    });
  
    test('should return an array containing exact one element', () => {
      const result = autocomplete.getAutocompleteListBfs('New York');
      const expected = [ 'New York' ];
      expect(result).toEqual(expected);
    });

  });


});