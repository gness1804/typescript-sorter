import { Sorter } from './../Sorter';
import { NumbersCollection } from './../NumbersCollection';

describe('Sorter', () => {
  it('should properly sort an array of numbers', () => {
    const collection = new NumbersCollection([9, 23, 3, -56, 2]);
    const sorter = new Sorter(collection);
    sorter.sort();
    expect(collection.data).toEqual([-56, 2, 3, 9, 23]);
  });
});


