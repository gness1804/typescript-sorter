declare interface LinkedListI extends CollectionI {
  head: import('../Node') | null;
  add: (num: number) => void;
  at: (num: number) => import('../Node');
  print: () => number[];
}
