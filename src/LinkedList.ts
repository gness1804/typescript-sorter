import { Node } from './Node';
import { Sorter } from './Sorter';

export class LinkedList extends Sorter {
  head: Node | null;

  constructor() {
    super();
    this.head = null;
  }

  add(num: number): void {
    const node = new Node(num);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) tail = tail.next;

    tail.next = node;
  }

  get length(): number {
    if (!this.head) return 0;

    let total = 1;
    let node = this.head;

    while (node.next) {
      total++;
      node = node.next;
    }
    return total;
  }

  at(index: number): Node {
    if (!this.head) throw new Error('Index out of bounds!');

    let counter = 0; // start at index 0
    let targetNode: Node | null = this.head;

    while (targetNode) {
      if (counter === index) return targetNode;

      counter++;
      targetNode = targetNode.next;
    }
    throw new Error('Index out of bounds!');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) throw new Error('List is empty!');

    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    return leftNode.data > rightNode.data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    // this isn't a deep swap; just swaps the values, not the entire nodes
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const origLeftElemVal = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = origLeftElemVal;
  }

  print(): number[] {
    if (!this.head) throw new Error('Empty list!');

    let node: Node | null = this.head;
    const result = [];
    while (node) {
      result.push(node.data);
      node = node.next;
    }
    return result;
  }
}
