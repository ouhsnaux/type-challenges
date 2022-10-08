type Join<T, U extends string | number> =
  T extends [infer First extends string, ...infer Rest]
    ? `${First}${Rest['length'] extends 0 ? '' : `${U}`}${Join<Rest, U>}`
    : ''

    type t1121 = Join<['a', 'p', 'p', 'l', 'e'], '-'>
