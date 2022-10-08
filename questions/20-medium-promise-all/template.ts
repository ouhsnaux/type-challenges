type VOfPromise<T> = T extends Promise<infer V> ? V : T

declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{
  [P in keyof T]: VOfPromise<T[P]>
}>
