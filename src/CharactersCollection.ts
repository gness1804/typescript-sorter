export class CharactersCollection implements CollectionI {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    // without this line, the right hand char is undefined in the final place
    const right = this.data[rightIndex] || '';
    return this.data[leftIndex].toLowerCase() > right.toLowerCase();
  }

  swap(leftIndex: number, rightIndex: number): void {
    const arr = this.data.split('');

    const origLeftElem = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = origLeftElem;

    this.data = arr.join('');
  }
}
