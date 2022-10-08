type StrToArray<S> = S extends `${infer First}${infer Rest}` ? [First, ...StrToArray<Rest>] : []
type LengthOfString1<S extends string> = StrToArray<S>['length']
