import { CharactersCollection } from './../CharactersCollection';
import { Sorter } from './../Sorter';
import { NumbersCollection } from './../NumbersCollection';
import { LinkedList } from '../LinkedList';

describe('Sorter', () => {
  it('should properly sort an array of numbers', () => {
    const collection = new NumbersCollection([9, 23, 3, -56, 2]);
    const sorter = new Sorter(collection);
    sorter.sort();
    expect(collection.data).toEqual([-56, 2, 3, 9, 23]);
  });

  it('should properly sort an array of strings', () => {
    const collection = new CharactersCollection('eUaowwG');
    const sorter = new Sorter(collection);
    sorter.sort();
    expect(collection.data).toEqual('aeGoUww');
  });

  // it('should properly sort a linked list', () => {
  //   const linkedList = new LinkedList();
  //
  //   [2, 34, -78, 455, 12, 3876].forEach((node) => {
  //     linkedList.add(node);
  //   })
  //
  //   expect(linkedList.print()).toBe([-78, 2, 12, 34, 455, 3876]);
  // });
});


