export default function ({a, b}: {
  a: number;
  b: number;
}) {
  return a + b;
}

export const array = [1, 2];

export const array2 = [
  1,
  2,
  3
];

const x = {};

export const b = {...x};

interface Foo {
  foo(s: string): void;
  bar(): void;
}