type Prefix<Arr extends Array<string>, P extends string> =
  `${P}${Arr[number]}`
// Arr extends [infer First extends string, ...infer Rest extends Array<string>]
//   ? `${P}${First}` | Prefix<Rest, P>
//   : never

type BEM<B extends string, E extends string[], M extends string[]> =
  `${B}${E extends [] ? '' : Prefix<E, '__'>}${M extends [] ? '' : Prefix<M, '--'>}`
