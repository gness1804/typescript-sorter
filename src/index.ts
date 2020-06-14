interface FooI {
  bar: string;
}

class Foo implements FooI {
  bar: string;

  constructor(bar: string) {
    this.bar = bar;
  }
}
