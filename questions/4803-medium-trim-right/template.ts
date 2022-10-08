type Space = ' ' | '\t' | '\n'

type TrimRight<S extends string> =
  S extends `${infer R}${Space}` ? TrimRight<R> : S
