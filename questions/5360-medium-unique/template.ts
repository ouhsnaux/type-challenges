type Unique<T extends Array<any>, U = never> =
  T extends [infer First, ...infer Rest]
    ? First extends U ? Unique<Rest, U> : [First, ...Unique<Rest, U | First>]
    : []
