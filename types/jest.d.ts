/* eslint-disable @typescript-eslint/no-explicit-any */
declare function describe(name: string, fn: () => void): void;
declare function it(name: string, fn: () => void | Promise<void>): void;
declare function expect(actual: any): {
  toBeDefined(): void;
  toBe(expected: any): void;
  toEqual(expected: any): void;
  toBeTruthy(): void;
  toBeFalsy(): void;
};
