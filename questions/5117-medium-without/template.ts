
type Without<T extends any[], U extends any[] | number, M extends any[] = U extends any[] ? U : [U]> =
  T extends [infer F, ...infer Rest]
    ? F extends M[number] ? Without<Rest, U> : [F, ...Without<Rest, U>]
    : []
