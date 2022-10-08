type PerceParser<A extends string> =
  A extends `${infer Str}%` ? [Str, '%'] : [A, '']
type PercentageParser<A extends string> =
    A extends `${infer Sign}${infer Str}`
      ? Sign extends '-' | '+'
        ? [Sign, ...PerceParser<Str>]
        : ['', ...PerceParser<A>]
      : ['', '', '']
