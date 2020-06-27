import { Node } from './Node';

export class LinkedList implements LinkedListI {
  head: Node | null = null;

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
}
