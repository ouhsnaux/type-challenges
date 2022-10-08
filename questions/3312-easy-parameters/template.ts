type MyParameters<T extends (...args: any[]) => any> =
  T extends (...rest: infer Rest) => any ? Rest : never
