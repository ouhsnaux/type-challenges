type Zip<T extends any[], U extends any[]> =
  T extends [infer First, ...infer Rest]
    ? U extends [infer UFirst, ...infer URest]
      ? [[First, UFirst], ...Zip<Rest, URest>]
      : []
    : []

// type a1 = ['1', '2']
// type c1 = a1[2]
