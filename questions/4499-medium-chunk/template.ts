type Chunk<T extends any[], N extends number, R extends any[] = []> =
  T extends [infer First, ...infer Rest]
    ? [...R, First]['length'] extends N
      ? [[...R, First], ...Chunk<Rest, N>]
      : Chunk<Rest, N, [...R, First]>
    : R extends [] ? [] : [R]
