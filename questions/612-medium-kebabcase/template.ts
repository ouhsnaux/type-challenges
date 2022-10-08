type KebabCase<S, IsFirstLetter extends boolean = true> =
  S extends `${infer First}${infer Rest}`
    ? `${First extends Lowercase<First>
      ? First
      : `${IsFirstLetter extends true ? '' : '-'}${Lowercase<First>}`
      }${KebabCase<Rest, false>}`
    : ''
