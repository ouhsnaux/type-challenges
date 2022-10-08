type NumberArr1 = [9, 0, 1, 2, 3, 4, 5, 6, 7, 8]

type ReverseStr<T extends string> =
  T extends `${infer F}${infer Rest}`
    ? `${ReverseStr<Rest>}${F}`
    : ''

type StrToNum<T extends string> =
    T extends `${infer Num extends number}` ? Num : 0

type MinusStr<T extends string> =
  T extends `${infer B extends number}${infer R}`
    ? `${NumberArr1[B]}${B extends 0 ? MinusStr<R> : R}`
    : 0
type Minus1<T extends number> =
  ReverseStr<MinusStr<ReverseStr<`${T}`>>> extends `${infer Num}` ? Num : 0

type r111 = MinusStr<ReverseStr<'8'>>
type n1 = StrToNum<'8'>
type mm111 = Minus1<110>

type FlattenDepth<T extends any[], D extends number = 1> =
  D extends 0 ? T :
    T extends [infer First, ...infer Rest]
      ? [
        ...(First extends [infer Inner] ? FlattenDepth<Inner, Minus1<D>> : [First]),
        ...FlattenDepth<Rest, D>
      ]
      : []
