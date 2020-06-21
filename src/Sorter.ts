export class Sorter implements SorterI {
  constructor(public collection: CollectionI) {}
  sort(): void {
    for (let i = 0; i < this.collection.length; i++) {
      for (let j = 0; j < this.collection.length; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}
