type MyMerge<T1, T2> = {
  [P in keyof (T1&T2)]: (T1&T2)[P]
}

type PartialByKeys<T, K = keyof T> = MyMerge<{
  [P in Exclude<keyof T, K>]: T[P]
}, {
  [P in keyof T & K]?: T[P]
}>
