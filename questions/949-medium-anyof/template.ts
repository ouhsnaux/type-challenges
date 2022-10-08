type Empty1 = 0 | false | '' | [] | Record<string, never>
type AnyOf<T extends readonly any[]> =
  // T extends [infer First, ...infer Rest]
  //   ? First extends Empty1
  //     ? AnyOf<Rest>
  //     : true
  //   : false
  // 所有值都是Empty1的子集
  T[number] extends Empty1 ? false : true
