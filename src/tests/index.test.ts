const { Sorter } = require('../');

describe('Sorter', () => {
  it('should properly sort an array of numbers', () => {
    const unsortedArr = [9, 23, 3, -56, 2];
    const sorter = new Sorter(unsortedArr);
    sorter.sort();
    expect(sorter.collection).toEqual([-56, 2, 3, 9, 23]);
  });
});


