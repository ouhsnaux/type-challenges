type StrToUnion<R extends string> = R extends `${infer F}${infer R}` ? F | StrToUnion<R> : ''

type ExcludeStr <Str extends string, R> = Exclude<StrToUnion<Str>, R>

type GetXX<Last extends string, R extends string> = keyof {
  [P in Last as `${P}${ExcludeStr<R, StrToUnion<P>> | ''}`]: R
} & string

type AllCombinations<
  S extends string,
  Last extends string = '',
  R extends string =StrToUnion<S>,
  Rest = S
> =
  Rest extends `${infer First}${infer Rest1}`
    ? AllCombinations<S, GetXX<Last, R>, R, Rest1>
    : Last

    type aa1 = '' | 'A' | 'B' | 'C'
    | 'AB' | 'AC' | 'BA' | 'BC' | 'CA' | 'CB'
    | 'ABC' | 'ACB' | 'BAC' | 'BCA' | 'CAB' | 'CBA'

    type s1 = StrToUnion<'ABC'>
    type s11 = AllCombinations<'ABC'>
    type e1 = `X${ExcludeStr<'AD', 'A' | 'B' | 'C'>}`
    type e11 = GetXX<'AB', 'A' | 'B' | 'C' | ''>
    type e111 = GetXX<'A', 'A' | 'B' | 'C' | ''>

    type tt1 = '1' | '2'
    type ttttt = tt1 extends '2' | '3' ? tt1 : never
