type TupleToNestedObject<T, U> =
  T extends [infer First extends keyof any, ...infer Rest]
    ? { [P in First]: TupleToNestedObject<Rest, U> }
    : U
