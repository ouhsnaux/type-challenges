// type Empty = ' ' | '\n' | '\t'

type TrimLeft1<S extends string> = S extends `${Empty}${infer Rest}` ? TrimLeft1<Rest> : S
type TrimRight1<S extends string> = S extends `${infer Rest}${Empty}` ? TrimRight1<Rest> : S
type Trim<S extends string> = TrimLeft1<TrimRight1<S>>
