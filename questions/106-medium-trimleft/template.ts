type Empty = ' ' | '\n' | '\t'
type TrimLeft<S extends string> = S extends `${Empty}${infer Rest}` ? TrimLeft<Rest> : S
