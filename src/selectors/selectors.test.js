import expect from 'expect';
import {authorsFormattedForDropdown} from './selectors';

describe('Authors Selectors', () => {
  describe('auhorsFormattedForDropdown', () => {
    it('should return author data formatted for use in a dropdown', () => {
      const authors = [
        {id: 'cory-house', firstName: 'Cory', lastName: 'House'},
        {id: 'brian-krueger', firstName: 'Brian', lastName: 'Krueger'}
      ];

      const expected = [
        {value: 'cory-house', text: 'Cory House'},
        {value: 'brian-krueger', text: 'Brian Krueger'}
      ];

      expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    });
  });
});
