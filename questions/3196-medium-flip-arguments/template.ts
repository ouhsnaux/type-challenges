type Reverse1<T> = T extends [infer First, ...infer Rest] ? [...Reverse1<Rest>, First] : []

type FlipArguments<T> =
  T extends (...rest: infer Rest) => infer RetureT
    ? (...rest: Reverse1<Rest>) => RetureT
    : never
