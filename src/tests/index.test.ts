import { CharactersCollection } from './../CharactersCollection';
import { Sorter } from './../Sorter';
import { NumbersCollection } from './../NumbersCollection';

describe('Sorter', () => {
  it('should properly sort an array of numbers', () => {
    const collection = new NumbersCollection([9, 23, 3, -56, 2]);
    collection.sort();
    expect(collection.data).toEqual([-56, 2, 3, 9, 23]);
  });

  it('should properly sort an array of strings', () => {
    const collection = new CharactersCollection('eUaowwG');
    collection.sort();
    expect(collection.data).toEqual('aeGoUww');
  });
});


