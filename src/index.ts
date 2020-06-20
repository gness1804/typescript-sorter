export class Sorter {
  constructor(public collection: number[]) {}
  sort(): void {
    for (let i = 0; i < this.collection.length; i++) {
      for (let j = 0; j < this.collection.length; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const origLeftElem = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = origLeftElem;
        }
      }
    }
  }
}

const sorter = new Sorter([9, 23, 3, -56, 2]);
sorter.sort();
