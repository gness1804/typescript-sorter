declare interface CollectionI {
  compare: (leftIndex: number, rightIndex: number) => boolean;
  swap: (leftIndex: number, rightIndex: number) => void;
  length: number;
};
