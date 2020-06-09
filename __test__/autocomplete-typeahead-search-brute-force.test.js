import Autocomplete from '../autocomplete-typeahead-search-brute-force';

const states = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas',
  'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 
  'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 
  'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon',
  'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 
  'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

describe('Brute Force', () => {

  let autocomplete;

  beforeAll(() => {
    autocomplete = new Autocomplete(states);
  });

  test('should return an array', () => {
    const result = autocomplete.getAutocompleteList('');
    expect(result).toBeInstanceOf(Array);
  });

  test('should return an empty array when there is no match', () => {
    const result = autocomplete.getAutocompleteList('q');
    expect(result).toHaveLength(0);
  });

  test('should return a list of possible values', () => {
    const result = autocomplete.getAutocompleteList('New');
    const expected = [ 'New Hampshire', 'New Jersey',  'New Mexico', 'New York' ];
    expect(result).toEqual(expected);
  });

  test('should return an array containing exact one element', () => {
    const result = autocomplete.getAutocompleteList('New York');
    const expected = [ 'New York' ];
    expect(result).toEqual(expected);
  });

});